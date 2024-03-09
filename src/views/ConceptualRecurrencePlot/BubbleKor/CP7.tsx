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

interface CP7KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  //cpPositions: { [key: string]: { x: number; y: number } };
}

//@ts-ignore
const CP7K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP7KProps) => {
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
  //const position = cpPositions["국방 예산 이슈 및 토론 마무리"];
  const getTopCompoundTerms = (
    compoundTerms: { [key: string]: number },
    topN: number
  ) => {
    return Object.entries(compoundTerms)
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN)
      .map(([term]) => term);
  };

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
        <g className="CP7">
          {`Topic: 국방 예산 이슈 및 토론 마무리\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[175]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[175]?.utterance}`}
          <g className="T7">
            <text
              transform="matrix(1 0 0 1 1565 325)"
              className="st0 st1 st13"
              onClick={() => handleClick(175)}
            >
              {"국방 예산 이슈 및"}
            </text>
            <text
              transform="matrix(1 0 0 1 1580 345)"
              className="st0 st1 st13"
              onClick={() => handleClick(175)}
            >
              {"토론 마무리"}
            </text>
            <line
              x1={1618}
              y1={298}
              x2={1618}
              y2={315} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
            <line
              x1={1618}
              y1={351}
              x2={1618}
              y2={370} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
          </g>
          <g className="P7">
            <g>
              <path
                className="st17"
                d="M1618,50.3v-9.8c-14.4,0-27.8,2.2-41.3,6.9l3.2,9.2C1592.3,52.2,1604.6,50.3,1618,50.3z"
              ></path>
              <title>
                {`scriptIndex: 183\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[183]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[183]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1579.5,56.6c0.1,0,0.1,0,0.2-0.1l-3.2-9.2c-16.8,5.8-30.4,13.8-43.7,25.7l6.4,7.1 C1551.5,69.3,1564,62,1579.5,56.6z"
              ></path>
              <title>
                {`scriptIndex: 182\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[182]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[182]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1538.9,80.6c0.1-0.1,0.3-0.2,0.5-0.3l-6.4-7.1c-1.8,1.7-3,2.8-4.8,4.6l6.8,6.8 C1536.3,83,1537.4,81.9,1538.9,80.6z"
              ></path>
              <title>
                {`scriptIndex: 181\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[181]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[181]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st22"
                d="M1534.4,84.8c0.1-0.1,0.3-0.3,0.5-0.5l-6.8-6.8c-11.5,11.5-19.6,23.4-26.3,38.1l8.5,3.8 C1516.4,106.1,1524,95.3,1534.4,84.8z"
              ></path>
              <title>
                {`scriptIndex: 180\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[180]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[180]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1510.1,120.3c0.1-0.2,0.2-0.5,0.3-0.7l-8.5-3.8c-0.7,1.6-1,2.4-1.7,4l8.5,3.5 C1509.1,122.2,1509.5,121.6,1510.1,120.3z"
              ></path>
              <title>
                {`scriptIndex: 179\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[179]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[179]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st20"
                d="M1508.5,124.1c0.1-0.2,0.2-0.6,0.3-0.8l-8.5-3.5c-4.1,10.4-6.9,21.1-8.3,32.1l9,1.2 C1502.1,143.1,1504.7,133.4,1508.5,124.1z"
              ></path>
              <title>
                {`scriptIndex: 178\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[178]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[178]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1500.7,153.9c0-0.3,0.1-0.6,0.1-0.9l-9-1.2c-0.3,2.6-0.5,3.9-0.7,6.6l9,0.6 C1500.3,157.4,1500.4,156.1,1500.7,153.9z"
              ></path>
              <title>
                {`scriptIndex: 177\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[177]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[177]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1500,160.1c0-0.3,0-0.6,0.1-0.9l-9-0.6c-1.2,16.2,0.5,30.4,5.3,46l8.3-2.5 C1500.5,187.9,1499.1,174.9,1500,160.1z"
              ></path>
              <title>
                {`scriptIndex: 176\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[176]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[176]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1505,202.9c-0.1-0.2-0.1-0.6-0.2-0.8l-8.3,2.5c3.8,12.7,8.8,22.9,16.1,33.9l7-4.7 C1512.9,223.8,1508.5,214.4,1505,202.9z"
              ></path>
              <title>
                {`scriptIndex: 175\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[175]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[175]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st22"
                d="M1520,234.4c-0.1-0.2-0.2-0.5-0.5-0.6l-7,4.7c1.5,2.3,3.6,5.1,5.2,7.1l6.6-5.2 C1523,238.7,1521.4,236.4,1520,234.4z"
              ></path>
              <title>
                {`scriptIndex: 174\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[174]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[174]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st20"
                d="M1524.8,241.1c-0.1-0.2-0.2-0.3-0.5-0.6l-6.6,5.2c4.1,5.3,7,8.5,11.9,13.1l5.8-6 C1531.3,248.8,1528.6,245.8,1524.8,241.1z"
              ></path>
              <title>
                {`scriptIndex: 173\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[173]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[173]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st22"
                d="M1535.9,253.3c-0.1-0.1-0.3-0.3-0.5-0.5l-5.8,6c6.2,6,11.9,10.5,19,15.2l4.5-6.8 C1546.7,262.9,1541.5,258.8,1535.9,253.3z"
              ></path>
              <title>
                {`scriptIndex: 172\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[172]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[172]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1553.6,267.5c-0.1-0.1-0.2-0.2-0.5-0.2l-4.5,6.8c1.4,0.9,4.3,2.6,5.6,3.5l4-7 C1557.1,269.7,1554.8,268.2,1553.6,267.5z"
              ></path>
              <title>
                {`scriptIndex: 171\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[171]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[171]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st20"
                d="M1558.9,270.7c-0.1-0.1-0.2-0.1-0.3-0.2l-4,7c6.8,3.9,12.8,6.7,20,9.3l2.8-7.6 C1570.6,276.8,1565.1,274.3,1558.9,270.7z"
              ></path>
              <title>
                {`scriptIndex: 170\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[170]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[170]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1577.6,279.3c-0.1,0-0.2-0.1-0.3-0.1l-2.8,7.6c2.2,0.8,4,1.4,6.3,2.1l2.3-7.7 C1581.1,280.6,1579.5,280.1,1577.6,279.3z"
              ></path>
              <title>
                {`scriptIndex: 169\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[169]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[169]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1583.4,281.3c-0.1,0-0.1,0-0.2-0.1l-2.3,7.7c2,0.6,2.2,0.7,4.3,1.3l2.1-7.7 C1585.5,282,1585.2,281.9,1583.4,281.3z"
              ></path>
              <title>
                {`scriptIndex: 168\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[168]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[168]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1587.3,282.5c-0.1,0-0.1,0-0.2-0.1l-2.1,7.7c2.5,0.7,6,1.5,8.6,2l1.5-7.8 C1592.9,283.8,1589.8,283.1,1587.3,282.5z"
              ></path>
              <title>
                {`scriptIndex: 167\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[167]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[167]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st20"
                d="M1626.2,286.3c-11.2,0.8-19.8,0.2-30.8-1.8c-0.1,0-0.1,0-0.2,0l-1.5,7.8c11.9,2.3,21.1,2.9,33.1,2.1 L1626.2,286.3C1626.3,286.3,1626.3,286.3,1626.2,286.3z"
              ></path>
              <title>
                {`scriptIndex: 166\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[166]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[166]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1634.5,285.3c-2.3,0.3-5.8,0.7-8.2,0.8l0.6,7.9c2.5-0.2,6.3-0.6,8.9-0.9L1634.5,285.3L1634.5,285.3z"
              ></path>
              <title>
                {`scriptIndex: 165\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[165]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[165]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1640.6,284.3c-2.5,0.5-3.5,0.7-6,1l1.2,7.9c2.8-0.3,3.8-0.6,6.6-1.2l-1.5-7.8 C1640.6,284.3,1640.6,284.3,1640.6,284.3z"
              ></path>
              <title>
                {`scriptIndex: 164\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[164]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[164]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st22"
                d="M1680.5,268.5c-12.6,7.8-25.5,12.9-40,15.8l1.5,7.8c15.7-3,29.6-8.5,43.1-16.9l-4.3-6.9 C1680.9,268.4,1680.8,268.5,1680.5,268.5z"
              ></path>
              <title>
                {`scriptIndex: 163\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[163]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[163]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1689,262.8c-2.6,2.1-5.3,3.8-8.1,5.6l4.3,6.9c3.2-2,6.1-4,9.1-6.3l-5-6.6 C1689.4,262.5,1689.2,262.6,1689,262.8z"
              ></path>
              <title>
                {`scriptIndex: 162\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[162]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[162]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1711,241.1c-6.6,8.4-13.1,14.9-21.5,21.3l5,6.6c9.3-7,16.5-14.1,23.6-23.3l-6.6-5.2 C1711.4,240.8,1711.3,240.9,1711,241.1z"
              ></path>
              <title>
                {`scriptIndex: 161\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[161]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[161]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1713.6,237.8c-0.9,1.3-1.3,1.7-2.1,2.8l6.6,5.2c1.3-1.5,1.5-2,2.6-3.6l-6.8-5 C1713.8,237.4,1713.7,237.6,1713.6,237.8z"
              ></path>
              <title>
                {`scriptIndex: 160\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[160]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[160]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1720.3,227.4c-2,3.3-4.1,6.7-6.3,9.8l6.8,5c2.5-3.6,5.1-7.4,7.3-11.2l-7.3-4.3 C1720.6,226.9,1720.4,227.2,1720.3,227.4z"
              ></path>
              <title>
                {`scriptIndex: 159\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[159]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[159]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1722.3,223.8c-0.7,1.3-1,2-1.6,3l7.3,4.3c0.9-1.6,1.3-2.3,2.2-3.9l-7.5-4 C1722.6,223.4,1722.4,223.6,1722.3,223.8z"
              ></path>
              <title>
                {`scriptIndex: 158\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[158]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[158]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1725.1,218.3c-0.7,1.6-1.6,3.2-2.4,4.8l7.5,4c1-2,2.1-4,3-6l-7.7-3.6 C1725.3,217.8,1725.2,218.1,1725.1,218.3z"
              ></path>
              <title>
                {`scriptIndex: 157\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[157]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[157]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1735,184.8c-1.6,11.9-4.6,22-9.6,32.8l7.7,3.6c5.5-11.9,8.9-23,10.7-36l-8.6-1.3 C1735,184.2,1735,184.4,1735,184.8z"
              ></path>
              <title>
                {`scriptIndex: 156\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[156]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[156]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1735.5,180.8c-0.1,1.5-0.2,2.1-0.3,3.2l8.6,1.3c0.2-2,0.3-2.4,0.6-4.4l-8.8-0.9 C1735.6,180.2,1735.5,180.4,1735.5,180.8z"
              ></path>
              <title>
                {`scriptIndex: 155\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[155]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[155]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1741.2,136.8l-8.9,2.2c0.1,0.2,0.1,0.5,0.2,0.8c3.2,13.1,4.3,26.6,3,40.1l8.8,0.9 C1745.8,166,1744.8,151.2,1741.2,136.8z"
              ></path>
              <title>
                {`scriptIndex: 154\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[154]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[154]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1731.5,135.8c0.5,1.5,0.6,2,0.8,3.1l8.9-2.2c-0.5-2-0.6-2.4-1.2-4.3l-8.8,2.5 C1731.4,135.3,1731.4,135.5,1731.5,135.8z"
              ></path>
              <title>
                {`scriptIndex: 153\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[153]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[153]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1727.5,124.1c1.5,3.8,2.6,7,3.8,10.8l8.8-2.5c-1.3-4.6-2.5-8.2-4.4-12.6l-8.5,3.5 C1727.3,123.6,1727.4,123.9,1727.5,124.1z"
              ></path>
              <title>
                {`scriptIndex: 152\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[152]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[152]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1725.1,118.4c0.7,1.4,1.5,3.3,2.2,5l8.5-3.5c-0.7-1.8-1.8-4.4-2.6-6.1l-8.4,3.9 C1724.9,118,1725,118.2,1725.1,118.4z"
              ></path>
              <title>
                {`scriptIndex: 151\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[151]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[151]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st21"
                d="M1713.6,98.9c4.4,6,7.9,12.1,11.2,18.8l8.4-3.9c-3.5-7.5-7.5-14.3-12.3-21l-7.6,5.5 C1713.2,98.5,1713.3,98.8,1713.6,98.9z"
              ></path>
              <title>
                {`scriptIndex: 150\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[150]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[150]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1711,95.6c0.9,1.3,1.3,1.7,2.1,2.8l7.6-5.5c-1.2-1.6-1.5-2-2.6-3.6l-7.5,5.8 C1710.8,95.3,1710.9,95.4,1711,95.6z"
              ></path>
              <title>
                {`scriptIndex: 149\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[149]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[149]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st19"
                d="M1675.2,65c14.2,7.8,25.3,17.4,35.4,30.1l7.5-5.8c-10.9-13.9-23-24.3-38.5-32.9l-4.7,8.4 C1675,64.9,1675.1,64.9,1675.2,65z"
              ></path>
              <title>
                {`scriptIndex: 148\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[148]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[148]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st17"
                d="M1669.8,62.1c2.2,1,3.1,1.5,5.1,2.6l4.7-8.4c-2.4-1.4-3.3-1.8-5.9-3.1l-4.3,8.8 C1669.5,62,1669.7,62.1,1669.8,62.1z"
              ></path>
              <title>
                {`scriptIndex: 147\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[147]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[147]?.utterance}`}
              </title>
            </g>
            <g>
              <path
                className="st22"
                d="M1618,50.3c18.8,0,34.7,3.7,51.5,11.7l4.3-8.8c-18.2-8.9-35.4-12.9-55.7-12.9L1618,50.3L1618,50.3z"
              ></path>
              <title>
                {`scriptIndex: 146\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[146]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[146]?.utterance}`}
              </title>
            </g>
          </g>
          <g className="T7-1">
            <title>Keyword: 모병제를 위한 군 예산조정</title>
            <circle className="st15" cx={1557.7} cy={169.1} r={57} />
            <text transform="matrix(1 0 0 1 1529.8154 96.9686)" className="st7">
              <tspan
                x={0}
                y={0}
                className="st0 st1 st14"
                style={{ fontSize: "8px" }}
              >
                {"모병제를 위한"}
              </tspan>
              <tspan
                x={0}
                y={10}
                className="st0 st1 st14"
                style={{ fontSize: "8px" }}
              >
                {"군 예산조정"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-P1">
            <title>Keyword: 국방예산 초과</title>
            <path
              className="PHR"
              d="M1591.8,140.7l2.5-2.5c2.7-2.7,2.7-7.4,0-10.1l-6-6c-2.7-2.7-7.4-2.7-10.1,0l-2.5,2.5l-2.5-2.5 c-2.7-2.7-7.4-2.7-10.1,0l-6,6c-2.7,2.7-2.7,7.4,0,10.1l2.5,2.5l-2.5,2.5c-2.7,2.7-2.7,7.4,0,10.1l6,6c2.7,2.7,7.4,2.7,10.1,0 l2.5-2.5l2.5,2.5c2.7,2.7,7.4,2.7,10.1,0l6-6c2.7-2.7,2.7-7.4,0-10.1L1591.8,140.7z"
            />
            <text
              style={{ fontSize: "8.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1561.8125 135.3306)"
              className="st7"
            >
              <tspan x={13} y={2} className="st24 st1">
                {"국방예산"}
              </tspan>
              <tspan x={13} y={14} className="st24 st1">
                {"초과"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-K1">
            <title>Keyword: 부대 통폐합을 통한 예산조정</title>
            <ellipse
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 59.293 597.37)"
              className="KJD"
              cx={1531.2}
              cy={149.6}
              rx={23.6}
              ry={23.6}
            />
            <text
              style={{ fontSize: "8.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1520.6387 139.584)"
              className="st7"
            >
              <tspan x={11} y={-3} className="st24 st1">
                {"부대 "}
              </tspan>
              <tspan x={11} y={7} className="st24 st1">
                {"통폐합을 "}
              </tspan>
              <tspan x={11} y={17} className="st24 st1">
                {"통한"}
              </tspan>
              <tspan x={11} y={27} className="st24 st1">
                {"예산조정"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-J1">
            <title>Keyword: 부대토지 매각</title>
            <circle className="JKT" cx={1551} cy={208.8} r={15.2} />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1540.4971 204.3011)"
              className="st7"
            >
              <tspan x={11} y={3} className="st24 st1">
                {"부대토지 "}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"매각"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-L1">
            <title>Keyword: 병력유지 필요</title>
            <path
              className="LJS"
              d="M1573.8,177.7l1.9-1.9c2.1-2.1,2.1-5.5,0-7.7l-4.5-4.5c-2.1-2.1-5.5-2.1-7.7,0l-1.9,1.9l-1.9-1.9 c-2.1-2.1-5.5-2.1-7.7,0l-4.5,4.5c-2.1,2.1-2.1,5.5,0,7.7l1.9,1.9l-1.9,1.9c-2.1,2.1-2.1,5.5,0,7.7l4.5,4.5c2.1,2.1,5.5,2.1,7.7,0 l1.9-1.9l1.9,1.9c2.1,2.1,5.5,2.1,7.7,0l4.5-4.5c2.1-2.1,2.1-5.5,0-7.7L1573.8,177.7z"
            />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1551.3682 173.2002)"
              className="st7"
            >
              <tspan x={11} y={3} className="st24 st1">
                {"병력유지 "}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"필요"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-L2">
            <title>Keyword: 국방예산 조정불가</title>
            <path
              className="LJS"
              d="M1608.8,177l2.1-2.1c2.3-2.3,2.3-6.1,0-8.5l-5-5c-2.3-2.3-6.1-2.3-8.5,0l-2.1,2.1l-2.1-2.1 c-2.3-2.3-6.1-2.3-8.5,0l-5,5c-2.3,2.3-2.3,6.1,0,8.5l2.1,2.1l-2.1,2.1c-2.3,2.3-2.3,6.1,0,8.5l5,5c2.3,2.3,6.1,2.3,8.5,0l2.1-2.1 l2.1,2.1c2.3,2.3,6.1,2.3,8.5,0l5-5c2.3-2.3,2.3-6.1,0-8.5L1608.8,177z"
            />
            <text
              style={{ fontSize: "6.9px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1585.2754 170.1639)"
              className="st7"
            >
              <tspan x={10} y={4} className="st24 st1">
                {"국방예산"}
              </tspan>

              <tspan x={10} y={13} className="st24 st1">
                {"조정불가"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-P2">
            <title>Keyword: 최소병력 유지</title>
            <path
              className="PHR"
              d="M1588.6,206.3l1.5-1.5c1.6-1.6,1.6-4.4,0-6l-3.6-3.6c-1.6-1.6-4.4-1.6-6,0l-1.5,1.5l-1.5-1.5 c-1.6-1.6-4.4-1.6-6,0l-3.6,3.6c-1.6,1.6-1.6,4.4,0,6l1.5,1.5l-1.5,1.5c-1.6,1.6-1.6,4.4,0,6l3.6,3.6c1.6,1.6,4.4,1.6,6,0l1.5-1.5 l1.5,1.5c1.6,1.6,4.4,1.6,6,0l3.6-3.6c1.6-1.6,1.6-4.4,0-6L1588.6,206.3z"
            />
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1571.8252 201.7493)"
              className="st7"
            >
              <tspan x={7} y={3} className="st24 st1">
                {"최소병력 "}
              </tspan>
              <tspan x={7} y={10} className="st24 st1">
                {"유지 "}
              </tspan>
            </text>
          </g>
          <g className="T7-1-K2">
            <title>Keyword: 핵심기동 장비유지</title>
            <circle className="KJD" cx={1524.8} cy={190.6} r={16.2} />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1509.9561 187.388)"
              className="st7"
            >
              <tspan x={14} y={3} className="st24 st1">
                {"핵심기동"}
              </tspan>
              <tspan x={14} y={11} className="st24 st1">
                {"장비유지"}
              </tspan>
            </text>
          </g>
          <g className="T7-2">
            <circle className="st15" cx={1675.6} cy={170.4} r={60.1} />
            <text transform="matrix(1 0 0 1 1631.5186 102.0184)">
              <tspan
                x={24}
                y={2}
                className="st0 st1 st14"
                style={{ fontSize: "8px" }}
              >
                {"마무리발언"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-L1">
            <title>Keyword: 병사처우 개선필요</title>
            <path
              className="LJS"
              d="M1723.3,187l2.8-2.8c3-3,3-7.9,0-10.9l-6.4-6.4c-3-3-7.9-3-10.9,0l-2.8,2.8l-2.8-2.8c-3-3-7.9-3-10.9,0 l-6.4,6.4c-3,3-3,7.9,0,10.9l2.8,2.8l-2.8,2.8c-3,3-3,7.9,0,10.9l6.4,6.4c3,3,7.9,3,10.9,0l2.8-2.8l2.8,2.8c3,3,7.9,3,10.9,0 l6.4-6.4c3-3,3-7.9,0-10.9L1723.3,187z"
            />
            <text
              style={{ fontSize: "8.3px" }}
              textAnchor="middle"
              transform="matrix(1.0025 0 0 1 1696.4316 178.9754)"
              className="st7"
            >
              <tspan x={10} y={5} className="st24 st1">
                {"병사처우"}
              </tspan>
              <tspan x={10} y={17} className="st24 st1">
                {"개선필요"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-J1">
            <title>Keyword: 징집편제 유지불가</title>
            <ellipse
              transform="matrix(9.853820e-02 -0.9951 0.9951 9.853820e-02 1352.7478 1776.272)"
              className="JKT"
              cx={1656.8}
              cy={141.5}
              rx={24.8}
              ry={24.8}
            />
            <text
              style={{ fontSize: "9.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1638.0029 134.9139)"
              className="st7"
            >
              <tspan x={18} y={4} className="st24 st1">
                {"징집편제"}
              </tspan>
              <tspan x={18} y={15} className="st24 st1">
                {"유지불가"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-K1">
            <title>Keyword: 직업군인 전환</title>
            <ellipse
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 54.6602 640.9101)"
              className="KJD"
              cx={1638.4}
              cy={183.1}
              rx={20.4}
              ry={20.4}
            />
            <text
              style={{ fontSize: "8.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1621.1201 178.9744)"
              className="st7"
            >
              <tspan x={17} y={3} className="st24 st1">
                {"직업군인"}
              </tspan>
              <tspan x={17} y={13} className="st24 st1">
                {"전환 "}
              </tspan>
            </text>
          </g>
          <g className="T7-2-P1">
            <title>Keyword: 군 악폐습 철폐</title>
            <path
              className="PHR"
              d="M1717.8,144.4l2.5-2.5c2.8-2.8,2.8-7.4,0-10.1l-6-6c-2.8-2.8-7.4-2.8-10.1,0l-2.5,2.5l-2.5-2.5 c-2.8-2.8-7.4-2.8-10.1,0l-6,6c-2.8,2.8-2.8,7.4,0,10.1l2.5,2.5l-2.5,2.5c-2.8,2.8-2.8,7.4,0,10.1l6,6c2.8,2.8,7.4,2.8,10.1,0 l2.5-2.5l2.5,2.5c2.8,2.8,7.4,2.8,10.1,0l6-6c2.8-2.8,2.8-7.4,0-10.1L1717.8,144.4z"
            />
            <text
              style={{ fontSize: "8.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1683.4092 140.2395)"
              className="st7"
            >
              <tspan x={17} y={-2} className="st24 st1">
                {"군"}
              </tspan>
              <tspan x={17} y={8} className="st24 st1">
                {"악폐습"}
              </tspan>
              <tspan x={17} y={18} className="st24 st1">
                {"철폐"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-L2">
            <title>Keyword: 초임장교 임금개선</title>
            <path
              className="LJS"
              d="M1682.2,209.5l2.2-2.2c2.4-2.4,2.4-6.4,0-8.9l-5.2-5.2c-2.4-2.4-6.4-2.4-8.9,0l-2.2,2.2l-2.2-2.2 c-2.4-2.4-6.4-2.4-8.9,0l-5.2,5.2c-2.4,2.4-2.4,6.4,0,8.9l2.2,2.2l-2.2,2.2c-2.4,2.4-2.4,6.4,0,8.9l5.2,5.2c2.4,2.4,6.4,2.4,8.9,0 l2.2-2.2l2.2,2.2c2.4,2.4,6.4,2.4,8.9,0l5.2-5.2c2.4-2.4,2.4-6.4,0-8.9L1682.2,209.5z"
            />
            <text
              style={{ fontSize: "7.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1667 205.2264)"
              className="st7"
            >
              <tspan x={0} y={2} className="st24 st1">
                {"초임장교"}
              </tspan>
              <tspan x={0} y={11} className="st24 st1">
                {"임금개선"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};
export default CP7K;
