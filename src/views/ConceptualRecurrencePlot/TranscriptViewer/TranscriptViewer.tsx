/* eslint-disable no-unused-vars */
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { DataStructureManager } from "../DataStructureMaker/DataStructureManager";
import { UtteranceObjectForDrawing } from "../interfaces";
import styles from "./TranscriptViewer.module.scss";
import { getBackgroundColorOfSentenceSpan } from "./TranscriptViewerUtils";

interface ComponentProps {
  isOpen: boolean;
  dataStructureMaker: DataStructureManager | null;
}
function TranscriptViewer(props: ComponentProps) {
  if (!props.isOpen) return null;
  return (
    <div className={styles.transcriptViewer}>
      {props.dataStructureMaker ? (
        _.map(
          props.dataStructureMaker.dataStructureSet
            .utteranceObjectsForDrawingManager.utteranceObjectsForDrawing,
          (utteranceObject, index) => {
            return (
              <div style={{ marginBottom: "12px" }} key={`utterance-${index}`}>
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
// TODO we can use it to color text for sentiment
function getSentenceSpans(utteranceObject: UtteranceObjectForDrawing) {
  return _.map(utteranceObject.sentenceObjects, (sentenceObject) => {
    return (
      <span
        style={{
          // marginRight: 2,
          backgroundColor: getBackgroundColorOfSentenceSpan(
            sentenceObject,
            0.25
          ),
        }}
      >
        {sentenceObject.sentence + " "}
      </span>
    );
  });
}

export default TranscriptViewer;

function convertTimeToSeconds(time: string): number {
  const parts = time.split(":").map((part) => parseInt(part, 10));
  return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
}
