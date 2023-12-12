/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import _ from "lodash";
import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { DataStructureManager } from "../DataStructureMaker/DataStructureManager";
import { UtteranceObjectForDrawing } from "../interfaces";
import styles from "./TranscriptViewer.module.scss";
import { getBackgroundColorOfSentenceSpan } from "./TranscriptViewerUtils";

interface ComponentProps {
  isOpen: boolean;
  dataStructureMaker: DataStructureManager | null;
}

export interface TranscriptViewerMethods {
  scrollToIndex: (index: number) => void;
  highlightKeywords: (
    rowKeywords: string[],
    colKeywords: string[],
    rowIndex: number,
    colIndex: number
  ) => void;
}

const TranscriptViewer = forwardRef<TranscriptViewerMethods, ComponentProps>(
  (props, ref) => {
    const { isOpen, dataStructureMaker } = props;
    const utteranceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [highlightedKeywords, setHighlightedKeywords] = useState<string[]>(
      []
    );
    const [rowTopTerms, setRowTopTerms] = useState<string[]>([]);
    const [colTopTerms, setColTopTerms] = useState<string[]>([]);
    const [rowTopThirtyTerms, setRowTopThirtyTerms] = useState<string[]>([]);
    const [colTopThirtyTerms, setColTopThirtyTerms] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<{
      row: number | null;
      col: number | null;
    }>({ row: null, col: null });
    //console.log("setRowTopTerms", setRowTopTerms);
    //console.log("setColTopTerms", setColTopTerms);
    // 하이라이팅 로직
    const highlightText = (text: string, keywords: string[]) => {
      let highlightedText = text;
      keywords.forEach((keyword) => {
        const regex = new RegExp(`(${keyword})`, "gi");
        highlightedText = highlightedText.replace(
          regex,
          "<span class='highlight' style='border: 1.1px solid red; color: black;'>$1</span>"
          //"<span class='highlight' style='border: 2px solid #400000; padding: 2px;'>$1</span>"
        );
      });
      return highlightedText;
    };

    useEffect(() => {
      if (dataStructureMaker) {
        utteranceRefs.current = new Array(
          dataStructureMaker.dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing.length
        ).fill(null);
      }
    }, [dataStructureMaker]);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number) => {
        const targetElement = utteranceRefs.current[index];
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      },
      highlightKeywords: (
        rowKeywords: string[],
        colKeywords: string[],
        rowIndex: number,
        colIndex: number
      ) => {
        //console.log("index", colIndex, rowIndex);
        //console.log("colKeywords", colKeywords);
        setActiveIndex({ row: rowIndex, col: colIndex });
        setRowTopTerms(rowKeywords.slice(0, 3));
        setColTopTerms(colKeywords.slice(0, 3));
        setRowTopThirtyTerms(rowKeywords);
        setColTopThirtyTerms(colKeywords);
      },
    }));
    if (!props.isOpen) return null;
    return (
      <div className={styles.transcriptViewer}>
        {props.dataStructureMaker ? (
          _.map(
            props.dataStructureMaker.dataStructureSet
              .utteranceObjectsForDrawingManager.utteranceObjectsForDrawing,
            (utteranceObject, index) => {
              // 현재 activeIndex에 따라 상위 3개 키워드 결정
              const rowKeywords = index === activeIndex.row ? rowTopTerms : [];
              const colKeywords = index === activeIndex.col ? colTopTerms : [];
              const combinedKeywords = [...rowKeywords, ...colKeywords];
              const currentKeywords =
                index === activeIndex.row
                  ? rowTopThirtyTerms
                  : index === activeIndex.col
                  ? colTopThirtyTerms
                  : [];
              // 해당 utterance에 하이라이트 적용
              const highlightedUtterance = highlightText(
                utteranceObject.utterance,
                currentKeywords
              );
              return (
                <div
                  ref={(el) => {
                    utteranceRefs.current[index] = el;
                  }}
                  style={{ marginBottom: "12px" }}
                  key={`utterance-${index}`}
                >
                  <div
                    style={{
                      color: props.dataStructureMaker!.dataStructureSet
                        .participantDict[utteranceObject.name].color,
                    }}
                  >
                    [ {utteranceObject.name} ] / {index} /
                    {utteranceObject.sentenceObjects[0].time!} /
                    {(index === activeIndex.row ||
                      index === activeIndex.col) && (
                      <span style={{ color: "#400000", fontWeight: "bold" }}>
                        {" "}
                        {combinedKeywords.join(", ")}{" "}
                      </span>
                    )}
                  </div>
                  {/* highlightText 함수를 사용하여 하이라이트된 텍스트 렌더링 */}
                  <div
                    dangerouslySetInnerHTML={{ __html: highlightedUtterance }}
                  />
                </div>
              );
            }
          )
        ) : (
          <div />
        )}
      </div>
    );
  }
);

export default TranscriptViewer;

// function convertTimeToSeconds(time: string): number {
//   const parts = time.split(":").map((part) => parseInt(part, 10));
//   return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
// }

// function getSentenceSpans(utteranceObject: UtteranceObjectForDrawing) {
//   return _.map(utteranceObject.sentenceObjects, (sentenceObject) => {
//     return (
//       <span
//         style={{
//           // marginRight: 2,
//           backgroundColor: getBackgroundColorOfSentenceSpan(
//             sentenceObject,
//             0.25
//           ),
//         }}
//       >
//         {sentenceObject.sentence + " "}
//       </span>
//     );
//   });
// }
