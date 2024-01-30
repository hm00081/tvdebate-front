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
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14px;}\n\t.st14{font-size:8px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP4">
          <g className="T4">
            <g className="P4" transform="translate(-111,13) scale(1.094)">
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l-38.3-78.6c12.5-6.1,24.5-8.9,38.3-8.9V148.9z"
                ></path>
                <title>
                  {`scriptIndex: 79\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[79]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[79]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l-65-58.5c7.7-8.5,16.3-15,26.7-20.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 78\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[78]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[78]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9l-67-56.2c0.7-0.9,1.3-1.5,2-2.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 77\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[77]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[77]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M891.9,148.9l-86.6-12.2c2.4-16.8,8.7-31,19.6-44L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 76\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[76]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[76]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l-87.2-6.1c0.1-2.1,0.3-4,0.6-6.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 75\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[75]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[75]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9L814,188.6c-7.5-14.8-10.5-29.2-9.3-45.8L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 74\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[74]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[74]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9L823,202.7c-3.9-4.9-6.2-8.5-9-14.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 73\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[73]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[73]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9L829,209.6c-2.1-2.2-4.1-4.5-6-6.9L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 72\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[72]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[72]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l-57.4,66c-2.1-1.8-3.6-3.2-5.5-5.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 71\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[71]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[71]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9L845.5,223c-4.1-2.6-7.4-5-11-8.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 70\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[70]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[70]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l-42.4,76.5c-1.3-0.7-2.7-1.5-3.9-2.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 69\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[69]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[69]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l-39.7,77.9c-1-0.5-1.7-0.9-2.7-1.4L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 68\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[68]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[68]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9l-31.3,81.6c-2.5-1-6-2.5-8.4-3.7L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 67\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[67]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[67]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l-27,83.2c-1.7-0.5-2.7-0.9-4.3-1.5L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 66\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[66]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[66]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l-22.6,84.5c-1.7-0.5-2.7-0.8-4.4-1.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 65\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[65]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[65]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l-19.7,85.2c-1.2-0.3-1.8-0.4-3-0.7L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 64\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[64]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[64]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l-9.1,87c-3.4-0.4-7.2-1-10.5-1.8L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 63\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[63]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[63]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l10.7,86.8c-7,0.9-12.8,0.9-19.8,0.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 62\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[62]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[62]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l31.3,81.6c-7,2.7-13.3,4.2-20.7,5.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 61\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[61]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[61]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l46.3,74.2c-5,3.1-9.5,5.4-15,7.5L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 60\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[60]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[60]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l57.4,66c-3.8,3.3-6.7,5.5-11,8.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 59\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[59]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[59]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l74.2,46.3c-4.7,7.5-10.1,13.8-16.8,19.7L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 58\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[58]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[58]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9L976,173c-2.4,8.4-5.3,14.9-9.9,22.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 57\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[57]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[57]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st20"
                  d="M891.9,148.9l84.9-21.2c3.9,15.7,3.7,29.8-0.8,45.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 56\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[56]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[56]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l83.2-27c0.7,2,1.2,3.8,1.7,5.9L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 55\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[55]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[55]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M891.9,148.9l80.5-34.2c1,2.3,1.9,4.8,2.7,7.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 54\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[54]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[54]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l78.6-38.3c0.7,1.3,1.3,2.8,1.9,4.2L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 53\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[53]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[53]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st16"
                  d="M891.9,148.9l76.5-42.4c0.8,1.4,1.4,2.6,2.1,4.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 52\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[52]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[52]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M891.9,148.9l74.2-46.3c1,1.6,1.4,2.3,2.3,3.9L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 51\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[51]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[51]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9L960.8,95c1.8,2.3,3.7,5,5.3,7.5L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 50\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[50]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[50]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l64-59.6c1.8,1.9,3.3,3.7,5,5.8L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 49\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[49]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[49]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M891.9,148.9L952.6,86c1.1,1,2.2,2.2,3.2,3.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 48\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[48]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[48]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l56.2-67c1.6,1.3,3.1,2.7,4.5,4.1L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 47\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[47]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[47]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st19"
                  d="M891.9,148.9l53.8-68.9c0.9,0.7,1.5,1.2,2.4,1.9L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 46\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[46]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[46]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9l46.3-74.2c2.7,1.7,5,3.3,7.5,5.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 45\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[45]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[45]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st17"
                  d="M891.9,148.9l42.4-76.5c1.7,0.9,2.3,1.3,3.9,2.3L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 44\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[44]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[44]?.utterance}`}
                </title>
              </g>
              <g>
                <path
                  className="st21"
                  d="M891.9,148.9V61.4c15.6,0,28.7,3.4,42.4,11L891.9,148.9z"
                ></path>
                <title>
                  {`scriptIndex: 43\nName: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[43]?.name}\nUtterance: ${dataStructureSet?.utteranceObjectsForDrawingManager?.utteranceObjectsForDrawing[43]?.utterance}`}
                </title>
              </g>
              <ellipse
                className="st24"
                cx="892"
                cy="148.7"
                rx="81.1"
                ry="81.1"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 156.1309 674.2637)"
              ></ellipse>
            </g>
            <title>키워드: 모병제, 일자리 문제 해결책?</title>
            <text
              transform="matrix(1 0 0 1 830 449.5)"
              className="st0 st1 st13"
              onClick={() => handleClick(55)}
              style={{ fontSize: "11.69px" }}
            >
              {"모병제, 일자리"}
            </text>
            <text
              transform="matrix(1 0 0 1 835 466)"
              className="st0 st1 st13"
              onClick={() => handleClick(55)}
              style={{ fontSize: "11.69px" }}
            >
              {"문제 해결책?"}
            </text>
            <line
              x1={864}
              y1={275}
              x2={864}
              y2={445} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
            <line
              x1={864}
              y1={470}
              x2={864}
              y2={499} // 점선의 길이 조정
              stroke="gray"
              strokeDasharray="5, 5"
              strokeWidth="2" // 두께 설정
              strokeOpacity="0.6" // 투명도 설정
            />
          </g>
          <g className="T4-1">
            <circle className="st15" cx={822.8} cy={177.9} r={45.8} />
            <title>키워드: 일자리 제공 가능한가?</title>
            <text transform="matrix(1 0 0 1 812.2222 118.3016)">
              <tspan
                x={-7}
                y={1}
                className="st0 st1 st14"
                style={{ fontSize: "8px" }}
              >
                {"일자리 제공"}
              </tspan>
              <tspan
                x={-2}
                y={10}
                className="st0 st1 st14"
                style={{ fontSize: "8px" }}
              >
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
