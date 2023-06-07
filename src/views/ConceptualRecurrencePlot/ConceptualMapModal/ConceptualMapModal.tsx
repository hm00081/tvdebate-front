/* eslint-disable no-unused-vars */
import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./ConceptualMapModal.module.scss";
import { Modal } from "antd";
import { ConceptualMapDrawer } from "./ConceptualMapDrawer";
import { SimilarityBlock } from "../interfaces";
import { GraphDataStructureMaker } from "./GraphDataStructureMaker";
import * as math from "mathjs";
import _ from "lodash";
import ConceptualMapControllers from "./ConceptualMapControllers/ConceptualMapControllers";
import { ParticipantDict } from "../../../common_functions/makeParticipants";
import { UtteranceObject } from "../../../interfaces/DebateDataInterface";
import { TermType } from "../DataImporter";
import { NodeDatum } from "./GraphDataStructureMaker";

const modalContentWidth: number = 800;
const modalContentHeight: number = 600;
const conceptualMapDivClassName: string = "conceptual-map";

export interface ConceptualMapModalRef {
  openModal: (modalTitle: string, engagementGroup: SimilarityBlock[][]) => void;
}
interface ComponentProps {
  participantDict: ParticipantDict;
  utteranceObjects: UtteranceObject[];
  termUtteranceBooleanMatrixTransposed: number[][];
  termList: string[];
  termType: TermType;
}

function ConceptualMapModal(
  props: ComponentProps,
  ref: Ref<ConceptualMapModalRef>
) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [maxCooccurrence, setMaxCooccurrence] = useState<number>(0);
  const [
    standardTermCountToGenerateNode,
    setStandardTermCountToGenerateNode,
  ] = useState<number>(0);
  const [maxOfLinksPerNode, setMaxOfLinksPerNode] = useState<number>(3);
  const [showNodeNotHavingLinks, setShowNodeNotHavingLinks] = useState<boolean>(
    true
  );
  const [conceptualMapDrawer, setConceptualMapDrawer] = useState<
    ConceptualMapDrawer
  >();
  const [graphDataStructureMaker, setGraphDataStructureMaker] = useState<
    GraphDataStructureMaker
  >();

  useEffect(() => {
    const modalPadding = 24;
    const conrollerWidth = 200;
    setConceptualMapDrawer(
      new ConceptualMapDrawer(
        `.${conceptualMapDivClassName}`,
        modalContentWidth - modalPadding * 2 - conrollerWidth,
        modalContentHeight - modalPadding * 2,
        props.participantDict
      )
    );
  }, []);

  useEffect(() => {
    // 그려지는 상황인가??
    if (conceptualMapDrawer) {
      conceptualMapDrawer.setParticipantDict(props.participantDict);
    }
  }, [props.participantDict]);

  useImperativeHandle(ref, () => ({
    openModal: (modalTitle: string, engagementGroup: SimilarityBlock[][]) => {
      setModalVisible(true);
      setModalTitle(modalTitle);
      //console.log("engagementGroup", engagementGroup);
      conceptualMapDrawer!.removeDrawing();

      const graphDataStructureMaker = new GraphDataStructureMaker(
        engagementGroup,
        props.participantDict,
        props.utteranceObjects,
        props.termType
      );

      const cooccurrenceMatrixOfEG = graphDataStructureMaker.getCooccurrenceMatrixOfEG();
      const ceiledMedian = Math.ceil(math.mean(cooccurrenceMatrixOfEG));

      const nodeLinkDict = graphDataStructureMaker.generateNodesAndLinks(
        ceiledMedian,
        maxOfLinksPerNode,
        showNodeNotHavingLinks
      );
      const createNodeDictionary = (
        nodes: NodeDatum[]
      ): { [key: string]: number } => {
        const result: { [key: string]: number } = {};

        nodes.forEach((node) => {
          result[node.id] = node.count;
        });

        return result;
      };

      const sortedNodeDictionary = (nodeDictionary: {
        [key: string]: number;
      }): { term: string; count: number }[] => {
        const nodeArray = Object.entries(nodeDictionary).map(
          ([term, count]) => {
            return { term, count };
          }
        );

        // 내림차순 정렬
        const sortedNodeArray = nodeArray.sort((a, b) => b.count - a.count);

        return sortedNodeArray;
      };

      const nodeDictionary = createNodeDictionary(nodeLinkDict.nodes);
      const sortedNodeArray = sortedNodeDictionary(nodeDictionary);

      const termFreqKeywrods = sortedNodeArray.slice(0, 15);
      const emptyArr: string[] = [];
      termFreqKeywrods.forEach((eg, i) => {
        emptyArr.push(termFreqKeywrods[i].term);
      });
      console.log(emptyArr);
      // console.log("nodeLinkDict", nodeLinkDict.nodes);

      conceptualMapDrawer!.setGraphData(nodeLinkDict);
      conceptualMapDrawer!.updateGraph();

      const maxCooccurrence = _.max(
        _.map(
          cooccurrenceMatrixOfEG,
          (cooccurrenceVector) => _.orderBy(cooccurrenceVector, [], ["desc"])[1] // TODO [0] or [1]
        )
      ) as number;

      setStandardTermCountToGenerateNode(ceiledMedian);
      setMaxCooccurrence(maxCooccurrence);
      setGraphDataStructureMaker(graphDataStructureMaker);
    },
  }));

  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      width={modalContentWidth}
      bodyStyle={{ height: modalContentHeight }}
      onCancel={() => {
        // this.setState({ modalVisible: false });
        setModalVisible(false);
      }}
      maskClosable={false}
    >
      <div className={styles.conceptualMapModalContent} ref={modalRef}>
        <ConceptualMapControllers
          conceptualMapDrawer={conceptualMapDrawer}
          graphDataStructureMaker={graphDataStructureMaker}
          showNodeNotHavingLinks={showNodeNotHavingLinks}
          maxCooccurrence={maxCooccurrence}
          maxOfLinksPerNode={maxOfLinksPerNode}
          standardTermCount={standardTermCountToGenerateNode}
          standardTermCountSliderListener={(changedValue) => {
            setStandardTermCountToGenerateNode(changedValue);
          }}
          maxOfLinksPerNodeSliderListener={(changedValue) => {
            setMaxOfLinksPerNode(changedValue);
          }}
          showNodeNotHavingLinksCheckboxListener={(checked: boolean) => {
            setShowNodeNotHavingLinks(checked);
          }}
        ></ConceptualMapControllers>
        <div className={conceptualMapDivClassName}></div>
      </div>
    </Modal>
  );
}

export default forwardRef(ConceptualMapModal) || ConceptualMapModal;
