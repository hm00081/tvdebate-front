/* eslint-disable no-unused-vars */
import { CHANGE_STANDARD_SIMILARITY_SCORE } from "./actionTypes";
import { Action, ActionCreator } from "redux";

export interface ChangeStandardSimilarityScoreAction extends Action<string> {
  type: string;
  payload: {
    standardSimilarityScore: number;
  };
}

export const changeStandardSimilarityScoreActionCreator: ActionCreator<ChangeStandardSimilarityScoreAction> = (
  standardSimilarityScore
) => {
  // console.log("action", standardSimilarityScore);
  return {
    type: CHANGE_STANDARD_SIMILARITY_SCORE,
    payload: {
      standardSimilarityScore,
    },
  };
};
