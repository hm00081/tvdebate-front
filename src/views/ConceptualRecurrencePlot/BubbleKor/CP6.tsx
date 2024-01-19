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

interface CP6KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  //cpPositions: { [key: string]: { x: number; y: number } };
}

//@ts-ignore
const CP6K = ({
  onTitleClick,
  dataStructureSet,
  transcriptViewerRef,
  //cpPositions,
  ...props
}: CP6KProps) => {
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
  //const position = cpPositions["여성 징집과 봉급체계"];
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
        <g className="CP6">
          <title>키워드: 여성 징집과 보급체계</title>
          <g className="T6">
            <text
              transform="matrix(1 0 0 1 1295.049 57.6955)"
              className="st0 st1 st13"
              onClick={() => handleClick(100)}
            >
              {/* {"여성 징집과 봉급체계"} */}
            </text>
          </g>
          <g className="P6">
            <path
              className="st21"
              d="M1334.3,87.7c8.4-2.5,17.3-3.9,26.1-4v-7.9c-9.8,0-19.7,1.5-29,4.4l2.4,7.8 C1333.9,87.8,1334,87.8,1334.3,87.7z"
            />
            <path
              className="st17"
              d="M1328.1,89.9c2.3-0.9,3.3-1.3,5.5-2l-2.4-7.8c-2.8,0.8-3.8,1.3-6.6,2.3l3,7.7 C1327.8,90,1327.9,89.9,1328.1,89.9z"
            />
            <path
              className="st21"
              d="M1320.8,93c2.4-1.2,4.5-2.1,6.9-3l-3-7.7c-2.8,1-5.3,2.2-7.9,3.5l3.6,7.4C1320.5,93.2,1320.7,93.1,1320.8,93z "
            />
            <path
              className="st19"
              d="M1299.4,107.4c6.3-5.6,13.4-10.5,21-14.2l-3.6-7.4c-8.3,4-16,9.2-22.9,15.4L1299.4,107.4 C1299.4,107.5,1299.4,107.5,1299.4,107.4z"
            />
            <path
              className="st17"
              d="M1299.4,107.5l-5.5-6.2c-2.3,2.1-4.1,3.8-6.2,6.1l6.1,5.6C1295.7,111,1297.3,109.3,1299.4,107.5z"
            />
            <path
              className="st19"
              d="M1293.6,113.1C1293.7,113,1293.7,113,1293.6,113.1l-6-5.8c-6.6,7-10.6,12.7-15.1,21.2l7.3,3.9 C1283.9,124.8,1287.7,119.5,1293.6,113.1z"
            />
            <path
              className="st21"
              d="M1279.7,132.7c0.1-0.1,0.1-0.2,0.2-0.3l-7.3-3.9c-1.2,2.2-2.1,4-3,6.2l7.5,3.3 C1277.8,136.2,1278.6,134.7,1279.7,132.7z"
            />
            <path
              className="st19"
              d="M1276.8,138.6c0.1-0.1,0.1-0.3,0.2-0.5l-7.5-3.3c-2,4.4-3.5,8.4-4.7,13l7.8,2.2 C1273.8,146.1,1275.1,142.4,1276.8,138.6z"
            />
            <path
              className="st17"
              d="M1272.4,150.7c0.1-0.2,0.1-0.5,0.2-0.7l-7.8-2.2c-1.3,4.6-2.2,8.9-2.9,13.6l7.9,1.2 C1270.4,158.4,1271.3,154.7,1272.4,150.7z"
            />
            <path
              className="st21"
              d="M1269.6,163.4c0-0.2,0.1-0.6,0.1-0.8l-7.9-1.2c-0.5,2.9-0.7,5.8-0.8,8.6l7.9,0.5 C1269.2,168.1,1269.4,165.7,1269.6,163.4z"
            />
            <path
              className="st20"
              d="M1269,171.3c0-0.3,0-0.6,0.1-0.9l-7.9-0.5c-0.1,3.2-0.2,5.5-0.1,8.6l7.8-0.2 C1268.7,175.9,1268.8,174,1269,171.3z"
            />
            <path
              className="st21"
              d="M1268.8,179.4c0-0.3,0-0.7,0-1l-7.8,0.2c0.3,8.4,1.5,15.8,3.8,24l7.3-2.1 C1270.1,193.4,1269.1,186.9,1268.8,179.4z"
            />
            <path
              className="st17"
              d="M1272.4,201.7c-0.1-0.3-0.2-0.8-0.3-1.2l-7.3,2.1c0.9,3.3,2.1,6.7,3.3,9.8l6.9-2.8 C1274,207,1273.1,204.4,1272.4,201.7z"
            />
            <path
              className="st20"
              d="M1275.5,210.8c-0.1-0.3-0.3-0.8-0.5-1.2l-6.9,2.8c4.4,10.8,9.4,19.1,17.2,28l5.3-4.6 C1283.9,228,1279.4,220.5,1275.5,210.8z"
            />
            <path
              className="st21"
              d="M1291.5,236.8c-0.3-0.3-0.6-0.7-0.9-1l-5.3,4.6c2.2,2.5,3.6,4,6,6.3l4.8-5 C1294.4,240.2,1293.1,238.8,1291.5,236.8z"
            />
            <path
              className="st20"
              d="M1297.1,242.7c-0.3-0.3-0.7-0.7-0.9-0.9l-4.8,5c9.2,8.9,18.5,15,30.2,20l2.5-5.9 C1313.6,256.3,1305.2,250.7,1297.1,242.7z"
            />
            <path
              className="st17"
              d="M1325.2,261.4c-0.3-0.1-0.8-0.3-1.2-0.5l-2.5,5.9c1.8,0.8,4.6,1.8,6.4,2.5l2.1-6 C1328.5,262.6,1326.5,262,1325.2,261.4z"
            />
            <path
              className="st21"
              d="M1331.1,263.7c-0.3-0.1-0.7-0.2-1.2-0.3l-2.1,6c20.4,7,39,7.5,59.8,1.6l-1.6-5.5 C1367.2,270.6,1349.9,270.1,1331.1,263.7z"
            />
            <path
              className="st17"
              d="M1386.8,265.1c-0.2,0.1-0.3,0.1-0.6,0.1l1.6,5.5c12.2-3.5,22.2-8.5,32.5-16.1l-3.3-4.5 C1407.4,257.2,1398.2,261.8,1386.8,265.1z"
            />
            <path
              className="st20"
              d="M1416.9,250.1l-0.1,0.1l3.3,4.5c1.6-1.2,2.5-2,4-3.2l-3.6-4.3C1419.3,248.2,1418.4,248.9,1416.9,250.1z"
            />
            <path
              className="st22"
              d="M1442.2,221.1c-5.6,10.1-12.6,18.5-21.4,26c0,0,0,0-0.1,0l3.6,4.3c9.6-8.1,16.9-17,23-28l-5-2.8 C1442.3,220.8,1442.3,220.9,1442.2,221.1z"
            />
            <path
              className="st19"
              d="M1445.2,215.3c-0.9,1.8-1.7,3.6-2.8,5.4l5,2.8c1.2-2.1,2.2-4,3.1-6.2l-5.2-2.4 C1445.3,215,1445.2,215.1,1445.2,215.3z"
            />
            <path
              className="st22"
              d="M1451.4,197c-1.5,6.6-3.3,11.9-6.1,17.9l5.2,2.4c3.1-6.7,5.1-12.4,6.8-19.7l-5.6-1.3 C1451.5,196.5,1451.5,196.8,1451.4,197z"
            />
            <path
              className="st17"
              d="M1453.1,187.4c-0.5,3.3-0.8,5.6-1.5,8.9l5.6,1.3c0.9-3.8,1.4-6.4,1.8-10.3l-5.9-0.7 C1453.1,186.9,1453.1,187.2,1453.1,187.4z"
            />
            <path
              className="st22"
              d="M1455,144.5l-6.1,2c0.1,0.3,0.2,0.7,0.3,1.2c4.3,13.2,5.5,25.2,3.9,39l5.9,0.7 C1460.9,172.1,1459.7,159,1455,144.5z"
            />
            <path
              className="st19"
              d="M1447.6,143c0.5,1.3,0.8,2.3,1.3,3.5l6.1-2c-0.6-1.8-1-3.1-1.7-5l-6,2.3 C1447.4,142.3,1447.5,142.6,1447.6,143z"
            />
            <path
              className="st22"
              d="M1436.1,121.8c4.7,6.4,8.2,12.8,11.1,20l6-2.3c-3.2-8.4-7.1-15.5-12.4-22.8l-5.5,4 C1435.6,121.1,1435.8,121.4,1436.1,121.8z"
            />
            <path
              className="st19"
              d="M1433.2,118c0.6,0.8,1.4,1.8,2.2,2.8l5.5-4c-0.9-1.2-2.2-3-3.2-4.1l-5.3,4.3 C1432.6,117.3,1432.8,117.6,1433.2,118z"
            />
            <path
              className="st22"
              d="M1415.7,101.4c6.8,5,11.4,9.3,16.7,15.5l5.3-4.3c-6-7.4-11.2-12.3-18.9-17.9l-4.3,5.9 C1415,100.8,1415.3,101.1,1415.7,101.4z"
            />
            <path
              className="st17"
              d="M1406.1,95.3c3.1,1.7,5.6,3.3,8.4,5.3l4.3-5.9c-3.5-2.5-6.4-4.5-10.3-6.6l-3.6,6.4 C1405.4,94.8,1405.8,95.1,1406.1,95.3z"
            />
            <path
              className="st21"
              d="M1398.9,91.7c1.8,0.8,4.1,2,6.1,3l3.6-6.4c-2.3-1.3-5.4-2.8-7.7-3.9l-3,6.8 C1398.1,91.4,1398.5,91.5,1398.9,91.7z"
            />
            <path
              className="st19"
              d="M1394.5,89.9c1.4,0.6,2.2,0.9,3.3,1.4l3-6.8c-2-0.8-2.9-1.3-4.8-2l-2.6,7C1393.7,89.5,1394,89.7,1394.5,89.9z "
            />
            <path
              className="st20"
              d="M1361.3,83.7c11.7,0,21.2,1.7,32,5.8l2.6-7c-12.2-4.7-22.6-6.6-35.6-6.6v7.9 C1360.6,83.7,1361,83.7,1361.3,83.7z"
            />
          </g>
          <g className="T6-1">
            <title>키워드: 현 상확과 여성 모병방안은?</title>
            <circle className="st15" cx={1314.5} cy={176.7} r={44.7} />
            <circle className="st15" cx={1406.3} cy={175.1} r={46.5} />
            <text
              transform="matrix(1 0 0 1 1310.7285 113.7039)"
              className="st7"
            >
              <tspan x={0} y={7} className="st0 st1 st14">
                {"현 상황과 여성 모병방안은?"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-K1">
            <title>키워드: 충분한 여군간부 수</title>
            <circle className="KJD" cx={1290.6} cy={158.9} r={13.4} />
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1283.0957 154.0176)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1">
                {"충분한"}
              </tspan>
              <tspan x={8} y={7} className="st24 st1">
                {"여군간부"}
              </tspan>
              <tspan x={8} y={14} className="st24 st1">
                {"수"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-P1">
            <title>키워드: 남녀동반 투입불가</title>
            <path
              className="PHR"
              d="M1331.7,149.4l1.9-1.9c2.1-2.2,2-5.6-0.1-7.7l-4.5-4.4c-2.2-2.1-5.6-2-7.7,0.1l-1.9,1.9l-1.9-1.9 c-2.2-2.1-5.6-2-7.7,0.1l-4.4,4.5c-2.1,2.2-2,5.6,0.1,7.7l1.9,1.9l-1.9,1.9c-2.1,2.2-2,5.6,0.1,7.7l4.5,4.4c2.2,2.1,5.6,2,7.7-0.1 l1.9-1.9l1.9,1.9c2.2,2.1,5.6,2,7.7-0.1l4.4-4.5c2.1-2.2,2-5.6-0.1-7.7L1331.7,149.4z"
            />
            <text
              style={{ fontSize: "6.6px" }}
              textAnchor="middle"
              transform="matrix(0.9999 -1.497861e-02 1.497861e-02 0.9999 1307.1531 148.5055)"
              className="st7"
            >
              <tspan x={13} y={-2} className="st24 st1">
                {"남녀동반"}
              </tspan>
              <tspan x={13} y={7} className="st24 st1">
                {"투입불가"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-K2">
            <title>키워드: 여성사병징집 불필요</title>
            <ellipse
              transform="matrix(0.2298 -0.9732 0.9732 0.2298 810.1683 1400.9176)"
              className="KJD"
              cx={1290.2}
              cy={188.6}
              rx={15.8}
              ry={15.8}
            />
            <text
              style={{ fontSize: "6.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1277.5732 184.7832)"
              className="st7"
            >
              <tspan x={13} y={-1} className="st24 st1">
                {"여성"}
              </tspan>
              <tspan x={13} y={6} className="st24 st1">
                {"사병징집 "}
              </tspan>
              <tspan x={13} y={13} className="st24 st1">
                {"불필요"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-P2">
            <title>키워드: 여군 모병후 후방투입</title>
            <path
              className="PHR"
              d="M1347.1,188l2.9-2.9c3.3-3.3,3.3-8.6,0-11.7l-6.9-6.9c-3.3-3.3-8.6-3.3-11.7,0l-2.9,2.9l-2.9-2.9 c-3.3-3.3-8.6-3.3-11.7,0l-6.9,6.9c-3.3,3.3-3.3,8.6,0,11.7l2.9,2.9l-2.9,2.9c-3.3,3.3-3.3,8.6,0,11.7l6.9,6.9 c3.3,3.3,8.6,3.3,11.7,0l2.9-2.9l2.9,2.9c3.3,3.3,8.6,3.3,11.7,0l6.9-6.9c3.3-3.3,3.3-8.6,0-11.7L1347.1,188z"
            />
            <text
              style={{ fontSize: "9px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1310.4238 183.0576)"
              className="st7"
            >
              <tspan x={17} y={-3} className="st24 st1">
                {"여군"}
              </tspan>
              <tspan x={17} y={7} className="st24 st1">
                {"모병후"}
              </tspan>
              <tspan x={17} y={17} className="st24 st1">
                {"후방투입"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-L1">
            <title>키워드: 여성사병 단기복무시 혜택제공</title>
            <path
              className="LJS"
              d="M1435.8,151.3l1.7-1.7c1.9-1.9,1.9-5.1,0-7.1l-4.1-4.1c-1.9-1.9-5.1-1.9-7.1,0l-1.7,1.7l-1.7-1.7 c-1.9-1.9-5.1-1.9-7.1,0l-4.1,4.1c-1.9,1.9-1.9,5.1,0,7.1l1.7,1.7l-1.7,1.7c-1.9,1.9-1.9,5.1,0,7.1l4.1,4.1c1.9,1.9,5.1,1.9,7.1,0 l1.7-1.7l1.7,1.7c1.9,1.9,5.1,1.9,7.1,0l4.1-4.1c1.9-1.9,1.9-5.1,0-7.1L1435.8,151.3z"
            />
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1419.9414 147.0029)"
              className="st7"
            >
              <tspan x={4} y={0} className="st24 st1">
                {"여성사병"}
              </tspan>
              <tspan x={4} y={6} className="st24 st1">
                {"단기복무시"}
              </tspan>
              <tspan x={4} y={12} className="st24 st1">
                {"혜택제공"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J1">
            <title>키워드: 복잡한 봉급체계문제</title>
            <ellipse
              transform="matrix(8.362155e-02 -0.9965 0.9965 8.362155e-02 1104.8994 1534.2709)"
              className="JKT"
              cx={1386.7}
              cy={166.4}
              rx={24.2}
              ry={24.2}
            />
            <text
              style={{ fontSize: "9.3px" }}
              textAnchor="middle"
              transform="matrix(0.9999 -1.497861e-02 1.497861e-02 0.9999 1371.0117 160.9413)"
              className="st7"
            >
              <tspan x={15} y={-3} className="st24 st1">
                {"복잡한"}
              </tspan>
              <tspan x={15} y={9} className="st24 st1">
                {"봉급체계 "}
              </tspan>
              <tspan x={15} y={21} className="st24 st1">
                {"문제"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J2">
            <title>키워드: 남성 2년늦는 취업시기</title>
            <path
              className="LJS"
              d="M1443.8,186.1l2.4-2.4c2.8-2.8,2.8-7.1,0-9.9l-5.8-5.8c-2.8-2.8-7.1-2.8-9.9,0l-2.4,2.4l-2.4-2.4 c-2.8-2.8-7.1-2.8-9.9,0l-5.8,5.8c-2.8,2.8-2.8,7.1,0,9.9l2.4,2.4l-2.4,2.4c-2.8,2.8-2.8,7.1,0,9.9l5.8,5.8c2.8,2.8,7.1,2.8,9.9,0 l2.4-2.4l2.4,2.4c2.8,2.8,7.1,2.8,9.9,0l5.8-5.8c2.8-2.8,2.8-7.1,0-9.9L1443.8,186.1z"
            />
            <text
              style={{ fontSize: "8.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1413.3506 181.8223)"
              className="st7"
            >
              <tspan x={15} y={-3} className="st24 st1">
                {"남성"}
              </tspan>
              <tspan x={15} y={6} className="st24 st1">
                {"2년늦는"}
              </tspan>
              <tspan x={15} y={15} className="st24 st1">
                {"취업시기"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J2">
            <title>키워드: 간부체제 개편</title>
            <path
              className="JKT"
              d="M1387.6,190.9c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12s-12-5.4-12-12C1375.6,196.3,1381,190.9,1387.6,190.9z"
            />
            <text
              style={{ fontSize: "5.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1377.8379 200.3191)"
              className="st7"
            >
              <tspan x={10} y={1} className="st24 st1">
                {"간부체제 "}
              </tspan>
              <tspan x={10} y={7} className="st24 st1">
                {"개편"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J3">
            <title>키워드: 군가산점 제도부활</title>
            <path
              className="LJS"
              d="M1416.1,211.4l1.2-1.2c1.3-1.3,1.3-3.2,0-4.5l-2.6-2.6c-1.3-1.3-3.2-1.3-4.5,0l-1.2,1.2l-1.2-1.2 c-1.3-1.3-3.2-1.3-4.5,0l-2.6,2.6c-1.3,1.3-1.3,3.2,0,4.5l1.2,1.2l-1.2,1.2c-1.3,1.3-1.3,3.2,0,4.5l2.6,2.6c1.3,1.3,3.2,1.3,4.5,0 l1.2-1.2l1.2,1.2c1.3,1.3,3.2,1.3,4.5,0l2.6-2.6c1.3-1.3,1.3-3.2,0-4.5L1416.1,211.4z"
            />
            <text
              style={{ fontSize: "3.8px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1403.5088 209.0965)"
              className="st7"
            >
              <tspan x={6} y={0} className="st24 st1">
                {"군가산점"}
              </tspan>
              <tspan x={6} y={5} className="st24 st1">
                {"제도부활"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </>
  );
};
export default CP6K;
