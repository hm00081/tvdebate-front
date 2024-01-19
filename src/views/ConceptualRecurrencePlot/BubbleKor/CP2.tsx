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

interface CP2KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  cpPositions: { [key: string]: { x: number; y: number } };
}

//@ts-ignore
const CP2K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP2KProps) => {
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
  //const position = cpPositions["인구절벽, 징병제에 미치는 영향"];
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

  const handleSvgClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    // 클릭된 요소가 path 요소가 아니면 하이라이팅 제거
    if (!(event.target instanceof SVGPathElement)) {
      document.querySelectorAll(".highlighted").forEach((el) => {
        (el as SVGPathElement).style.stroke = "none";
        (el as SVGPathElement).style.strokeWidth = "0";
        el.classList.remove("highlighted");
      });
    }
  };

  const handleClickText = (index: number) => {
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

  const handleClick = (
    index: number,
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => {
    if (!dataStructureSet) {
      console.error("dataStructureSet is not provided to CP2K component");
      return;
    }
    // transcriptViewerRef의 current 속성의 존재 여부 확인
    if (!transcriptViewerRef.current) {
      console.error("transcriptViewerRef is not set");
      return;
    }

    document.querySelectorAll(".highlighted").forEach((el) => {
      (el as SVGPathElement).style.stroke = "none"; // 기존 스트로크 색상으로 변경
      (el as SVGPathElement).style.strokeWidth = "0"; // 기존 스트로크 너비로 변경
      el.classList.remove("highlighted");
    });

    // 클릭된 요소의 스타일 변경
    const clickedElement = event.currentTarget;
    clickedElement.style.stroke = "#fc2c34"; // 하이라이팅 색상 지정
    clickedElement.style.strokeWidth = "1.5"; // 하이라이팅 너비 지정
    clickedElement.classList.add("highlighted");

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
        onClick={handleSvgClick}
      >
        {/* 다른 것도 수정해주기 */}
        <style type="text/css">
          {
            ".PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14.3527px;}\n\t.st14{font-size:8.2107px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <style>
          {`
      .noselect {
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard syntax */
      }
      .selected {
        stroke: red;
        stroke-width: 10px;
      }
    `}
        </style>
        <g className="CP2">
          <g className="T2">
            <g className="P2">
              <path
                className="st19"
                d="M377,77.7L377,77.7v-8.1c-22,0-41.9,6.2-60,18.9l4.5,6.4C338.3,83.4,356.6,77.7,377,77.7z"
              />
              <path
                className="st21"
                d="M321.1,95.3c0.1-0.1,0.2-0.1,0.3-0.2l-4.5-6.4c-8.8,6.1-15.9,12.9-22.5,21.3l6.1,4.7 C306.7,106.9,313.2,100.8,321.1,95.3z"
              />
              <path
                className="st16"
                d="M300.3,115c0.1-0.1,0.2-0.3,0.3-0.5l-6.1-4.7c-11.9,15.2-18.4,30.8-21.2,49.8l7.4,1 C283.4,143.2,289.5,128.9,300.3,115z"
              />
              <path
                className="st20"
                d="M280.7,161.3c0-0.2,0.1-0.5,0.1-0.7l-7.4-1c-1,7.4-1.3,12.7-0.9,20l7.3-0.3 C279.6,172.8,279.8,167.9,280.7,161.3z"
              />
              <path
                className="st21"
                d="M279.9,179.9c0-0.2,0-0.5,0-0.7l-7.3,0.3c0.5,9.3,2.1,18,5,26.8l6.8-2.2C281.7,196.3,280.4,188.4,279.9,179.9 z"
              />
              <path
                className="st17"
                d="M284.5,204.9c-0.1-0.2-0.1-0.5-0.2-0.7l-6.8,2.2c1.3,3.7,2.3,6.7,3.9,10.3l6.4-2.9 C286.6,210.8,285.5,208.2,284.5,204.9z"
              />
              <path
                className="st20"
                d="M288.1,214.4c-0.1-0.2-0.1-0.3-0.2-0.6l-6.4,2.9c7.7,17.4,18.7,30.9,34.1,42l3.9-5.4 C305.4,242.9,295.2,230.4,288.1,214.4z"
              />
              <path
                className="st17"
                d="M319.8,253.5c-0.1-0.1-0.2-0.1-0.3-0.2l-3.9,5.4c2.4,1.7,3.5,2.5,6.1,4l3.6-5.6 C323,255.7,321.9,255,319.8,253.5z"
              />
              <path
                className="st19"
                d="M325.4,257.3c-0.1-0.1-0.2-0.1-0.3-0.2l-3.6,5.6c2.4,1.5,5.4,3.2,7.9,4.5l3-6 C330.2,260.1,327.6,258.7,325.4,257.3z"
              />
              <path
                className="st21"
                d="M383.7,271.9c-18.7,1.3-34.3-1.8-50.9-10.4c-0.1,0-0.2-0.1-0.2-0.1l-3,6c17.9,9.1,34.7,12.6,54.7,11.2 L383.7,271.9C383.8,271.9,383.8,271.9,383.7,271.9z"
              />
              <path
                className="st17"
                d="M400.5,269.2c-5.3,1.3-11.2,2.3-16.7,2.6l0.5,6.6c5.9-0.5,12.3-1.4,18-2.9l-1.6-6.4 C400.6,269.2,400.5,269.2,400.5,269.2z"
              />
              <path
                className="st19"
                d="M405.3,267.8c-2.2,0.7-2.6,0.8-4.7,1.3l1.6,6.4c2.4-0.6,2.9-0.7,5.3-1.5l-2-6.3 C405.6,267.8,405.4,267.8,405.3,267.8z"
              />
              <path
                className="st17"
                d="M416.5,263.7c-3.2,1.4-7.5,3-10.9,4.1l2,6.3c3.7-1.2,8.4-2.9,12-4.5l-2.8-6.1 C416.6,263.6,416.6,263.7,416.5,263.7z"
              />
              <path
                className="st19"
                d="M452.5,236c-10.3,12.8-20.8,20.8-35.7,27.5l2.8,6.1c16.2-7.3,27.5-15.9,38.7-29.7l-5.3-4.4 C452.8,235.8,452.7,235.9,452.5,236z"
              />
              <path
                className="st17"
                d="M456.6,230.6c-1.2,1.6-2.4,3.5-3.7,5l5.3,4.4c1.5-1.8,3.1-3.9,4.4-5.9l-5.6-3.9 C456.8,230.3,456.7,230.5,456.6,230.6z"
              />
              <path
                className="st19"
                d="M459.3,226.4c-1,1.6-1.5,2.3-2.4,3.8l5.6,3.9c1.3-1.8,1.8-2.6,3-4.6l-5.9-3.7 C459.6,226,459.5,226.2,459.3,226.4z"
              />
              <path
                className="st17"
                d="M469.9,203.3c-2.5,8.2-5.8,15.3-10.3,22.6l5.9,3.7c5-7.9,8.5-15.8,11.3-24.9l-6.8-2.1 C470.1,202.9,469.9,203.1,469.9,203.3z"
              />
              <path
                className="st19"
                d="M472.9,190.1c-0.7,4.3-1.6,8.4-2.9,12.6l6.8,2.1c1.4-4.7,2.5-9.3,3.2-14.2l-7.1-1.2 C473,189.6,473,189.9,472.9,190.1z"
              />
              <path
                className="st17"
                d="M473.6,185c-0.2,1.7-0.3,2.8-0.6,4.4l7.1,1.2c0.3-2.1,0.5-3.3,0.7-5.4l-7.3-0.8 C473.6,184.6,473.6,184.8,473.6,185z"
              />
              <path
                className="st16"
                d="M467.5,121.9l-6.7,3.8c0.1,0.2,0.2,0.3,0.3,0.6c10.6,18.3,14.6,37.1,12.6,58l7.3,0.8 C483.3,162.2,479,141.8,467.5,121.9z"
              />
              <path
                className="st17"
                d="M449.2,109.8c4.4,5,8.3,10.3,11.6,15.9l6.7-3.8c-3.7-6.3-7.9-12.2-12.9-17.7l-5.8,5.2 C449,109.6,449.1,109.7,449.2,109.8z"
              />
              <path
                className="st21"
                d="M428.5,92.4c8.3,5.2,13.9,9.9,20.4,17l5.8-5.2c-7.1-7.9-13.2-13-22.3-18.7l-4.3,6.7 C428.2,92.3,428.4,92.4,428.5,92.4z"
              />
              <path
                className="st19"
                d="M428.1,92.3l4.3-6.7c-17.5-10.9-34.8-15.9-55.4-15.9v8.1C396,77.7,412,82.2,428.1,92.3z"
              />
            </g>
            <title>
              {`Topic: 인구절벽, 징병제에 미치는 영향\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.utterance}`}
            </title>
            <text
              transform="matrix(1 0 0 1 315.9469 43.3986)"
              className="st0 st1 st13"
              onClick={(e) => handleClickText(17)}
            >
              {/* {"인구절벽, 징병제에 "} */}
            </text>
            <text
              transform="matrix(1 0 0 1 340.4654 60.5979)"
              className="st0 st1 st13"
              onClick={() => handleClickText(17)}
            >
              {/* {" 미치는 영향"} */}
            </text>
          </g>
          <g className="T2-1">
            <circle className="st15" cx={327.8} cy={173.8} r={47.8} />
            <title>
              {`Topic: 인구절벽, 모병제가 답인가?\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.utterance}`}
            </title>
            <text transform="matrix(1 0 0 1 316.4375 105.6326)">
              <tspan
                x={0}
                y={7}
                className="st0 st1 st14"
                onClick={() => handleClickText(17)}
              >
                {"인구절벽,"}
              </tspan>
              <tspan
                x={-9}
                y={16.9}
                className="st0 st1 st14"
                onClick={() => handleClickText(21)}
              >
                {"모병제가 답인가?"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-P1">
            <path
              className={`PHR ${selectedId === 18 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(18, e);
              }}
              d="M346.1,142.7l1.8-1.8c1.9-1.9,1.9-5.1,0-7l-4.1-4.1c-1.9-1.9-5.1-1.9-7,0l-1.8,1.8l-1.8-1.8 c-1.9-1.9-5.1-1.9-7,0l-4.1,4.1c-1.9,1.9-1.9,5.1,0,7l1.8,1.8l-1.8,1.8c-1.9,1.9-1.9,5.1,0,7l4.1,4.1c1.9,1.9,5.1,1.9,7,0l1.8-1.8 l1.8,1.8c1.9,1.9,5.1,1.9,7,0l4.1-4.1c1.9-1.9,1.9-5.1,0-7L346.1,142.7z"
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[18]?.name}\nKeyword: 대책없는 총선용 모병제\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[18]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6px", pointerEvents: "none" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 325.1153 136.3636)"
              className="st7 noselect"
            >
              <tspan x={11} y={1} className="st24 st1">
                {"대책없는"}
              </tspan>
              <tspan x={11} y={8} className="st24 st1">
                {"총선용"}
              </tspan>
              <tspan x={11} y={15} className="st24 st1">
                {"모병제"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K1">
            <ellipse
              transform="matrix(0.3688 -0.9295 0.9295 0.3688 55.2782 378.4305)"
              className={`KJD ${selectedId === 24 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(24, e);
              }}
              cx={306.3}
              cy={148.5}
              rx={14.3}
              ry={14.3}
            />

            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.name}\nKeyword: 전쟁양상 무인화\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 293.6226 147.5977)"
              className="st7 noselect"
            >
              <tspan x={13} y={0} className="st24 st1">
                {"전쟁양상"}
              </tspan>
              <tspan x={13} y={8} className="st24 st1">
                {"무인화"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-L1">
            <path
              className={`LJS ${selectedId === 28 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(28, e);
              }}
              d="M366,190.1l1.8-1.8c1.9-1.9,1.9-5.2,0-7.2l-4.2-4.2c-1.9-1.9-5.2-1.9-7.2,0l-1.8,1.8l-1.8-1.8 c-1.9-1.9-5.2-1.9-7.2,0l-4.2,4.2c-1.9,1.9-1.9,5.2,0,7.2l1.8,1.8l-1.8,1.8c-1.9,1.9-1.9,5.2,0,7.2l4.2,4.2c1.9,1.9,5.2,1.9,7.2,0 l1.8-1.8l1.8,1.8c1.9,1.9,5.2,1.9,7.2,0l4.2-4.2c1.9-1.9,1.9-5.2,0-7.2L366,190.1z"
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.name}\nKeyword: 자주국방 어려움\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 343.2012 186.208)"
              className="st7 noselect"
            >
              <tspan x={12} y={0} className="st24 st1">
                {"자주국방"}
              </tspan>

              <tspan x={12} y={10} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K2">
            <circle
              className={`KJD ${selectedId === 37 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(37, e);
              }}
              cx={294.1}
              cy={173.5}
              r={13.5}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[37]?.name}\nKeyword: 미래전쟁 예측불가\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[37]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 281.5723 173.0996)"
              className="st7 noselect"
            >
              <tspan x={12} y={-2} className="st24 st1">
                {"미래전쟁"}
              </tspan>
              <tspan x={12} y={4.5} className="st24 st1">
                {"예측불가"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-P2">
            <path
              className={`PHR ${selectedId === 18 ? "selected" : ""}`}
              d="M368.3,161.8l1.6-1.7c1.7-1.8,1.7-4.7-0.1-6.4l-3.8-3.7c-1.8-1.7-4.7-1.7-6.4,0.1l-1.6,1.7l-1.7-1.6 c-1.8-1.7-4.7-1.7-6.4,0.1l-3.7,3.8c-1.7,1.8-1.7,4.7,0.1,6.4l1.7,1.6l-1.6,1.7c-1.7,1.8-1.7,4.7,0.1,6.4l3.8,3.7 c1.8,1.7,4.7,1.7,6.4-0.1l1.6-1.7l1.7,1.6c1.8,1.7,4.7,1.7,6.4-0.1l3.7-3.8c1.7-1.8,1.7-4.7-0.1-6.4L368.3,161.8z"
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(18, e);
              }}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[18]?.name}\nKeyword: 군인 수 유지필요\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[18]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(0.9999 -1.043959e-02 1.043959e-02 0.9999 352.4758 157.4642)"
              className="st7"
            >
              <tspan x={6} y={1} className="st24 st1">
                {"군인 수"}
              </tspan>
              <tspan x={6} y={10} className="st24 st1">
                {"유지필요"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K3">
            <ellipse
              transform="matrix(0.1655 -0.9862 0.9862 0.1655 109.9615 465.6726)"
              className={`KJD ${selectedId === 15 ? "selected" : ""}`}
              cx={330.1}
              cy={167.9}
              rx={10.9}
              ry={10.9}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(15, e);
              }}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[15]?.name}\nKeyword: 감군체제\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[15]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 323.4614 164.0332)"
              className="st7"
            >
              <tspan x={7} y={2} className="st24 st1">
                {"감군"}
              </tspan>
              <tspan x={7} y={8} className="st24 st1">
                {"체제"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K4">
            <ellipse
              transform="matrix(0.1607 -0.987 0.987 0.1607 71.5962 481.494)"
              className={`KJD ${selectedId === 24 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(24, e);
              }}
              cx={318.9}
              cy={198.7}
              rx={21.7}
              ry={21.7}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.name}\nKeyword: 50만군 유지불가\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[24]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "10px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 306.1509 191.4131)"
              className="st7 noselect"
            >
              <tspan x={13} y={2} className="st24 st1">
                {"50만군"}
              </tspan>
              <tspan x={13} y={16} className="st24 st1">
                {"유지불가"}
              </tspan>
            </text>
          </g>
          <g className="T2-2">
            <circle className="st15" cx={425.4} cy={176.6} r={48.6} />
            <title>
              {`Topic: 인력확충 문제, 해결법은?\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[17]?.utterance}`}
            </title>
            <text transform="matrix(1 0 0 1 389.0738 116.8055)">
              <tspan
                x={10}
                y={-2}
                className="st0 st1 st14"
                onClick={() => handleClickText(32)}
              >
                {"인력확충 문제,"}
              </tspan>
              <tspan
                x={17}
                y={7}
                className="st0 st1 st14"
                onClick={() => handleClickText(36)}
              >
                {"해결법은?"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-P1">
            <path
              className={`PHR ${selectedId === 35 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(35, e);
              }}
              d="M461.1,160l2.5-2.5c2.8-2.8,2.8-7.5,0-10.3l-6.1-6.1c-2.8-2.8-7.5-2.8-10.3,0l-2.5,2.5l-2.5-2.5 c-2.8-2.8-7.5-2.8-10.3,0l-6.1,6.1c-2.8,2.8-2.8,7.5,0,10.3l2.5,2.5l-2.5,2.5c-2.8,2.8-2.8,7.5,0,10.3l6.1,6.1 c2.8,2.8,7.5,2.8,10.3,0l2.5-2.5l2.5,2.5c2.8,2.8,7.5,2.8,10.3,0l6.1-6.1c2.8-2.8,2.8-7.5,0-10.3L461.1,160z"
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[35]?.name}\nKeyword: 질적향상과 현대화 후 모병제도입\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[35]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 435.5918 149.952)"
              className="st7 noselect"
            >
              <tspan x={10} y={2} className="st24 st1">
                {"질적향상과"}
              </tspan>
              <tspan x={10} y={11} className="st24 st1">
                {"현대화 후"}
              </tspan>
              <tspan x={10} y={20.5} className="st24 st1">
                {"모병제 도입"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J1">
            <circle
              className={`JKT ${selectedId === 31 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(31, e);
              }}
              cx={415.9}
              cy={140.7}
              r={11.2}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.name}\nKeyword: 소수 정예화군\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "5.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 409.8721 137.3826)"
              className="st7 noselect"
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
          <g className="T2-2-L1">
            <path
              className={`LJS ${selectedId === 28 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(28, e);
              }}
              d="M459.3,197.9l2-2c2.3-2.3,2.3-6,0-8.3l-4.9-4.9c-2.3-2.3-6-2.3-8.3,0l-2,2l-2-2c-2.3-2.3-6-2.3-8.3,0 l-4.9,4.9c-2.3,2.3-2.3,6,0,8.3l2,2l-2,2c-2.3,2.3-2.3,6,0,8.3l4.9,4.9c2.3,2.3,6,2.3,8.3,0l2-2l2,2c2.3,2.3,6,2.3,8.3,0l4.9-4.9 c2.3-2.3,2.3-6,0-8.3L459.3,197.9z"
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.name}\nKeyword: 스마트군대 체제\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[28]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 437.4053 192.2627)"
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
          <g className="T2-2-J2">
            <circle
              className={`JKT ${selectedId === 34 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(34, e);
              }}
              cx={397.1}
              cy={160.4}
              r={15.4}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[34]?.name}\nKeyword: 감축을 통한 군 정예화\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[34]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 384.6314 157.6614)"
              className="st7 noselect"
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
          <g className="T2-2-J3">
            <circle
              className={`JKT ${selectedId === 31 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(31, e);
              }}
              cx={388.6}
              cy={184.5}
              r={10.1}
            />
            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.name}\nKeyword: 군대 기계화\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "5.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 379.8096 183.7493)"
              className="st7 noselect"
            >
              <tspan x={8} y={-1} className="st24 st1">
                {"군대"}
              </tspan>
              <tspan x={8} y={5.5} className="st24 st1">
                {"기계화"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J4">
            <circle
              className={`JKT ${selectedId === 31 ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // 상위 요소로 이벤트 전파 방지
                handleClick(31, e);
              }}
              cx={410.6}
              cy={202.8}
              r={18}
            />

            <title>
              {`Name: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.name}\nKeyword: 직업군인 위주 편제개편\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[31]?.utterance}`}
            </title>
            <text
              style={{ fontSize: "6.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 396.5518 195.9227)"
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
        </g>
      </svg>
    </>
  );
};

export default CP2K;
