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
}

const TranscriptViewer = forwardRef<TranscriptViewerMethods, ComponentProps>(
  (props, ref) => {
    const { isOpen, dataStructureMaker } = props;
    const utteranceRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      if (dataStructureMaker) {
        utteranceRefs.current = new Array(
          dataStructureMaker.dataStructureSet.utteranceObjectsForDrawingManager.utteranceObjectsForDrawing.length
        ).fill(null);
      }
    }, [dataStructureMaker]);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number) => {
        //console.log(`scrollToIndex called with index: ${index}`);
        const targetElement = utteranceRefs.current[index];
        // console.log("targetElement", targetElement);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
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
              return (
                <div
                  ref={(el) => {
                    utteranceRefs.current[index] = el;
                    //console.log(`Ref for index ${index}: `, el); // 콘솔 로그 추가
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
                    {utteranceObject.sentenceObjects[0].time!}
                  </div>
                  <div>{utteranceObject.utterance}</div>
                  {/* {getSentenceSpans(utteranceObject)} */}
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
