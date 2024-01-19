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

interface CP4KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  //cpPositions: { [key: string]: { x: number; y: number } };
}

//@ts-ignore
const CP4K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP4KProps) => {
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
  //const position = cpPositions["모병제, 일자리 문제 해결책?"];
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
        xmlSpace="preserve"
        {...props}
      >
        {/* 다른 것도 수정해주기 */}
        <style type="text/css">
          {
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14.3527px;}\n\t.st14{font-size:8.2107px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP4">
          <g className="T4">
            <g className="P4">
              <path
                className="st21"
                d="M817.2,102.8c14.9-9.7,30.3-14.3,48-14.3v-6.6c-19.1,0-35.7,5-51.7,15.3L817.2,102.8 C817.2,102.9,817.2,102.8,817.2,102.8z"
              />
              <path
                className="st17"
                d="M788.1,134c7.1-12.9,16.7-23.1,29-31.2l-3.6-5.5c-13.2,8.6-23.6,19.7-31.3,33.6L788.1,134 C788.1,134.1,788.1,134.1,788.1,134z"
              />
              <path
                className="st22"
                d="M786.7,136.8c0.7-1.3,0.8-1.5,1.4-2.6l-5.9-3.2c-0.7,1.4-0.9,1.6-1.6,2.9L786.7,136.8 C786.6,136.8,786.7,136.8,786.7,136.8z"
              />
              <path
                className="st19"
                d="M779.7,198.1c-5.3-21.1-2.9-41.9,7-61.4l-6-3c-10.6,20.8-13.2,43.3-7.5,66L779.7,198.1L779.7,198.1z"
              />
              <path
                className="st17"
                d="M781.9,205.5c-0.9-2.5-1.5-4.7-2.2-7.4l-6.4,1.6c0.7,2.9,1.4,5.2,2.3,7.9L781.9,205.5L781.9,205.5z"
              />
              <path
                className="st22"
                d="M781.9,205.5l-6.3,2.2c7.5,21.7,20,37.4,39.4,49.5l3.6-5.6C800.5,240.4,788.8,225.7,781.9,205.5z"
              />
              <path
                className="st20"
                d="M818.5,251.7L818.5,251.7l-3.6,5.6c7.3,4.6,14.3,7.7,22.6,10.3l2-6.3C831.9,258.8,825.3,255.8,818.5,251.7z"
              />
              <path
                className="st22"
                d="M839.5,261.3L839.5,261.3l-2,6.3c4,1.3,7.1,2,11.3,2.6l1.2-6.6C846.1,263,843.1,262.3,839.5,261.3z"
              />
              <path
                className="st20"
                d="M849.9,263.7L849.9,263.7l-1.2,6.6c3.8,0.7,7.6,1.2,11.5,1.3l0.3-6.7C857.1,264.7,853.5,264.4,849.9,263.7z"
              />
              <path
                className="st22"
                d="M860.7,264.9L860.7,264.9l-0.3,6.7c6.7,0.3,11.6,0.1,18.2-0.8l-0.9-6.6C871.4,265.1,866.9,265.3,860.7,264.9z "
              />
              <path
                className="st21"
                d="M877.6,264.3L877.6,264.3l0.9,6.6c2.1-0.3,4.5-0.7,6.6-1.2l-1.4-6.6C881.7,263.6,879.4,263.9,877.6,264.3z"
              />
              <path
                className="st20"
                d="M883.7,263.1C883.6,263.1,883.6,263.1,883.7,263.1l1.4,6.6c1.5-0.3,1.7-0.3,3.2-0.7l-1.6-6.4 C885.3,262.8,885,262.9,883.7,263.1z"
              />
              <path
                className="st22"
                d="M886.7,262.4C886.6,262.4,886.6,262.4,886.7,262.4l1.5,6.4c3.7-0.9,7.5-2.2,11.1-3.5l-2.4-6.2 C893.6,260.5,890,261.6,886.7,262.4z"
              />
              <path
                className="st21"
                d="M896.9,259.2C896.9,259.2,896.8,259.2,896.9,259.2l2.3,6.2c2.3-0.9,3.9-1.6,6.1-2.5l-2.8-6 C900.5,257.8,899,258.4,896.9,259.2z"
              />
              <path
                className="st20"
                d="M902.6,256.8L902.6,256.8l2.8,6c2.2-1,3.8-1.8,5.9-3L908,254C906,255.2,904.5,255.8,902.6,256.8z"
              />
              <path
                className="st21"
                d="M908.1,254C908.1,254,908,254,908.1,254l3.2,5.9c1.5-0.8,2.9-1.6,4.3-2.5l-3.6-5.6 C910.6,252.5,909.4,253.3,908.1,254z"
              />
              <path
                className="st20"
                d="M912,251.7L912,251.7l3.5,5.6c3.9-2.4,7.1-4.8,10.7-7.8l-4.3-5.1C918.7,247.2,915.7,249.4,912,251.7z"
              />
              <path
                className="st21"
                d="M922,244.4C922,244.4,921.9,244.4,922,244.4l4.3,5.1c7.4-6.2,13.4-12.9,18.5-21l-5.5-3.6 C934.4,232.5,929,238.7,922,244.4z"
              />
              <path
                className="st20"
                d="M939.3,224.9L939.3,224.9l5.5,3.7c5.6-8.6,9.4-17.2,12.1-27.1l-6.3-1.7C948.1,209,944.5,216.8,939.3,224.9z"
              />
              <path
                className="st21"
                d="M950.5,199.6L950.5,199.6l6.3,1.7c2.1-7.7,3.1-14.9,3.2-22.9l-6.6-0.1C953.4,185.8,952.4,192.5,950.5,199.6z"
              />
              <path
                className="st17"
                d="M958.3,158.8l-6.4,1.3c1.3,6.4,1.7,11.9,1.6,18.3l0,0l6.6,0.1C960.3,171.5,959.7,165.7,958.3,158.8z"
              />
              <path
                className="st20"
                d="M940.1,130.1c6,9.7,9.6,18.8,11.7,29.9l0,0l6.4-1.3c-2.3-12.1-6.2-21.8-12.7-32.1L940.1,130.1L940.1,130.1z"
              />
              <path
                className="st17"
                d="M919.6,107.3c8.8,6.8,14.6,13.4,20.5,22.8l5.5-3.5c-6.3-10.1-12.7-17.2-22-24.5L919.6,107.3L919.6,107.3z"
              />
              <path
                className="st20"
                d="M865.3,88.6c20.6,0,38,6,54.4,18.7l4-5.2c-17.5-13.7-36.2-20.2-58.4-20.2V88.6L865.3,88.6z"
              />
            </g>
            <title>키워드: 모병제, 일자리 문제 해결책?</title>
            <text
              transform="matrix(1 0 0 1 806.4214 56.5149)"
              className="st0 st1 st13"
              onClick={() => handleClick(55)}
            >
              {/* {"모병제, 일자리 문제"} */}
            </text>
            <text
              transform="matrix(1 0 0 1 842.4214 73.5149)"
              className="st0 st1 st13"
              onClick={() => handleClick(55)}
            >
              {/* {"해결책?"} */}
            </text>
          </g>
          <g className="T4-1">
            <circle className="st15" cx={822.8} cy={177.9} r={45.8} />
            <title>키워드: 일자리 제공 가능한가?</title>
            <text transform="matrix(1 0 0 1 812.2222 118.3016)">
              <tspan x={-7} y={1} className="st0 st1 st14">
                {"일자리 제공"}
              </tspan>
              <tspan x={-2} y={10} className="st0 st1 st14">
                {"가능한가?"}
              </tspan>
            </text>
          </g>
          <g className="T4-1-J1">
            <ellipse
              transform="matrix(0.3805 -0.9248 0.9248 0.3805 358.0857 838.6187)"
              className="JKT"
              cx={805}
              cy={152}
              rx={14}
              ry={14}
            />

            <title>키워드: 징병 경력단절 문제</title>
            <text
              style={{ fontSize: "6.2px" }}
              transform="matrix(1 0 0 1 794.6953 150.9248)"
              className="st7"
            >
              <tspan x={3} y={-4} className="st24 st1">
                {"징병"}
              </tspan>
              <tspan x={-2} y={3} className="st24 st1">
                {"경력단절"}
              </tspan>
              <tspan x={3} y={10} className="st24 st1">
                {"문제"}
              </tspan>
            </text>
          </g>
          <g className="T4-1-L1">
            <path
              className="LJS"
              d="M853,159l2.3-2.3c2.6-2.6,2.6-6.7,0-9.3l-5.5-5.5c-2.6-2.6-6.7-2.6-9.3,0l-2.3,2.3l-2.3-2.3 c-2.6-2.6-6.7-2.6-9.3,0l-5.5,5.5c-2.6,2.6-2.6,6.7,0,9.3l2.3,2.3l-2.3,2.3c-2.6,2.6-2.6,6.7,0,9.3l5.5,5.5c2.6,2.6,6.7,2.6,9.3,0 l2.3-2.3l2.3,2.3c2.6,2.6,6.7,2.6,9.3,0l5.5-5.5c2.6-2.6,2.6-6.7,0-9.3L853,159z"
            />

            <title>키워드: 경제호황 모병어려움</title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 828.2578 152.1304)"
              className="st7"
            >
              <tspan x={11} y={2} className="st24 st1">
                {"경제호황"}
              </tspan>
              <tspan x={11} y={10} className="st24 st1">
                {"모병 "}
              </tspan>
              <tspan x={11} y={18} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T4-1-L2">
            <title>키워드: 일자리총량 일정</title>
            <path
              className="LJS"
              d="M858.5,192.9l1.9-1.9c2.1-2.1,2.1-5.5,0-7.6L856,179c-2.1-2.1-5.5-2.1-7.6,0l-1.9,1.9l-1.9-1.9 c-2.1-2.1-5.5-2.1-7.6,0l-4.5,4.5c-2.1,2.1-2.1,5.5,0,7.6l1.9,1.9l-1.9,1.9c-2.1,2.1-2.1,5.5,0,7.6l4.5,4.5c2.1,2.1,5.5,2.1,7.6,0 l1.9-1.9l1.9,1.9c2.1,2.1,5.5,2.1,7.6,0l4.5-4.5c2.1-2.1,2.1-5.5,0-7.6L858.5,192.9z"
            />
            <text
              style={{ fontSize: "6.8px" }}
              textAnchor="middle"
              transform="matrix(1.0067 0 0 1 836.8569 188.5674)"
              className="st7"
            >
              <tspan x={10} y={0} className="st24 st1">
                {"일자리 "}
              </tspan>
              <tspan x={10} y={7} className="st24 st1">
                {"총량"}
              </tspan>
              <tspan x={10} y={14} className="st24 st1">
                {"일정"}
              </tspan>
            </text>
          </g>
          <g className="T4-1-J2">
            <ellipse
              transform="matrix(0.2136 -0.9769 0.9769 0.2136 448.1364 937.7002)"
              className="JKT"
              cx={806.5}
              cy={190.5}
              rx={24.5}
              ry={24.5}
            />
            <title>키워드: 21만 일자리 제공</title>
            <text
              style={{ fontSize: "10.3px" }}
              textAnchor="middle"
              transform="matrix(0.9931 0 0 1 794.604 186.3232)"
              className="st7"
            >
              <tspan x={11} y={-5} className="st24 st1">
                {"21만"}
              </tspan>
              <tspan x={11} y={8} className="st24 st1">
                {"일자리"}
              </tspan>
              <tspan x={11} y={21} className="st24 st1">
                {"제공"}
              </tspan>
            </text>
          </g>
          <g className="T4-2">
            <circle className="st15" cx={910.8} cy={177} r={42.2} />

            <title>키워드: 현 병사의 위치는?</title>
            <text transform="matrix(1 0 0 1 864.0957 122.8211)">
              <tspan x={28} y={0} className="st0 st1 st14">
                {"현 병사의"}
              </tspan>
              <tspan x={32} y={9} className="st0 st1 st14">
                {"위치는?"}
              </tspan>
            </text>
          </g>
          <g className="T4-2-K1">
            <path
              className="KJD"
              d="M890,144.5c7.6,0,13.8,6.2,13.8,13.8c0,7.6-6.2,13.8-13.8,13.8c-7.6,0-13.8-6.2-13.8-13.8 C876.2,150.6,882.4,144.5,890,144.5z"
            />

            <title>키워드: 악폐습 감소</title>
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 880.7319 156.6108)"
              className="st7"
            >
              <tspan x={10} y={0} className="st24 st1">
                {"악폐습 "}
              </tspan>
              <tspan x={10} y={8} className="st24 st1">
                {"감소"}
              </tspan>
            </text>
          </g>
          <g className="T4-2-P1">
            <path
              className="PHR"
              d="M939.6,162l2.5-2.5c2.6-2.6,2.6-7,0-9.8l-5.8-5.8c-2.6-2.6-7-2.6-9.8,0l-2.5,2.5l-2.5-2.5 c-2.6-2.6-7-2.6-9.8,0l-5.8,5.8c-2.6,2.6-2.6,7,0,9.8l2.5,2.5l-2.5,2.5c-2.6,2.6-2.6,7,0,9.8l5.8,5.8c2.6,2.6,7,2.6,9.8,0l2.5-2.5 l2.5,2.5c2.6,2.6,7,2.6,9.8,0l5.8-5.8c2.6-2.6,2.6-7,0-9.8L939.6,162z"
            />

            <title>키워드: 제한된 사회적 지위</title>
            <text
              style={{ fontSize: "8px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 912.1846 156.5615)"
              className="st7"
            >
              <tspan x={13} y={0} className="st24 st1">
                {"제한된"}
              </tspan>
              <tspan x={13} y={8.3} className="st24 st1">
                {"사회적"}
              </tspan>
              <tspan x={13} y={16.5} className="st24 st1">
                {"지위"}
              </tspan>
            </text>
          </g>
          <g className="T4-2-L1">
            <path
              className="LJS"
              d="M916.9,203.3l1.7-1.7c1.9-1.9,1.9-4.8,0-6.7l-3.9-3.9c-1.9-1.9-4.8-1.9-6.7,0l-1.7,1.7l-1.7-1.7 c-1.9-1.9-4.8-1.9-6.7,0l-3.9,3.9c-1.9,1.9-1.9,4.8,0,6.7l1.7,1.7l-1.7,1.7c-1.9,1.9-1.9,4.8,0,6.7l3.9,3.9c1.9,1.9,4.8,1.9,6.7,0 l1.7-1.7l1.7,1.7c1.9,1.9,4.8,1.9,6.7,0l3.9-3.9c1.9-1.9,1.9-4.8,0-6.7L916.9,203.3z"
            />

            <title>키워드: 병사 장기복무 어려움</title>
            <text
              style={{ fontSize: "5.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 895.0972 200.0684)"
              className="st7"
            >
              <tspan x={11} y={0} className="st24 st1">
                {"병사"}
              </tspan>
              <tspan x={11} y={6} className="st24 st1">
                {"장기복무 "}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T4-2-P2">
            <path
              className="PHR"
              d="M942.7,194.5l1.6-1.6c1.8-1.8,1.8-4.5,0-6.3l-3.6-3.6c-1.8-1.8-4.5-1.8-6.3,0l-1.6,1.6l-1.6-1.6 c-1.8-1.8-4.5-1.8-6.3,0l-3.6,3.6c-1.8,1.8-1.8,4.5,0,6.3l1.6,1.6l-1.6,1.6c-1.8,1.8-1.8,4.5,0,6.3l3.6,3.6c1.8,1.8,4.5,1.8,6.3,0 l1.6-1.6l1.6,1.6c1.8,1.8,4.5,1.8,6.3,0l3.6-3.6c1.8-1.8,1.8-4.5,0-6.3L942.7,194.5z"
            />

            <title>키워드: 군 사회인식 개선필요</title>
            <text
              style={{ fontSize: "5.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 926.7686 189.4512)"
              className="st7"
            >
              <tspan x={7} y={2} className="st24 st1">
                {"군"}
              </tspan>
              <tspan x={7} y={7.5} className="st24 st1">
                {"사회인식 "}
              </tspan>
              <tspan x={7} y={13} className="st24 st1">
                {"개선필요"}
              </tspan>
            </text>
          </g>
          <g className="T4-2-K2">
            <ellipse
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 -3.5022 352.3929)"
              className="KJD"
              cx={884}
              cy={185}
              rx={14}
              ry={14}
            />

            <title>키워드: 자기개발 혜택제공</title>
            <text
              style={{ fontSize: "6.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 871.2529 184.6523)"
              className="st7"
            >
              <tspan x={12} y={0} className="st24 st1">
                {"자기개발"}
              </tspan>
              <tspan x={12} y={7} className="st24 st1">
                {"혜택제공"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};
export default CP4K;
