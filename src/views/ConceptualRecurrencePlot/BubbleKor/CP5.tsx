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

interface CP5KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  //cpPositions: { [key: string]: { x: number; y: number } };
}

//@ts-ignore
const CP5K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP5KProps) => {
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
  //const position = cpPositions["모병제, 질적 향상 문제 및 간부확보 문제는?"];
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
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14.3527px;}\n\t.st14{font-size:8.2107px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP5">
          <title>키워드: 모병제, 질적 향상 및 간부확보 문제는?</title>
          <g className="T5">
            <g className="P5">
              <path
                className="st22"
                d="M1070.6,64.1c11.2-3.6,22.9-5.5,34.7-5.5l0,0v-8.4c-12.6,0-25.3,2-37.3,5.9L1070.6,64.1L1070.6,64.1z"
              />
              <path
                className="st19"
                d="M1065.1,66c2.1-0.8,3.5-1.3,5.5-2l-2.5-7.9c-2.3,0.7-3.7,1.3-6,2.1L1065.1,66L1065.1,66z"
              />
              <path
                className="st22"
                d="M1047.5,74.7c5.9-3.6,11.2-6.1,17.6-8.5l-3-7.8c-6.9,2.6-12.6,5.4-18.9,9.2L1047.5,74.7L1047.5,74.7z"
              />
              <path
                className="st17"
                d="M1039.3,80.1c2.9-2.1,5.1-3.6,8.2-5.4l-4.3-7.1c-3.3,2-5.6,3.6-8.8,5.8L1039.3,80.1L1039.3,80.1z"
              />
              <path
                className="st22"
                d="M1011.2,109.7c7.7-12,16.6-21.3,28.1-29.7l-5-6.8c-12.4,9-21.9,19-30.3,31.9L1011.2,109.7 C1011.1,109.8,1011.1,109.7,1011.2,109.7z"
              />
              <path
                className="st19"
                d="M1008.1,114.8c0.9-1.6,2.1-3.5,3-5l-7-4.6c-1,1.7-2.3,3.7-3.3,5.4L1008.1,114.8L1008.1,114.8z"
              />
              <path
                className="st22"
                d="M998.5,136.2c2.6-8.1,5.3-14.2,9.6-21.4l-7.3-4.1c-4.5,7.8-7.5,14.4-10.3,23L998.5,136.2L998.5,136.2z"
              />
              <path
                className="st19"
                d="M997.4,140c0.3-1.3,0.7-2.4,1.2-3.7l-7.9-2.6c-0.5,1.4-0.8,2.6-1.3,4L997.4,140L997.4,140z"
              />
              <path
                className="st22"
                d="M993.2,165c0.5-8.9,1.7-16.5,4.1-25l-8.1-2.3c-2.6,9.2-4,17.4-4.5,27L993.2,165 C993.2,165.1,993.2,165,993.2,165z"
              />
              <path
                className="st17"
                d="M993.2,176.7c-0.2-4-0.2-7.7,0-11.6l-8.4-0.5c-0.2,4.4-0.2,8.3,0,12.7L993.2,176.7 C993.2,176.8,993.2,176.8,993.2,176.7z"
              />
              <path
                className="st21"
                d="M993.7,182.6c-0.2-2.4-0.3-3.5-0.5-5.8l-8.4,0.5c0.1,2.6,0.2,3.7,0.5,6.3L993.7,182.6 C993.7,182.7,993.7,182.6,993.7,182.6z"
              />
              <path
                className="st19"
                d="M994.4,188.5c-0.3-1.8-0.6-3.9-0.8-5.8l-8.4,0.9c0.2,2.1,0.5,4.3,0.8,6.2L994.4,188.5L994.4,188.5z"
              />
              <path
                className="st20"
                d="M1005.2,221.9c-5.5-10.8-9-21.3-10.8-33.3l-8.3,1.3c2.1,13,5.8,24.2,11.6,35.9L1005.2,221.9 C1005.3,221.9,1005.3,221.9,1005.2,221.9z"
              />
              <path
                className="st17"
                d="M1023.2,247.4c-7.7-8.3-12.8-15.5-17.9-25.6l-7.5,3.8c5.5,10.8,10.9,18.7,19.2,27.5L1023.2,247.4 L1023.2,247.4z"
              />
              <path
                className="st19"
                d="M1028.7,253c-1.8-1.7-3.7-3.6-5.5-5.5l-6.2,5.8c2,2.1,3.9,4,6,6L1028.7,253L1028.7,253z"
              />
              <path
                className="st17"
                d="M1045.8,266.1c-6.4-4-11.4-7.8-17-13l-5.8,6.2c6,5.6,11.4,9.7,18.3,14.1L1045.8,266.1 C1045.9,266.1,1045.9,266.1,1045.8,266.1z"
              />
              <path
                className="st21"
                d="M1052.5,270c-2.4-1.3-4.4-2.4-6.8-3.9l-4.5,7.3c2.5,1.6,4.6,2.8,7.3,4.3L1052.5,270 C1052.7,270,1052.7,270,1052.5,270z"
              />
              <path
                className="st20"
                d="M1066.9,276.3c-4.7-1.7-9.8-4-14.3-6.3l-4,7.5c4.7,2.5,10.4,5,15.4,6.8L1066.9,276.3L1066.9,276.3z"
              />
              <path
                className="st21"
                d="M1072.5,278.3c-2.3-0.7-3.2-1-5.5-1.8l-2.9,7.9c2.5,0.9,3.5,1.3,6,2L1072.5,278.3L1072.5,278.3z"
              />
              <path
                className="st17"
                d="M1081.9,280.7c-3.2-0.7-6.3-1.5-9.4-2.4l-2.5,8.2c3.3,1,6.8,2,10.3,2.6L1081.9,280.7 C1082,280.7,1081.9,280.7,1081.9,280.7z"
              />
              <path
                className="st19"
                d="M1093.5,282.6c-3.7-0.3-7.9-1-11.6-1.8l-1.7,8.3c3.8,0.8,8.5,1.6,12.4,2L1093.5,282.6L1093.5,282.6z"
              />
              <path
                className="st21"
                d="M1115.1,282.7c-7.5,0.7-13.9,0.6-21.5-0.2l-0.8,8.5c8.1,0.8,15.1,0.9,23.1,0.2L1115.1,282.7L1115.1,282.7z"
              />
              <path
                className="st19"
                d="M1115.1,282.7l0.7,8.5c11.9-1,21.7-3.2,32.7-7.6l-3.1-7.9C1135.1,279.7,1126.1,281.8,1115.1,282.7z"
              />
              <path
                className="st17"
                d="M1145.5,275.7L1145.5,275.7l3,7.9c2.8-1,5.1-2.1,7.7-3.3l-3.6-7.7C1150.2,273.8,1148.1,274.7,1145.5,275.7z"
              />
              <path
                className="st19"
                d="M1152.7,272.7L1152.7,272.7l3.6,7.7c3.2-1.5,6.2-3.1,9.3-4.8l-4.3-7.4 C1158.5,269.8,1155.7,271.3,1152.7,272.7z"
              />
              <path
                className="st17"
                d="M1161.4,268.2L1161.4,268.2l4.3,7.4c3.3-1.8,5.8-3.5,8.9-5.6l-4.8-7C1166.8,264.8,1164.5,266.3,1161.4,268.2z "
              />
              <path
                className="st19"
                d="M1169.7,262.9L1169.7,262.9l4.8,7c14.3-10,24-20.2,33.2-34.9l-7.3-4.5 C1191.9,244.1,1182.9,253.5,1169.7,262.9z"
              />
              <path
                className="st21"
                d="M1200.5,230.4L1200.5,230.4l7.1,4.5c9.7-15.5,15.2-31.1,17.4-49.3l-8.4-1 C1214.7,201.5,1209.5,216,1200.5,230.4z"
              />
              <path
                className="st17"
                d="M1222.4,141.7l-8.2,2.1c3.5,13.7,4.1,26.7,2.5,40.8c0,0,0,0,0,0.1l8.4,1 C1227,170.6,1226.1,156.5,1222.4,141.7z"
              />
              <path
                className="st22"
                d="M1214.2,143.7C1214.2,143.8,1214.2,143.8,1214.2,143.7l8.2-2c-0.3-1.4-0.7-2.6-1-4l-8.2,2.3 C1213.6,141.2,1213.9,142.4,1214.2,143.7z"
              />
              <path
                className="st19"
                d="M1213.2,140L1213.2,140l8.2-2.3c-6.2-21.5-16.1-38-32.1-53.6l-5.9,6.1C1198.4,104.6,1207.5,119.9,1213.2,140z "
              />
              <path
                className="st17"
                d="M1183.3,90.1L1183.3,90.1l5.9-6c-2-2-4.1-3.8-6.2-5.6l-5.4,6.4C1179.5,86.5,1181.4,88.3,1183.3,90.1z"
              />
              <path
                className="st22"
                d="M1177.5,84.9L1177.5,84.9l5.4-6.4c-16.7-14.1-33.1-21.9-54.6-26l-1.6,8.3 C1146.8,64.5,1161.8,71.8,1177.5,84.9z"
              />
              <path
                className="st20"
                d="M1126.7,60.6L1126.7,60.6l1.6-8.2c-8.1-1.6-14.7-2.2-23-2.2v8.4C1113,58.6,1119.2,59.2,1126.7,60.6z"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 1038.79 25.5832)"
              className="st0 st1 st13"
              onClick={() => handleClick(75)}
            >
              {/* {"모병제, 질적 향상 및 "} */}
            </text>
            <text
              transform="matrix(1 0 0 1 1048.79 43.7824)"
              className="st0 st1 st13"
              onClick={() => handleClick(75)}
            >
              {/* {"   간부확보 문제는?"} */}
            </text>
          </g>
          <g className="T5-1">
            <title>키워드: 모병제, 질적 향상 가능성은?</title>
            <circle className="st15" cx={1047.5} cy={172.6} r={54.2} />
            <text
              style={{ fontSize: "6px" }}
              transform="matrix(1 0 0 1 1020.3276 106.6019)"
              className="st7"
            >
              <tspan x={0} y={-1} className="st0 st1 st14">
                {"모병제, 질적 향상"}
              </tspan>
              <tspan x={8} y={8.3} className="st0 st1 st14">
                {"가능성은? "}
              </tspan>
            </text>
          </g>
          <g className="T5-1-L1">
            <title>키워드: 병사 장기복무 어려움</title>
            <path
              className="LJS"
              d="M1088,151l2-2c2.3-2.3,2.3-6.1,0-8.3l-5-5c-2.3-2.3-6.1-2.3-8.3,0l-2,2l-2-2c-2.3-2.3-6.1-2.3-8.3,0l-5,5 c-2.3,2.3-2.3,6.1,0,8.3l2,2l-2,2c-2.3,2.3-2.3,6.1,0,8.3l5,5c2.3,2.3,6.1,2.3,8.3,0l2-2l2,2c2.3,2.3,6.1,2.3,8.3,0l5-5 c2.3-2.3,2.3-6.1,0-8.3L1088,151z"
            />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1061.6865 146.5156)"
              className="st7"
            >
              <tspan x={12} y={0} className="st24 st1">
                {"병사"}
              </tspan>
              <tspan x={12} y={7} className="st24 st1">
                {"장기복무"}
              </tspan>
              <tspan x={12} y={14} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-K1">
            <title>키워드: 병사 자율성 확대</title>
            <ellipse
              transform="matrix(0.1602 -0.9871 0.9871 0.1602 745.7375 1143.8054)"
              className="KJD"
              cx={1045.1}
              cy={133.6}
              rx={14.2}
              ry={14.2}
            />
            <text
              style={{ fontSize: "6.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1035.1938 129.9368)"
              className="st7"
            >
              <tspan x={11} y={0} className="st24 st1">
                {"병사 "}
              </tspan>
              <tspan x={11} y={7} className="st24 st1">
                {"자율성 "}
              </tspan>
              <tspan x={11} y={14} className="st24 st1">
                {"확대"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-P1">
            <title>키워드: 비관적 군대인식</title>
            <path
              className="PHR"
              d="M1055.5,164.7l1.2-1.2c1.4-1.4,1.4-3.6,0-5.1l-2.9-2.9c-1.4-1.4-3.6-1.4-5.1,0l-1.2,1.2l-1.2-1.2 c-1.4-1.4-3.6-1.4-5.1,0l-2.9,2.9c-1.4,1.4-1.4,3.6,0,5.1l1.2,1.2l-1.2,1.2c-1.4,1.4-1.4,3.6,0,5.1l2.9,2.9c1.4,1.4,3.6,1.4,5.1,0 l1.2-1.2l1.2,1.2c1.4,1.4,3.6,1.4,5.1,0l2.9-2.9c1.4-1.4,1.4-3.6,0-5.1L1055.5,164.7z"
            />
            <text
              style={{ fontSize: "4.5px" }}
              textAnchor="middle"
              transform="matrix(1.0417 0 0 1 1039.9648 162.2998)"
              className="st7"
            >
              <tspan x={7} y={0} className="st24 st1">
                {"비관적 "}
              </tspan>
              <tspan x={7} y={6} className="st24 st1">
                {"군대인식"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-L2">
            <title>키워드: 취업시장 제한</title>
            <path
              className="LJS"
              d="M1088.1,190.5l2.7-2.7c3-3,3-7.9,0-10.9l-6.4-6.4c-3-3-7.9-3-10.9,0l-2.7,2.7l-2.7-2.7c-3-3-7.9-3-10.9,0 l-6.4,6.4c-3,3-3,7.9,0,10.9l2.7,2.7l-2.7,2.7c-3,3-3,7.9,0,10.9l6.4,6.4c3,3,7.9,3,10.9,0l2.7-2.7l2.7,2.7c3,3,7.9,3,10.9,0 l6.4-6.4c3-3,3-7.9,0-10.9L1088.1,190.5z"
            />
            <text
              style={{ fontSize: "9px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1052.7617 187.583)"
              className="st7"
            >
              <tspan x={17} y={0} className="st24 st1">
                {"취업시장"}
              </tspan>
              <tspan x={17} y={12} className="st24 st1">
                {"제한"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-K2">
            <title>키워드: 특수병과 직업군인 전환</title>
            <path
              className="KJD"
              d="M1018.5,135c10.9,0,19.7,8.8,19.7,19.7c0,10.9-8.8,19.7-19.7,19.7c-10.9,0-19.7-8.8-19.7-19.7 C998.8,143.8,1007.6,135,1018.5,135z"
            />
            <text
              style={{ fontSize: "7.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1007.0112 145.452)"
              className="st7"
            >
              <tspan x={11} y={3} className="st24 st1">
                {"특수병과"}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"직업군인"}
              </tspan>
              <tspan x={11} y={21} className="st24 st1">
                {"전환"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-K3">
            <title>키워드: 직무혼합단계 모병전환</title>
            <ellipse
              transform="matrix(0.9732 -0.2298 0.2298 0.9732 -16.8507 239.1278)"
              className="KJD"
              cx={1018.5}
              cy={191.9}
              rx={17.7}
              ry={17.7}
            />
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1005.6421 187.0154)"
              className="st7"
            >
              <tspan x={11} y={-1} className="st24 st1">
                {"직무"}
              </tspan>
              <tspan x={11} y={7} className="st24 st1">
                {"혼합단계"}
              </tspan>
              <tspan x={11} y={15} className="st24 st1">
                {"모병전환"}
              </tspan>
            </text>
          </g>
          <g className="T5-1-L3">
            <title>키워드: 사명감 부재</title>
            <path
              className="LJS"
              d="M1050.2,213.2l1.5-1.5c1.7-1.7,1.7-4.3,0-6l-3.5-3.5c-1.7-1.7-4.3-1.7-6,0l-1.5,1.5l-1.5-1.5 c-1.7-1.7-4.3-1.7-6,0l-3.5,3.5c-1.7,1.7-1.7,4.3,0,6l1.5,1.5l-1.5,1.5c-1.7,1.7-1.7,4.3,0,6l3.5,3.5c1.7,1.7,4.3,1.7,6,0l1.5-1.5 l1.5,1.5c1.7,1.7,4.3,1.7,6,0l3.5-3.5c1.7-1.7,1.7-4.3,0-6L1050.2,213.2z"
            />
            <text
              style={{ fontSize: "5.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1033.3008 209.4424)"
              className="st7"
            >
              <tspan x={7} y={2} className="st24 st1">
                {"사명감"}
              </tspan>
              <tspan x={7} y={9} className="st24 st1">
                {"부재"}
              </tspan>
            </text>
          </g>
          <g className="T5-2">
            <title>키워드: 모병제 전환 시 간부운용 계획?</title>
            <circle className="st15" cx={1159.8} cy={173.8} r={58} />
            <text transform="matrix(1 0 0 1 1117.1221 96.9686)" className="st7">
              <tspan x={13} y={7} className="st0 st1 st14">
                {"모병제 전환 시"}
              </tspan>

              <tspan x={13} y={15.5} className="st0 st1 st14">
                {"간부운용 계획?"}
              </tspan>
            </text>
          </g>
          <g className="T5-2-J1">
            <title>키워드: 간부중심 군개편 가능</title>
            <ellipse
              transform="matrix(0.2298 -0.9732 0.9732 0.2298 685.8254 1234.0736)"
              className="JKT"
              cx={1122.6}
              cy={183.7}
              rx={18.5}
              ry={18.5}
            />
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1114.3672 177.1849)"
              className="st7"
            >
              <tspan x={8} y={2} className="st24 st1">
                {"간부중심 "}
              </tspan>
              <tspan x={8} y={10} className="st24 st1">
                {"군개편"}
              </tspan>
              <tspan x={8} y={18} className="st24 st1">
                {"가능"}
              </tspan>
            </text>
          </g>
          <g className="T5-2-P1">
            <title>키워드: 예비역 소멸문제</title>
            <path
              className="PHR"
              d="M1183.8,138.9l2.4-2.4c2.8-2.8,2.8-7.1,0-9.8l-5.8-5.8c-2.8-2.8-7.1-2.8-9.8,0l-2.4,2.4l-2.4-2.4 c-2.8-2.8-7.1-2.8-9.8,0l-5.8,5.8c-2.8,2.8-2.8,7.1,0,9.8l2.4,2.4l-2.4,2.4c-2.8,2.8-2.8,7.1,0,9.8l5.8,5.8c2.8,2.8,7.1,2.8,9.8,0 l2.4-2.4l2.4,2.4c2.8,2.8,7.1,2.8,9.8,0l5.8-5.8c2.8-2.8,2.8-7.1,0-9.8L1183.8,138.9z"
            />
            <text
              style={{ fontSize: "8.3px" }}
              textAnchor="middle"
              transform="matrix(1.0417 0 0 1 1157.249 137.2723)"
              className="st7"
            >
              <tspan x={11} y={-1} className="st24 st1">
                {"예비역"}
              </tspan>
              <tspan x={10} y={9} className="st24 st1">
                {"소멸문제"}
              </tspan>
            </text>
          </g>
          <g className="T5-2-K1">
            <title>키워드: 직업예비군제 전환</title>
            <ellipse
              transform="matrix(0.3827 -0.9239 0.9239 0.3827 561.2165 1135.4305)"
              className="KJD"
              cx={1130.3}
              cy={147.8}
              rx={17.7}
              ry={17.7}
            />
            <text
              style={{ fontSize: "7.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1116.4199 143.6265)"
              className="st7"
            >
              <tspan x={13} y={-2} className="st24 st1">
                {"직업"}
              </tspan>
              <tspan x={13} y={7} className="st24 st1">
                {"예비군제"}
              </tspan>
              <tspan x={13} y={16} className="st24 st1">
                {"전환"}
              </tspan>
            </text>
          </g>
          <g className="T5-2-P2">
            <title>키워드: 간부월급 인상필요</title>
            <path
              className="PHR"
              d="M1207.2,184.9l3.2-3.2c3.4-3.4,3.4-9.2,0-12.7l-7.5-7.5c-3.4-3.4-9.2-3.4-12.7,0l-3.2,3.2l-3.2-3.2 c-3.4-3.4-9.2-3.4-12.7,0l-7.5,7.5c-3.4,3.4-3.4,9.2,0,12.7l3.2,3.2l-3.2,3.2c-3.4,3.4-3.4,9.2,0,12.7l7.5,7.5 c3.4,3.4,9.2,3.4,12.7,0l3.2-3.2l3.2,3.2c3.4,3.4,9.2,3.4,12.7,0l7.5-7.5c3.4-3.4,3.4-9.2,0-12.7L1207.2,184.9z"
            />
            <text
              style={{ fontSize: "10px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1173.2803 173.2124)"
              className="st7"
            >
              <tspan x={13} y={7} className="st24 st1">
                {"간부월급"}
              </tspan>
              <tspan x={13} y={22} className="st24 st1">
                {"인상필요 "}
              </tspan>
            </text>
          </g>
          <g className="T5-2-P3">
            <title>키워드: 충분한 부사관 수</title>
            <path
              className="PHR"
              d="M1161.7,211.3l2.1-2.1c2.3-2.3,2.3-6.1,0-8.5l-5-5c-2.3-2.3-6.1-2.3-8.5,0l-2.1,2.1l-2.1-2.1 c-2.3-2.3-6.1-2.3-8.5,0l-5,5c-2.3,2.3-2.3,6.1,0,8.5l2.1,2.1l-2.1,2.1c-2.3,2.3-2.3,6.1,0,8.5l5,5c2.3,2.3,6.1,2.3,8.5,0l2.1-2.1 l2.1,2.1c2.3,2.3,6.1,2.3,8.5,0l5-5c2.3-2.3,2.3-6.1,0-8.5L1161.7,211.3z"
            />
            <text
              style={{ fontSize: "7.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1139.1641 202.2559)"
              className="st7"
            >
              <tspan x={10} y={5} className="st24 st1 ">
                {"충분한 "}
              </tspan>

              <tspan x={10} y={17} className="st24 st1 ">
                {"부사관 수"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};
export default CP5K;
