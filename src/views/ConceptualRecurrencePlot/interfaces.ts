import {
  KeytermObject,
  UtteranceObject,
} from "../../interfaces/DebateDataInterface";
export interface UtteranceObjectForDrawing extends UtteranceObject {
  mainKeytermsString: string;
  conceptVector: number[];
  beginningPointOfXY: number;
  name: string;
  width: number;
  insistence: boolean;
  keyword: KeytermObject[];
}

export interface SimilarityBlock {
  // find utterance similarity matrix
  beginningPointOfX: number;
  beginningPointOfY: number;
  width: number;
  height: number;
  similarity: number;
  weight: number;
  rowUtteranceName: string;
  colUtteranceName: string;
  // stroke: number;
  rowUtteranceIndex: number;
  columnUtteranceIndex: number;
  other: boolean;
  refutation: boolean;
  engagementPoint: boolean; // is engagement group base point?
  visible: boolean;
  mainKeytermObjects: KeytermObject[];
  //id: number;
}

export interface UtteranceIndexSentenceIndexTotalSentenceIndexDict {
  [utteranceIndex: number]: {
    [sentenceIndex: number]: number;
  };
}

export interface SubjectRecordInTesting {
  ageGroup: string;
  gender: string;
  major: string;
  participationCode: string;
  debateName: string;
  sentenceIndexesOfSegments: number[];
}
