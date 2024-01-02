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
}

//@ts-ignore
const CP2K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
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
            <title>
              {`Topic: 인구절벽, 징병제에 미치는 영향\nName: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].name}\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].utterance}`}
            </title>
            <text
              transform="matrix(1 0 0 1 315.9469 43.3986)"
              className="st0 st1 st13"
              onClick={(e) => handleClickText(17)}
            >
              {"인구절벽, 징병제에 "}
            </text>
            <text
              transform="matrix(1 0 0 1 340.4654 60.5979)"
              className="st0 st1 st13"
              onClick={() => handleClickText(17)}
            >
              {" 미치는 영향"}
            </text>
          </g>
          <g className="T2-1">
            <circle className="st15" cx={327.8} cy={173.8} r={47.8} />
            <title>
              {`Topic: 인구절벽, 모병제가 답인가?\nName: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].name}\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[18].name}\nKeyword: 대책없는 총선용 모병제\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[18].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[24].name}\nKeyword: 전쟁양상 무인화\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[24].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[28].name}\nKeyword: 자주국방 어려움\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[28].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[37].name}\nKeyword: 미래전쟁 예측불가\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[37].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[18].name}\nKeyword: 군인 수 유지필요\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[18].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[15].name}\nKeyword: 감군체제\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[15].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[24].name}\nKeyword: 50만군 유지불가\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[24].utterance}`}
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
              {`Topic: 인력확충 문제, 해결법은?\nName: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].name}\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[17].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[35].name}\nKeyword: 질적향상과 현대화 후 모병제도입\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[35].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].name}\nKeyword: 소수 정예화군\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[28].name}\nKeyword: 스마트군대 체제\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[28].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[34].name}\nKeyword: 감축을 통한 군 정예화\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[34].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].name}\nKeyword: 군대 기계화\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].utterance}`}
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
              {`Name: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].name}\nKeyword: 직업군인 위주 편제개편\nUtterance: ${dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing[31].utterance}`}
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
