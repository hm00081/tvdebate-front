/* eslint-disable no-unused-vars */
import { SimilarityBlock, UtteranceObjectForDrawing } from "../interfaces";
export class UncertainIconDrawer {
  private _visible: boolean = false;
  private _similarityBlock: SimilarityBlock | null = null;

  private readonly uncertainIconGSlection!: d3.Selection<
    SVGGElement,
    MouseEvent,
    HTMLElement,
    any
  >;

  public constructor(
    private readonly utteranceObjectsForDrawing: UtteranceObjectForDrawing[],
    svgSelection: d3.Selection<SVGGElement, MouseEvent, HTMLElement, any>
  ) {
    this.uncertainIconGSlection = svgSelection
      .append("g")
      .style("visibility", "hidden");

    this.uncertainIconGSlection
      .append("path")
      .attr(
        "d",
        "M285,627.1c28.7,0,56.1-0.4,83.5,0.1c19.8,0.4,34.7,9.5,42.7,28.1c7.6,17.7,4.4,34.1-8,48.5c-3.9,4.5-9.1,8-13.8,11.9\
	c14.5,32.4,11.1,46.8-16.5,69.5c15,31.2,11.8,47.4-13.7,69.4c2.7,7.5,6.7,14.6,7.9,22.3c4.7,28.9-15.8,53.4-45.6,53.6\
	c-59,0.5-117.9,0.1-176.9,0c-16.2,0-30.2-6.1-42.4-17.5c-9.6,11.2-20.7,18.6-35.6,18.6c-23.7,0-42.3-17.1-42.6-41.4\
	c-0.6-43.5-0.3-87-0.3-130.5c0-29,0-58,0.1-87c0.1-23.9,11.2-40.5,30.6-45.8c20.5-5.6,37.8,2.4,50.6,23.5c0.3,0.6,1,0.9,2.8,2.5\
	c18.9-19.2,40.8-32.7,70.2-24.4c0.4-5,0.8-7.8,0.8-10.6c0-49.7-0.1-99.3,0.2-149c0-7.3-1.8-10.4-9.3-12.6\
	C60.1,424.3-7.9,325.2,0.7,210.6C8.6,106.1,95.2,15.1,199.1,2C329-14.3,440.9,69.6,461.8,198.9c18,111.6-53.7,224.4-163.5,256\
	c-10.6,3-13.8,7.1-13.6,18.3C285.4,523.8,285,574.5,285,627.1z M232.8,443.1c115.5-0.3,209.8-94.9,209.7-210.6\
	c0-117.2-94.2-211.2-211.2-211.1C115.6,21.7,21.4,116.2,21.8,231.8C22.3,349.5,116,443.5,232.8,443.1z M261.4,648.8\
	c-34.7,0-69.4-0.1-104.1,0.2c-4.7,0-10.2,1.2-14,3.8c-9.9,6.6-19.4,13.9-28.4,21.7c-3,2.6-5.6,7.6-5.6,11.6\
	c-0.4,60.9-0.4,121.8-0.2,182.6c0.1,27.2,13,39.9,39.9,40.1c30.4,0.2,60.7,0.1,91.1,0c27.5,0,55,0.3,82.4-0.4\
	c14.8-0.4,23.8-10.6,23.7-24.3c-0.2-13.2-9.1-22.6-23.3-23.7c-7.2-0.6-14.5-0.5-21.7-0.4c-7.9,0.2-15.6-0.9-15.7-10.5\
	c0-10.2,8-11.4,16.3-11.3c11.9,0.1,23.9,0.4,35.8-0.2c13.2-0.6,22.9-11.5,22.5-24.5c-0.3-12.4-10-22.7-22.7-23.4\
	c-7.9-0.5-15.9-0.2-23.9-0.2c-7.5,0-13.2-2.9-13.2-11c0.1-8.1,5.7-10.9,13.3-10.8c12.3,0.1,24.6,0.3,36.9-0.1\
	c14.5-0.5,25.6-11.3,25.5-24.4c0-12.8-10.3-23-24.7-23.8c-8.7-0.5-17.3-0.2-26-0.3c-7.4-0.1-14.3-1.6-14.5-10.8\
	c-0.2-9.3,6.4-11,14-11c14.5,0,28.9,0.4,43.4-0.2c16.5-0.6,27.8-14.3,24.5-28.9c-2.7-12.4-12.6-19.8-27.4-19.8\
	C330.8,648.7,296.1,648.8,261.4,648.8z M45.6,779c0,35.5-0.1,71,0,106.4c0,15.7,8,24.6,21.2,24.4c12.6-0.2,20.3-9.3,20.3-24.3\
	c0.1-71,0-141.9,0-212.9c0-16.1-8.4-26-21.5-25.7c-12.6,0.3-20.1,9.7-20.1,25.6C45.6,708.1,45.6,743.5,45.6,779z M201.3,626.4\
	c21.1,0,41.1,0,61.4,0c0-54.5,0-108.3,0-162.2c-20.7,0-40.7,0-61.4,0C201.3,517.9,201.3,571.7,201.3,626.4z"
      );

    this.uncertainIconGSlection
      .append("path")
      .attr(
        "d",
        "M261.4,649.4c34.7,0,69.4-0.1,104.1,0c14.8,0.1,24.6,7.4,27.4,19.8c3.2,14.6-8,28.3-24.5,28.9\
	c-14.4,0.5-28.9,0.2-43.4,0.2c-7.6,0-14.2,1.7-14,10.9s7.1,10.7,14.5,10.8c8.7,0.1,17.4-0.2,26,0.3c14.3,0.8,24.6,10.9,24.7,23.7\
	c0,13-11,23.9-25.5,24.3c-12.3,0.4-24.6,0.2-36.9,0.1c-7.6-0.1-13.2,2.7-13.3,10.8c-0.1,8.1,5.7,11,13.2,11c8,0,15.9-0.2,23.9,0.2\
	c12.6,0.7,22.4,11,22.7,23.3c0.3,12.9-9.3,23.8-22.5,24.5c-11.9,0.6-23.9,0.3-35.8,0.2c-8.3-0.1-16.3,1.1-16.3,11.3\
	c0,9.6,7.8,10.7,15.7,10.5c7.2-0.2,14.5-0.2,21.7,0.4c14.2,1.1,23.1,10.5,23.3,23.7c0.2,13.7-8.9,23.9-23.7,24.3\
	c-27.5,0.7-55,0.4-82.4,0.4c-30.4,0-60.7,0.1-91.1,0c-27-0.2-39.8-12.9-39.9-40c-0.2-60.7-0.2-121.5,0.2-182.2\
	c0-3.9,2.6-8.9,5.6-11.5c9-7.8,18.5-15.1,28.4-21.7c3.9-2.6,9.3-3.7,14-3.8C192,649.3,226.7,649.4,261.4,649.4z"
      )
      .style("fill", "#FFFFFF");

    this.uncertainIconGSlection
      .append("path")
      .attr(
        "d",
        "M45.6,779.3c0-35.4,0-70.8,0-106.2c0-15.9,7.5-25.3,20.1-25.6c13-0.3,21.4,9.6,21.5,25.6\
	c0.1,70.8,0.1,141.6,0,212.4c0,15-7.7,24-20.3,24.3c-13.2,0.2-21.2-8.7-21.2-24.3C45.5,850.2,45.6,814.7,45.6,779.3z"
      )
      .style("fill", "#FFFFFF");

    this.uncertainIconGSlection
      .append("path")
      .attr(
        "d",
        "M201.3,627c0-54.5,0-108.2,0-161.8c20.7,0,40.8,0,61.4,0c0,53.7,0,107.4,0,161.8C242.4,627,222.3,627,201.3,627z"
      )
      .style("fill", "#FFFFFF");

    this.uncertainIconGSlection
      .append("text")
      .attr("transform", "matrix(1 0 0 1 87.9887 247.1015)")
      .style("font-family", "ArialMT")
      .style("font-size", "345.7846px")
      .text("...");
  }

  public update() {
    if (this._similarityBlock !== null) {
      const colUtteranceObject = this.utteranceObjectsForDrawing[
        this._similarityBlock.columnUtteranceIndex
      ];
      const transformProperty = `translate(${
        colUtteranceObject.beginningPointOfXY +
        colUtteranceObject.width / 2 -
        2.5
      }, ${colUtteranceObject.beginningPointOfXY - 10} ) scale(0.01, 0.01)`;

      this.uncertainIconGSlection
        .attr("transform", transformProperty)
        .style("visibility", "visible");
    } else {
      this.uncertainIconGSlection.style("visibility", "hidden");
    }
  }

  public set similarityBlock(similarityBlock: SimilarityBlock | null) {
    this._similarityBlock = similarityBlock;
  }

  // public set visible(visible: boolean) {
  //   this._visible = visible;
  // }
}
