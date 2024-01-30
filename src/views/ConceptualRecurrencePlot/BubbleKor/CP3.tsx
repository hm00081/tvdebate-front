/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import * as React from "react";
//import "./Tooltip.css"; // 툴팁 스타일을 정의하는 CSS 파일
import { useState } from "react";
import { DataStructureSet } from "../DataStructureMaker/DataStructureManager";
import { DataStructureManager } from "../DataStructureMaker/DataStructureManager";
import { SentenceObject } from "../../../interfaces/DebateDataInterface";
import { TranscriptViewerMethods } from "../TranscriptViewer/TranscriptViewer";
import Pie from "./Pie";

interface CP3KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  //cpPositions: { [key: string]: { x: number; y: number } };
}

const CP3K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP3KProps) => {
  const countCompoundTerms = (
    data: SentenceObject[]
  ): { [key: string]: number } => {
    const result: { [key: string]: number } = {};
    data.forEach(({ compoundTermCountDict }) => {
      Object.keys(compoundTermCountDict).forEach((key) => {
        result[key] = (result[key] || 0) + compoundTermCountDict[key];
      });
    });
    return result;
  };
  //const position = cpPositions["모병제, 병력 충원에 문제 없나?"];
  const getTopCompoundTerms = (
    compoundTerms: { [key: string]: number },
    topN: number
  ) => {
    return Object.entries(compoundTerms)
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN)
      .map(([term]) => term);
  };

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (index: number) => {
    if (!dataStructureSet) {
      console.error("dataStructureSet is not provided to CP2K component");
      return;
    }
    // transcriptViewerRef의 current 속성의 존재 여부 확인
    if (!transcriptViewerRef.current) {
      console.error("transcriptViewerRef is not set");
      return;
    }

    const utterance =
      dataStructureSet.utteranceObjectsForDrawingManager
        .utteranceObjectsForDrawing[index];
    const compoundTerms = countCompoundTerms(utterance.sentenceObjects);
    const topTerms = getTopCompoundTerms(compoundTerms, 30);

    if (transcriptViewerRef.current) {
      transcriptViewerRef.current.scrollToIndex(index);
      transcriptViewerRef.current.highlightKeywords(topTerms, [], index, -1);
    }
  };

  return (
    <>
      <svg
        id="\uB808\uC774\uC5B4_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1753 318"
        // style={{
        //   enableBackground: "new 0 0 1753 318",
        // }}
        xmlSpace="preserve"
        {...props}
      >
        {/* 다른 것도 수정해주기 */}
        <style type="text/css">
          {
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14px;}\n\t.st14{font-size:8px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP3">
          <g className="T3">
            <g className="P3">
              <g>
                <path
                  className="st20"
                  d="M598.2,68.5c10.3-2.9,19.8-4.3,30.5-4.3v-8.6c-11.5,0-21.9,1.4-32.9,4.6L598.2,68.5L598.2,68.5z"
                ></path>
                <title>
                  {`scriptIndex: 58\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[58]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[58]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M598.2,68.5l-2.4-8.3c-10.8,3.1-20.8,7.6-30.4,13.5L570,81C578.9,75.5,588.2,71.3,598.2,68.5z"
                ></path>
                <title>
                  {`scriptIndex: 57\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[57]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[57]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M569.9,81C570,80.9,570,80.9,569.9,81l-4.6-7.4c-17.7,11.1-29.7,23.4-40.2,41.5l7.5,4.3 C542.4,102.6,553.6,91.1,569.9,81z"
                ></path>
                <title>
                  {`scriptIndex: 56\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[56]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[56]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M532.6,119.5c0-0.1,0.1-0.1,0.1-0.2l-7.5-4.3c-1.4,2.4-2.6,4.8-3.9,7.4l7.7,3.8 C530.2,123.9,531.3,121.7,532.6,119.5z"
                ></path>
                <title>
                  {`scriptIndex: 55\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[55]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[55]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M528.9,126.3c0-0.1,0.1-0.1,0.1-0.2l-7.7-3.8c-1.4,2.9-2.2,4.6-3.3,7.6l7.9,3.2 C526.9,130.5,527.6,128.8,528.9,126.3z"
                ></path>
                <title>
                  {`scriptIndex: 54\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[54]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[54]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M525.8,133.3c0-0.1,0.1-0.1,0.1-0.2l-7.9-3.2c-0.7,1.7-1.6,4-2.2,5.9l8.2,2.8 C524.4,136.9,525.1,134.9,525.8,133.3z"
                ></path>
                <title>
                  {`scriptIndex: 53\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[53]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[53]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M523.7,138.7c0-0.1,0.1-0.2,0.1-0.2l-8.2-2.8c-0.7,2-1.3,4-1.8,6l8.3,2.3 C522.6,142.3,523.1,140.4,523.7,138.7z"
                ></path>
                <title>
                  {`scriptIndex: 52\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[52]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[52]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M522,144.2c0-0.1,0-0.2,0.1-0.2l-8.3-2.3c-0.7,2.4-1,3.6-1.6,6l8.4,2C521.1,147.6,521.4,146.4,522,144.2z"
                ></path>
                <title>
                  {`scriptIndex: 51\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[51]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[51]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M520.5,149.9c0-0.1,0-0.2,0.1-0.3l-8.4-2c-0.8,3.7-1.7,8.5-2.2,12.2l8.5,1C519,157.5,519.7,153.2,520.5,149.9 z"
                ></path>
                <title>
                  {`scriptIndex: 50\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[50]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[50]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M518.5,161.3c0-0.1,0-0.2,0-0.3l-8.5-1c-0.5,3.5-0.7,6.9-0.8,10.4l8.5,0.3 C517.8,167.5,518.1,164.4,518.5,161.3z"
                ></path>
                <title>
                  {`scriptIndex: 49\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[49]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[49]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M517.7,171c0-0.1,0-0.2,0-0.3l-8.5-0.3c-0.1,2-0.1,2.3-0.1,4.1h8.5C517.6,173,517.7,172.6,517.7,171z"
                ></path>
                <title>
                  {`scriptIndex: 48\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[48]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[48]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M517.6,174.8c0-0.1,0-0.2,0-0.3h-8.5c0,2.6,0.1,5.6,0.3,8.3l8.4-0.6C517.7,179.8,517.6,177.2,517.6,174.8z"
                ></path>
                <title>
                  {`scriptIndex: 47\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[47]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[47]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M518,182.5c0-0.1,0-0.2,0-0.3l-8.4,0.6c0.1,1.5,0.2,2.6,0.3,4.1l8.4-0.9C518.1,184.8,518.1,183.7,518,182.5z"
                ></path>
                <title>
                  {`scriptIndex: 46\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[46]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[46]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M518.3,186.4c0-0.1,0-0.2,0-0.3l-8.4,0.9c0.5,4,0.8,6.3,1.5,10.3l8.3-1.6C519,192.2,518.7,190,518.3,186.4z"
                ></path>
                <title>
                  {`scriptIndex: 45\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[45]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[45]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M519.7,196c0-0.1,0-0.2-0.1-0.3l-8.3,1.6c0.5,2.4,1.3,5.6,1.8,8.1l8.2-2.2C520.8,200.9,520.2,198,519.7,196z"
                ></path>
                <title>
                  {`scriptIndex: 44\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[44]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[44]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M521.4,203.4c0-0.1-0.1-0.2-0.1-0.3l-8.2,2.2c5.3,19.5,14.3,35.6,28.1,50.3l6-5.6 C534.5,236.4,526.4,221.4,521.4,203.4z"
                ></path>
                <title>
                  {`scriptIndex: 43\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[43]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[43]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M547.6,250.2c-0.1-0.1-0.1-0.1-0.2-0.2l-6,5.6c2.5,2.6,4.7,4.8,7.5,7.3l5.5-6.1 C551.8,254.7,549.8,252.6,547.6,250.2z"
                ></path>
                <title>
                  {`scriptIndex: 42\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[42]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[42]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M554.5,257c-0.1-0.1-0.1-0.1-0.2-0.2l-5.5,6.1c1,0.9,0.6,0.5,1.6,1.4l5.4-6.1 C555,257.6,555.3,257.8,554.5,257z"
                ></path>
                <title>
                  {`scriptIndex: 41\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[41]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[41]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M556,258.3c-0.1-0.1-0.1-0.1-0.2-0.2l-5.4,6.1c3,2.5,6.6,5.4,9.9,7.7l4.7-6.7 C562,263.2,558.6,260.7,556,258.3z"
                ></path>
                <title>
                  {`scriptIndex: 40\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[40]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[40]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M565.1,265.4c-0.1,0-0.1-0.1-0.2-0.1l-4.7,6.7c1.6,1,1.8,1.3,3.5,2.3l4.5-6.8 C566.8,266.6,566.5,266.3,565.1,265.4z"
                ></path>
                <title>
                  {`scriptIndex: 39\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[39]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[39]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M568.3,267.6c-0.1-0.1-0.1-0.1-0.2-0.1l-4.5,6.8c8.2,5.3,16.9,9.6,26.3,12.7l2.6-7.6 C584,276.3,575.9,272.4,568.3,267.6z"
                ></path>
                <title>
                  {`scriptIndex: 38\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[38]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[38]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M592.7,279.5c-0.1,0-0.1,0-0.2-0.1l-2.6,7.6c20.7,7,40.3,8.4,61.7,4.3l-1.5-7.8 C630.1,287.3,611.9,286,592.7,279.5z"
                ></path>
                <title>
                  {`scriptIndex: 37\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[37]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[37]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M675.9,275.1c-8.9,4.1-16.1,6.4-25.8,8.3c0,0,0,0-0.1,0l1.5,7.8c10.4-2,18.2-4.5,27.8-9L675.9,275.1 C676,275.1,676,275.1,675.9,275.1z"
                ></path>
                <title>
                  {`scriptIndex: 36\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[36]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[36]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M715.4,244.4c-11.2,13.7-23.4,23.1-39.4,30.6l3.3,7.3c17.3-7.9,30.4-18.2,42.4-32.9l-6.2-5.1 C715.5,244.3,715.4,244.3,715.4,244.4z"
                ></path>
                <title>
                  {`scriptIndex: 35\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[35]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[35]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M726.2,228.4c-3.2,5.9-6.4,10.6-10.7,15.9l6.2,5.1c4.6-5.6,8.1-10.8,11.6-17.2l-7.1-3.9 C726.3,228.3,726.2,228.3,726.2,228.4z"
                ></path>
                <title>
                  {`scriptIndex: 34\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[34]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[34]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M735.9,205.3c-2.3,8.2-5.4,15.5-9.6,22.9l7.1,3.9c4.5-8.1,7.8-16,10.4-24.9l-7.8-2.2 C735.9,205.1,735.9,205.2,735.9,205.3z"
                ></path>
                <title>
                  {`scriptIndex: 33\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[33]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[33]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M738.1,196c-0.7,3.5-1.3,5.8-2.2,9.1l7.8,2.2c1-3.7,1.7-6.3,2.4-10.1l-8.1-1.5 C738.2,195.7,738.2,195.8,738.1,196z"
                ></path>
                <title>
                  {`scriptIndex: 32\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[32]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[32]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M744.3,143.7l-8.1,2.2c0,0.1,0.1,0.2,0.1,0.3c4.5,16.7,5.1,32.5,1.8,49.4l8.1,1.5 C749.8,178.8,749.1,161.6,744.3,143.7z"
                ></path>
                <title>
                  {`scriptIndex: 31\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M734,138.7c0.8,2.5,1.5,4.5,2.2,7l8.1-2.2c-0.8-2.9-1.5-5.2-2.4-7.9l-7.9,2.8C734,138.6,734,138.6,734,138.7z "
                ></path>
                <title>
                  {`scriptIndex: 30\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[30]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[30]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M731.3,131.6c1,2.3,1.8,4.5,2.6,6.9l7.9-2.8c-0.9-2.6-1.8-5.2-3-7.7l-7.7,3.2 C731.1,131.3,731.3,131.5,731.3,131.6z"
                ></path>
                <title>
                  {`scriptIndex: 29\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[29]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[29]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M700.4,90c14.1,11.7,23.5,24.4,30.8,41.2l7.7-3.2c-7.7-18.2-18-31.9-33.2-44.7l-5.5,6.6 C700.3,89.9,700.3,90,700.4,90z"
                ></path>
                <title>
                  {`scriptIndex: 28\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M687.8,81c4.5,2.8,8.3,5.5,12.3,8.9l5.5-6.6c-4.5-3.7-8.5-6.7-13.5-9.8l-4.6,7.3 C687.7,80.9,687.7,80.9,687.8,81z"
                ></path>
                <title>
                  {`scriptIndex: 27\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[27]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[27]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M682.9,78c1.8,1,3,1.7,4.7,2.8l4.6-7.3c-2.1-1.3-3.2-2-5.4-3.1l-4.1,7.5C682.7,77.9,682.8,78,682.9,78z"
                ></path>
                <title>
                  {`scriptIndex: 26\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[26]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[26]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M672.4,73c3.2,1.4,7.1,3.2,10.3,5l4.1-7.5c-3.3-1.8-7.7-3.9-11.3-5.4l-3.3,7.9C672.2,72.8,672.3,73,672.4,73z "
                ></path>
                <title>
                  {`scriptIndex: 25\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[25]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[25]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M628.9,64.2c16.2,0,28.3,2.4,43.2,8.8l3.3-7.9c-16.1-6.8-29.1-9.4-46.8-9.4v8.6 C628.9,64.2,628.9,64.2,628.9,64.2z"
                ></path>
                <title>
                  {`scriptIndex: 24\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.utterance}`}
                </title>
              </g>
            </g>
            <title>키워드: 모병제, 병력 충원에 문제없나?</title>
            <text
              transform="matrix(1 0 0 1 592 323)"
              className="st0 st1 st13"
              onClick={() => handleClick(28)}
              style={{ fontSize: "13.50px" }}
            >
              {"모병제, 병력"}
            </text>
            <text
              transform="matrix(1 0 0 1 580 343.2)"
              className="st0 st1 st13"
              onClick={() => handleClick(28)}
              style={{ fontSize: "13.50px" }}
            >
              {"충원에 문제 없나?"}
            </text>
            <line
              x1={628.7}
              y1={298}
              x2={628.7}
              y2={312} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
            <line
              x1={628.7}
              y1={350}
              x2={628.7}
              y2={378} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
          </g>
          <g className="T3-1">
            <circle className="st15" cx={564.6} cy={172.7} r={46.4} />

            <title>키워드: 인력확충 문제, 해결법은?</title>
            <text
              style={{ fontSize: "7px" }}
              transform="matrix(1 0 0 1 538.8662 115.576)"
            >
              <tspan x={0} y={-2} className="st0 st1 st14">
                {"인력확충 문제,"}
              </tspan>
              <tspan x={5} y={7.6} className="st0 st1 st14">
                {"해결법은?"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-P1">
            <path
              className="PHR"
              d="M598.7,156.9l2.4-2.4c2.7-2.7,2.7-7.1,0-9.8l-5.8-5.8c-2.7-2.7-7.1-2.7-9.8,0l-2.4,2.4l-2.4-2.4 c-2.7-2.7-7.1-2.7-9.8,0l-5.8,5.8c-2.7,2.7-2.7,7.1,0,9.8l2.4,2.4l-2.4,2.4c-2.7,2.7-2.7,7.1,0,9.8l5.8,5.8c2.7,2.7,7.1,2.7,9.8,0 l2.4-2.4l2.4,2.4c2.7,2.7,7.1,2.7,9.8,0l5.8-5.8c2.7-2.7,2.7-7.1,0-9.8L598.7,156.9z"
            />

            <title>키워드: 질적향상과 현대화 후 모병제 도입</title>
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 574.4023 147.3257)"
              className="st7"
            >
              <tspan x={10} y={3} className="st24 st1">
                {"질적향상과"}
              </tspan>

              <tspan x={10} y={11} className="st24 st1">
                {"현대화 후"}
              </tspan>

              <tspan x={10} y={19} className="st24 st1">
                {"모병제 도입"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J1">
            <circle className="JKT" cx={555.6} cy={138.5} r={10.7} />

            <title>키워드: 소수 정예화군</title>
            <text
              style={{ fontSize: "5.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 549.8735 135.3394)"
              className="st7"
            >
              <tspan x={5} y={0} className="st24 st1">
                {"소수"}
              </tspan>
              <tspan x={5} y={6} className="st24 st1">
                {"정예화"}
              </tspan>
              <tspan x={5} y={12} className="st24 st1">
                {"군"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-L1">
            <path
              className="LJS"
              d="M597,193l1.9-1.9c2.2-2.2,2.2-5.7,0-7.9l-4.6-4.6c-2.2-2.2-5.7-2.2-7.9,0l-1.9,1.9l-1.9-1.9 c-2.2-2.2-5.7-2.2-7.9,0l-4.6,4.6c-2.2,2.2-2.2,5.7,0,7.9l1.9,1.9L570,195c-2.2,2.2-2.2,5.7,0,7.9l4.6,4.6c2.2,2.2,5.7,2.2,7.9,0 l1.9-1.9l1.9,1.9c2.2,2.2,5.7,2.2,7.9,0l4.6-4.6c2.2-2.2,2.2-5.7,0-7.9L597,193z"
            />

            <title>키워드: 스마트군대 체제</title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 576.1318 187.6772)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1 ">
                {"스마트"}
              </tspan>
              <tspan x={8} y={7.5} className="st24 st1 ">
                {"군대"}
              </tspan>
              <tspan x={8} y={15} className="st24 st1 ">
                {"체제"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J2">
            <circle className="JKT" cx={537.7} cy={157.3} r={14.7} />

            <title>키워드: 감축을 통한 군 정예화</title>
            <text
              style={{ fontSize: "5.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 525.8018 154.6792)"
              className="st7"
            >
              <tspan x={11} y={-3} className="st24 st1">
                {"감축을"}
              </tspan>
              <tspan x={11} y={4} className="st24 st1">
                {"통한"}
              </tspan>
              <tspan x={11} y={11} className="st24 st1">
                {"군 정예화"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J3">
            <circle className="JKT" cx={529.5} cy={180.3} r={9.6} />

            <title>키워드: 군대 기계화</title>
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 521.2036 179.5581)"
              className="st7"
            >
              <tspan x={8} y={-1} className="st24 st1">
                {"군대"}
              </tspan>
              <tspan x={8} y={5} className="st24 st1">
                {"기계화"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J4">
            <circle className="JKT" cx={550.6} cy={197.7} r={17.1} />

            <title>키워드: 직업군인위주 편제개편</title>
            <text
              style={{ fontSize: "6.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 537.1704 191.1675)"
              className="st7"
            >
              <tspan x={13} y={0} className="st24 st1 ">
                {"직업군인 "}
              </tspan>

              <tspan x={13} y={8} className="st24 st1 ">
                {"위주"}
              </tspan>

              <tspan x={13} y={16} className="st24 st1">
                {"편제개편"}
              </tspan>
            </text>
          </g>
          <g className="T3-2">
            <circle className="st15" cx={675.1} cy={175.6} r={64} />
            <title>모병제, 과연 현실적인가?</title>
            <text
              style={{ fontSize: "7px" }}
              transform="matrix(1 0 0 1 641.1006 105.2332)"
              className="st0 st1 st6"
            >
              <tspan x={21} y={-5} className="st0 st1 st14">
                {"모병제,"}
              </tspan>
              <tspan x={8} y={4} className="st0 st1 st14">
                {"과연 현실적인가?"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L1">
            <path
              className="LJS"
              d="M720.1,142.4l2-2c2.2-2.2,2.2-5.6,0-7.7l-4.6-4.6c-2.2-2.2-5.6-2.2-7.7,0l-2,2l-2-2c-2.2-2.2-5.6-2.2-7.7,0 l-4.6,4.6c-2.2,2.2-2.2,5.6,0,7.7l2,2l-2,2c-2.2,2.2-2.2,5.6,0,7.7l4.6,4.6c2.2,2.2,5.6,2.2,7.7,0l2-2l2,2c2.2,2.2,5.6,2.2,7.7,0 l4.6-4.6c2.2-2.2,2.2-5.6,0-7.7L720.1,142.4z"
            />
            <title>병력수요공급 예측불가</title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(0.9857 0 0 1 694.3354 136.2767)"
              className="st7"
            >
              <tspan x={13} y={2} className="st24 st1 ">
                {"병력"}
              </tspan>
              <tspan x={13} y={8} className="st24 st1 ">
                {"수요공급"}
              </tspan>
              <tspan x={13} y={14} className="st24 st1 ">
                {"예측불가"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-K1">
            <ellipse
              transform="matrix(0.3847 -0.9231 0.9231 0.3847 223.3512 688.9498)"
              className="KJD"
              cx={628.4}
              cy={177}
              rx={16.9}
              ry={16.9}
            />

            <title>키워드: 사회주류로의 발판제공</title>
            <text
              style={{ fontSize: "6.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 621.5742 171.0032)"
              className="st7"
            >
              <tspan x={7} y={0} className="st24 st1 ">
                {"사회주류"}
              </tspan>
              <tspan x={7} y={7} className="st24 st1 ">
                {"로의"}
              </tspan>
              <tspan x={7} y={14} className="st24 st1 ">
                {"발판제공"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J1">
            <ellipse className="JKT" cx={673.1} cy={130.7} rx={18} ry={18.3} />
            <title>고위층자녀 병역기피</title>
            <text
              style={{ fontSize: "7.1px" }}
              textAnchor="middle"
              transform="matrix(0.9897 0 0 1 664.2944 121.5696)"
              className="st7"
            >
              <tspan x={9} y={1} className="st24 st1">
                {"고위층 "}
              </tspan>
              <tspan x={9} y={9.5} className="st24 st1">
                {"자녀"}
              </tspan>
              <tspan x={9} y={18} className="st24 st1">
                {"병역기피"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J2">
            <ellipse
              className="JKT"
              cx={639.8}
              cy={145.2}
              rx={16.9}
              ry={17.2}
            />
            <title>정예화된 보병</title>
            <text
              style={{ fontSize: "7.2px" }}
              textAnchor="middle"
              transform="matrix(0.9897 0 0 1 633.1079 142.5726)"
              className="st7"
            >
              <tspan x={5} y={0} className="st24 st1">
                {"정예화된"}
              </tspan>
              <tspan x={5} y={9} className="st24 st1">
                {"보병 "}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L2">
            <path
              className="LJS"
              d="M696.3,175.8l3.3-3.3c3.7-3.7,3.7-9.7,0-13.4l-7.8-7.8c-3.7-3.7-9.7-3.7-13.4,0l-3.3,3.3l-3.3-3.3 c-3.7-3.7-9.7-3.7-13.4,0l-7.8,7.8c-3.7,3.7-3.7,9.7,0,13.4l3.3,3.3l-3.3,3.3c-3.7,3.7-3.7,9.7,0,13.4l7.8,7.8 c3.7,3.7,9.7,3.7,13.4,0l3.3-3.3l3.3,3.3c3.7,3.7,9.7,3.7,13.4,0l7.8-7.8c3.7-3.7,3.7-9.7,0-13.4L696.3,175.8z"
            />

            <title>키워드: 경제호황 모병어려움</title>
            <text
              style={{ fontSize: "11px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 658.2773 165.0125)"
              className="st7"
            >
              <tspan x={17} y={2} className="st24 st1">
                {"경제호황"}
              </tspan>
              <tspan x={17} y={15} className="st24 st1">
                {"모병"}
              </tspan>
              <tspan x={17} y={28} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L3">
            <path
              className="LJS"
              d="M733.2,176l2.1-2.1c2.3-2.3,2.3-6.1,0-8.5l-5-5c-2.3-2.3-6.1-2.3-8.5,0l-2.1,2.1l-2.1-2.1 c-2.3-2.3-6.1-2.3-8.5,0l-5,5c-2.3,2.3-2.3,6.1,0,8.5l2.1,2.1l-2.1,2.1c-2.3,2.3-2.3,6.1,0,8.5l5,5c2.3,2.3,6.1,2.3,8.5,0l2.1-2.1 l2.1,2.1c2.3,2.3,6.1,2.3,8.5,0l5-5c2.3-2.3,2.3-6.1,0-8.5L733.2,176z"
            />
            <title>일자리총량 일정</title>
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1.0067 0 0 1 708.9961 171.3006)"
              className="st7"
            >
              <tspan x={11} y={0} className="st24 st1">
                {"일자리"}
              </tspan>
              <tspan x={11} y={7.5} className="st24 st1">
                {"총량"}
              </tspan>
              <tspan x={11} y={15} className="st24 st1">
                {"일정"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J3">
            <ellipse
              className="JKT"
              cx={645.2}
              cy={210.9}
              rx={16.6}
              ry={16.7}
            />
            <title>21만 일자리 제공</title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(0.9931 0 0 1 637.5508 209.2518)"
              className="st7"
            >
              <tspan x={8} y={-4} className="st24 st1">
                {"21만"}
              </tspan>
              <tspan x={8} y={4} className="st24 st1">
                {"일자리"}
              </tspan>
              <tspan x={8} y={12} className="st24 st1">
                {"제공"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L4">
            <path
              className="LJS"
              d="M709.3,216.1l1.8-1.8c2-2,2-5.3,0-7.3l-4.3-4.3c-2-2-5.3-2-7.3,0l-1.8,1.8l-1.8-1.8c-2-2-5.3-2-7.3,0 l-4.3,4.3c-2,2-2,5.3,0,7.3l1.7,1.8l-1.8,1.8c-2,2-2,5.3,0,7.3l4.3,4.3c2,2,5.3,2,7.3,0l1.8-1.8l1.8,1.8c2,2,5.3,2,7.3,0l4.3-4.3 c2-2,2-5.3,0-7.3L709.3,216.1z"
            />

            <title>키워드: 미군모병 인원미달</title>
            <text
              style={{ fontSize: "6.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 689.9937 213.5838)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1">
                {"미군 모병"}
              </tspan>
              <tspan x={8} y={8} className="st24 st1">
                {"인원 미달"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};
export default CP3K;
