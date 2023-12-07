/* eslint-disable no-dupe-else-if */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import "./ConceptualRecurrencePlot.scss";
import _ from "lodash";
import { SimilarityBlock, UtteranceObjectForDrawing } from "./interfaces";
import { makeEngagementGroups } from "./DataStructureMaker/makeEngagementGroups";
import { D3Drawer } from "./Drawers/D3Drawer";
import ConceptualMapModal, {
  ConceptualMapModalRef,
} from "./ConceptualMapModal/ConceptualMapModal";
import Controllers from "./Controllers/Controllers";
import store from "../../redux/store";
import { groupEGsMaker } from "./DataStructureMaker/GroupEGsMaker";
import { useLocation } from "react-router-dom";
import TranscriptViewer, {
  TranscriptViewerMethods,
} from "./TranscriptViewer/TranscriptViewer";
import { CombinedState } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { StandardSimilarityScoreState } from "../../redux/reducers/standardSimilarityScoreReducer";
import {
  DebateDataSet,
  EvaluationDataSet,
} from "../../interfaces/DebateDataInterface";
import {
  DataStructureManager,
  DataStructureSet,
} from "./DataStructureMaker/DataStructureManager";
import DataImporter, { DebateName, TermType } from "./DataImporter";
import { CHANGE_STANDARD_SIMILARITY_SCORE } from "../../redux/actionTypes";
import CombinedEGsMaker from "./DataStructureMaker/CombinedEGsMaker";
import { extractKeytermsFromEngagementGroup } from "./DataStructureMaker/extractTermsFromEngagementGroup";
import ParticipantTooltip from "../../components/ParticipantTooltip/ParticipantTooltip";
import SimilarityTooltip from "../../components/SimilarityTooltip/SimilarityTooltip";
import Header from "./../Header/Header";
import HeaderTwo from "./../Header/HeaderTwo";
import HeaderTwoKor from "./../Header/HeaderTwoKor";
import style from "./rootStyle.module.scss";
import Bubble from "./Bubble";
import BubbleKor from "./BubbleKor";
import BubbleEng from "./BubbleEng";
import BubbleEngg from "./BubbleEngg";
import CircleCom from "./BubbleKor/CircleCom";
import * as d3 from "d3";
import Outline from "./Outline";
import SubChart from "./SubChart";
import SubChartKor from "./SubChartKor";

// props 타입 정의
interface ConceptualRecurrencePlotProps {
  debateDataSet: DebateDataSet;
  dataStructureSet: DataStructureSet;
  termType: TermType;
}

function ConceptualRecurrencePlot() {
  //const { debateDataSet, dataStructureSet, termType } = props;
  const query = new URLSearchParams(useLocation().search);
  const debateNameOfQuery = query.get("debate_name") as DebateName;
  const termTypeOfQuery = query.get("term_type") as TermType;
  const [subChartWidth, setSubChartWidth] = useState(0);
  const [scaleValues, setScaleValues] = useState({ x: 1, y: -1 });
  const [transformValues, setTransformValues] = useState({ x: -235, y: 205 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //@ts-ignore
  const debateDataSet = useSelector((state) => state.debateData);
  //@ts-ignore
  const dataStructureSet = useSelector((state) => state.dataStructure);
  //@ts-ignore
  const termType = useSelector((state) => state.termType);

  const svgGRef = useRef<SVGGElement>(null);
  // const transcriptViewerRef = useRef<TranscriptViewer>(null);

  // const handleTitleClick = (index: number) => {
  //   // 옵셔널 체이닝을 사용하여 null 체크
  //   const targetRef = transcriptViewerRef.current?.utteranceRefs.current[index];
  //   if (targetRef) {
  //     targetRef.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };
  const transcriptViewerRef = useRef<TranscriptViewerMethods>(null);

  const handleTitleClick = (index: number) => {
    console.log("handleTitleClick called with index: ", index);
    console.log("transcriptViewerRef.current: ", transcriptViewerRef.current);
    transcriptViewerRef.current?.scrollToIndex(index);
  };

  useEffect(() => {
    // D3Drawer 인스턴스 생성 및 초기화
    if (debateDataSet && dataStructureSet && termType) {
      const drawer = new D3Drawer(debateDataSet, dataStructureSet, termType);
      const centerValues = drawer.centerConceptualRecurrentPlot();

      if (centerValues) {
        const { adjustedWidth, adjustedHeight } = centerValues;
        // console.log(
        //   "adjustedWidth, adjustedHeight",
        //   adjustedWidth,
        //   adjustedHeight
        // );
        // 이제 adjustedWidth와 adjustedHeight를 사용할 수 있습니다.
        // 예: transform 스타일 업데이트
        setTransformValues({
          x: adjustedWidth,
          y: adjustedHeight,
        });
      }
    }
  }, [debateDataSet, dataStructureSet, termType]);

  useEffect(() => {
    function handleResize() {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const { scaleX, scaleY } = calculateScale(currentWidth, currentHeight);

      setScaleValues({ x: scaleX, y: -scaleX }); // Y축은 항상 반전
      setWindowSize({
        width: currentWidth,
        height: currentHeight,
      });

      // svgG 요소의 transform 스타일 업데이트
      setTransformValues({
        x: calculateTransformX(currentWidth),
        y: calculateTransformY(currentHeight),
      });

      // SubChartKor 너비 업데이트
      // setSubChartWidth(currentWidth - 330);
      setSubChartWidth(currentWidth - 330);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 설정
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    //console.log("SubChart Width:", subChartWidth); // SubChartKor 너비 로깅
  }, [subChartWidth]);

  function calculateTransformX(width: number) {
    const baseWidth = 1440;
    const baseTransformX = -235;
    // 기준 해상도와 현재 해상도 간의 비율을 사용하여 X 좌표 조정
    const scaleX = width / baseWidth;
    return baseTransformX * scaleX;
  }

  function calculateTransformY(height: number) {
    const baseHeight = 900;
    const baseTransformY = 205;
    if (height === 900) {
      return 205; // 기준 해상도에서는 기존 값을 유지
    }
    // 기준 해상도와 현재 해상도 간의 비율을 사용하여 Y 좌표 조정
    const scaleY = height / baseHeight;
    return baseTransformY * scaleY;
  }

  function calculateScale(width: number, height: number) {
    const baseWidth = 1440;
    const baseHeight = 900;

    const scaleX = baseWidth / width;
    const scaleY = baseHeight / height;

    console.log("scaleX, scaleY", scaleX, scaleY);
    return { scaleX: scaleX, scaleY: -scaleY }; // Y축은 항상 반전
  }

  let transformStyle;
  // 해상도별 최종본 끼워맞추자.
  //console.log("screen", window.screen.width, window.screen.height);
  if (window.screen.width === 6720 && window.screen.height === 3780) {
    transformStyle = `translate(-235, 205) scale(0.21429, -0.21429) rotate(-45)`;
  } else if (window.screen.width === 6400 && window.screen.height === 3600) {
    transformStyle = `translate(-235, 205) scale(0.22500, -0.22500) rotate(-45)`;
  } else if (window.screen.width === 6016 && window.screen.height === 3384) {
    transformStyle = `translate(-235, 205) scale(0.23936, -0.23936) rotate(-45)`;
  } else if (window.screen.width === 5120 && window.screen.height === 2880) {
    transformStyle = `translate(-235, 205) scale(0.28125, -0.28125) rotate(-45)`;
  } else if (window.screen.width === 4608 && window.screen.height === 2592) {
    transformStyle = `translate(-235, 205) scale(0.31250, -0.31250) rotate(-45)`;
  } else if (window.screen.width === 4096 && window.screen.height === 2304) {
    transformStyle = `translate(-235, 205) scale(0.35156, -0.35156) rotate(-45)`;
  } else if (window.screen.width === 3840 && window.screen.height === 2160) {
    transformStyle = `translate(-185, 155) scale(0.318, -0.318) rotate(-45)`;
  } else if (window.screen.width === 3360 && window.screen.height === 2100) {
    transformStyle = `translate(-235, 205) scale(0.42857, -0.42857) rotate(-45)`;
  } else if (window.screen.width === 3360 && window.screen.height === 1890) {
    transformStyle = `translate(-235, 205) scale(0.42857, -0.42857) rotate(-45)`;
  } else if (window.screen.width === 3200 && window.screen.height === 1800) {
    transformStyle = `translate(-190, 160) scale(0.39, -0.39) rotate(-45)`;
  } else if (window.screen.width === 3008 && window.screen.height === 1692) {
    transformStyle = `translate(-235, 205) scale(0.47872, -0.47872) rotate(-45)`;
  } else if (window.screen.width === 2880 && window.screen.height === 1800) {
    transformStyle = `translate(-235, 205) scale(0.50000, -0.50000) rotate(-45)`;
  } else if (window.screen.width === 2560 && window.screen.height === 1600) {
    transformStyle = `translate(-235, 205) scale(0.56250, -0.56250) rotate(-45)`;
  } else if (window.screen.width === 2560 && window.screen.height === 1440) {
    transformStyle = `translate(-192, 162) scale(0.503, -0.503) rotate(-45)`;
  } else if (window.screen.width === 1920 && window.screen.height === 2160) {
    transformStyle = `translate(-235, 205) scale(0.75000, -0.75000) rotate(-45)`;
  } else if (window.screen.width === 1920 && window.screen.height === 1440) {
    transformStyle = `translate(-235, 205) scale(0.75000, -0.75000) rotate(-45)`;
  } else if (window.screen.width === 1920 && window.screen.height === 1200) {
    transformStyle = `translate(-235, 205) scale(0.75000, -0.75000) rotate(-45)`;
  } else if (window.screen.width === 1920 && window.screen.height === 1080) {
    transformStyle = `translate(-235, 205) scale(0.75000, -0.75000) rotate(-45)`;
  } else if (window.screen.width === 1680 && window.screen.height === 1050) {
    transformStyle = `translate(-230, 200) scale(0.83, -0.83) rotate(-45)`;
  } else if (window.screen.width === 1600 && window.screen.height === 1200) {
    transformStyle = `translate(-235, 205) scale(0.90000, -0.90000) rotate(-45)`;
  } else if (window.screen.width === 1600 && window.screen.height === 1024) {
    transformStyle = `translate(-235, 205) scale(0.90000, -0.90000) rotate(-45)`;
  } else if (window.screen.width === 1600 && window.screen.height === 900) {
    transformStyle = `translate(-235, 205) scale(0.90000, -0.90000) rotate(-45)`;
  } else if (window.screen.width === 1440 && window.screen.height === 1080) {
    transformStyle = `translate(-235, 205) scale(1.00000, -1.00000) rotate(-45)`;
  } else if (window.screen.width === 1440 && window.screen.height === 900) {
    transformStyle = `translate(-235, 205) scale(1.00000, -1.00000) rotate(-45)`;
  } // rlwns
  else if (window.screen.width === 1366 && window.screen.height === 768) {
    transformStyle = `translate(-235, 205) scale(1.05417, -1.05417) rotate(-45)`;
  } else if (window.screen.width === 1280 && window.screen.height === 800) {
    transformStyle = `translate(-235, 205) scale(1.12500, -1.12500) rotate(-45)`;
  } else if (window.screen.width === 1280 && window.screen.height === 720) {
    transformStyle = `translate(-235, 205) scale(1.12500, -1.12500) rotate(-45)`;
  } else if (window.screen.width === 1152 && window.screen.height === 720) {
    transformStyle = `translate(-235, 205) scale(1.25000, -1.25000) rotate(-45)`;
  } else if (window.screen.width === 1152 && window.screen.height === 648) {
    transformStyle = `translate(-235, 205) scale(1.25000, -1.25000) rotate(-45)`;
  } else if (window.screen.width === 1024 && window.screen.height === 768) {
    transformStyle = `translate(-235, 205) scale(1.40625, -1.40625) rotate(-45)`;
  } else if (window.screen.width === 1024 && window.screen.height === 640) {
    transformStyle = `translate(-255, 225) scale(1.6, -1.6) rotate(-45)`;
  } else if (window.screen.width === 1024 && window.screen.height === 576) {
    transformStyle = `translate(-255, 225) scale(1.6, -1.6) rotate(-45)`;
  } else if (window.screen.width === 960 && window.screen.height === 600) {
    transformStyle = `translate(-235, 205) scale(1.50000, -1.50000) rotate(-45)`;
  } else {
    transformStyle = `translate(${-235}, ${205}) scale(${
      1440 / scaleValues.x
    }, ${1440 / scaleValues.x}) rotate(-45)`;
  }

  const [isOpen, setIsOpen] = useState(true);
  const [debateDataset, setDebateDataset] = useState<DebateDataSet | null>(
    null
  );
  const [
    dataStructureManager,
    setDataStructureManager,
  ] = useState<DataStructureManager | null>(null);
  const [
    evaluationDataSet,
    setEvaluationDataSet,
  ] = useState<EvaluationDataSet | null>(null);
  const [
    combinedEGsMaker,
    setCombinedEGsMaker,
  ] = useState<CombinedEGsMaker | null>(null);
  const [d3Drawer, setD3Drawer] = useState<D3Drawer | null>(null);
  const conceptualMapModalRef = React.useRef<ConceptualMapModalRef>(null);
  const standardSimilarityScore = useSelector<
    CombinedState<{
      standardSimilarityScoreReducer: StandardSimilarityScoreState;
    }>,
    number
  >((state) => state.standardSimilarityScoreReducer.standardSimilarityScore);
  const dispatch = useDispatch();
  const d3Container = useRef<SVGSVGElement>(null);
  // variables for tooltip
  const [
    mouseoveredUtterance,
    setMouseoveredUtterance,
  ] = useState<UtteranceObjectForDrawing | null>(null);
  const [
    mouseoveredSimilarity,
    setMouseoveredSimilarity,
  ] = useState<SimilarityBlock | null>(null);
  const [transform, setTransform] = useState<d3.ZoomTransform | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = React.useState("index");

  useEffect(() => {
    // console.log("D3Drawer: ", d3Drawer); // 확인 로깅
    if (d3Drawer) {
      if (sortOrder === "disagreeScale") {
        d3Drawer.participantBlocksDrawer.sortByFindDis();
      } else if (sortOrder === "index") {
        d3Drawer.participantBlocksDrawer.sortByIndex();
      }

      d3Drawer.participantBlocksDrawer.update();
      d3Drawer.similarityBlocksDrawer.update();
    }
  }, [sortOrder, d3Drawer]);

  // Import Debate Data
  useEffect(() => {
    if (!dataStructureManager) {
      if (
        debateNameOfQuery === "sample" ||
        debateNameOfQuery === "기본소득" ||
        debateNameOfQuery === "정시확대" ||
        debateNameOfQuery === "모병제" ||
        debateNameOfQuery === "기본소득clipped" ||
        debateNameOfQuery === "정시확대clipped" ||
        debateNameOfQuery === "모병제clipped"
      ) {
        // const debateDataset = new DataImporter(
        //   debateNameOfQuery,
        //   termTypeOfQuery
        // ).debateDataSet as DebateDataSet;
        const dataImporter = new DataImporter(
          debateNameOfQuery,
          termTypeOfQuery
        );

        const dataStructureMaker = new DataStructureManager(
          debateNameOfQuery,
          dataImporter.debateDataSet!
        );

        //console.log("dataImporter", dataImporter);
        //console.log("dataStructureMaker", dataStructureMaker);

        const combinedEGsMaker = new CombinedEGsMaker(
          dataStructureMaker.dataStructureSet.similarityBlockManager.similarityBlockGroup,
          dataImporter.debateDataSet!.utteranceObjects
        );

        dispatch({
          type: CHANGE_STANDARD_SIMILARITY_SCORE,
          payload: {
            standardSimilarityScore:
              dataStructureMaker.dataStructureSet.maxSimilarityScore,
          },
        });

        setDebateDataset(dataImporter.debateDataSet);
        setDataStructureManager(dataStructureMaker);
        setCombinedEGsMaker(combinedEGsMaker);
        setEvaluationDataSet(dataImporter.evaluationDataSet);
      }
    }
  }, []);

  useEffect(() => {
    if (dataStructureManager && debateDataset) {
      const dataStructureSet = dataStructureManager.dataStructureSet;
      const datasetOfManualEGs = dataStructureManager.datasetOfManualEGs;
      const manualBigEGs = datasetOfManualEGs.manualBigEGs;
      const manualBigEGTitles = datasetOfManualEGs.manualBigEGTitles;
      const manualMiddleEGs = datasetOfManualEGs.manualMiddleEGs;
      const manualMiddleEGTitles = datasetOfManualEGs.manualMiddleEGTitles;
      const manualSmallEGs = datasetOfManualEGs.manualSmallEGs;
      const manualSmallEGTitles = datasetOfManualEGs.manualSmallEGTitles;
      const maxSimilarityScore = dataStructureSet.maxSimilarityScore;
      const topicGroups = combinedEGsMaker!.makeByNumOfSegments(4);
      const svg = d3.select(d3Container.current);
      // settings of d3Drawer
      const d3Drawer = new D3Drawer(
        debateDataset,
        dataStructureSet,
        termTypeOfQuery
      );

      d3Drawer.zoomListener = (transform) => {
        setTransform(transform);
      };
      d3Drawer.participantBlocksDrawer.mouseoverListener = (
        mouseEvent,
        utteranceObjectForDrawing
      ) => {
        setMouseoveredUtterance(utteranceObjectForDrawing);
        setTooltipVisible(true);
      };
      d3Drawer.participantBlocksDrawer.mouseoutLisener = () => {};
      d3Drawer.similarityBlocksDrawer.mouseoverListener = (
        mouseEvent,
        similarityBlock
      ) => {
        setMouseoveredSimilarity(similarityBlock);
        setTooltipVisible(true);
      };
      d3Drawer.similarityBlocksDrawer.mouseoutLisener = () => {};

      // Engagement Group Drawer's Settings
      d3Drawer.topicGroupsDrawer.topicGroups = topicGroups;
      d3Drawer.topicGroupsDrawer.onTitleClicked = (
        mouseEvent: MouseEvent,
        engagementGroup: SimilarityBlock[][],
        engagementGroupIndex: number
      ) => {
        const extractedKeytermObjects = extractKeytermsFromEngagementGroup(
          engagementGroup,
          debateDataset.conceptMatrixTransposed,
          debateDataset.keytermObjects,
          10
        );
        // openModal에 의해 그려지는가??
        conceptualMapModalRef.current?.openModal(
          `${_.map(extractedKeytermObjects, (o) => o.name)}`,
          engagementGroup
        );
      };
      d3Drawer.topicGroupsDrawer.visible = false;

      // Manual Small Engagement Group Drawer's Settings
      d3Drawer.manualSmallTGsDrawer.topicGroups = manualSmallEGs;
      d3Drawer.manualSmallTGsDrawer.topicGroupTitles = manualSmallEGTitles;
      d3Drawer.manualSmallTGsDrawer.onTitleClicked = (
        mouseEvent: MouseEvent,
        engagementGroup: SimilarityBlock[][],
        engagementGroupIndex: number
      ) => {
        conceptualMapModalRef.current?.openModal(
          `Manual Small Engagement Group ${engagementGroupIndex}`,
          engagementGroup
        );
      };
      d3Drawer.manualSmallTGsDrawer.visible = true;

      // Manual Middle Engagement Group Drawer's Settings
      d3Drawer.manualMiddleTGsDrawer.topicGroups = manualMiddleEGs;
      d3Drawer.manualMiddleTGsDrawer.topicGroupTitles = manualMiddleEGTitles;
      d3Drawer.manualMiddleTGsDrawer.onTitleClicked = (
        mouseEvent: MouseEvent,
        engagementGroup: SimilarityBlock[][],
        engagementGroupIndex: number
      ) => {
        conceptualMapModalRef.current?.openModal(
          `Manual Middle Engagement Group ${engagementGroupIndex}`,
          engagementGroup
        );
      };
      d3Drawer.manualMiddleTGsDrawer.visible = true;

      // Manual Big Engagement Group Drawer's Settings
      d3Drawer.manualBigTGsDrawer.topicGroups = manualBigEGs;
      d3Drawer.manualBigTGsDrawer.topicGroupTitles = manualBigEGTitles;
      d3Drawer.manualBigTGsDrawer.onTitleClicked = (
        mouseEvent: MouseEvent,
        engagementGroup: SimilarityBlock[][],
        engagementGroupIndex: number
      ) => {
        conceptualMapModalRef.current?.openModal(
          `Manual Big Engagement Group ${engagementGroupIndex}`,
          engagementGroup
        );
      };
      d3Drawer.manualBigTGsDrawer.visible = false;

      d3Drawer.manualPeopleTGsDrawer.onTitleClicked = (
        mouseEvent: MouseEvent,
        engagementGroup: SimilarityBlock[][],
        engagementGroupIndex: number
      ) => {
        conceptualMapModalRef.current?.openModal(
          `Manual People Engagement Group ${engagementGroupIndex}`,
          engagementGroup
        );
      };

      d3Drawer.centerConceptualRecurrentPlot();
      d3Drawer.participantBlocksDrawer.update();
      d3Drawer.insistenceMarkersDrawer.update();
      d3Drawer!.similarityBlocksDrawer.standardHighPointOfSimilarityScore = standardSimilarityScore;
      d3Drawer.similarityBlocksDrawer.update();
      d3Drawer.topicGroupsDrawer.update();
      d3Drawer.manualSmallTGsDrawer.update();
      d3Drawer.manualMiddleTGsDrawer.update();
      d3Drawer.manualBigTGsDrawer.update();
      d3Drawer.manualPeopleTGsDrawer.update();
      //console.log("d3Drawer", d3Drawer);

      setD3Drawer(d3Drawer);
    }
  }, [dataStructureManager, debateDataset, d3Container.current]);

  return (
    <div className="root-div" style={{ overflow: "hidden" }}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <HeaderTwo isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <HeaderTwoKor isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="vis-area">
        <div className="bubble" style={{ borderBottom: "1px solid black" }}>
          {/* <BubbleEng /> */}
          <BubbleEngg onTitleClick={handleTitleClick} />
        </div>
        <div
          className="concept-recurrence-plot"
          style={{ marginTop: "15px", overflow: "hidden" }}
        >
          <div
            style={{
              position: "fixed",
              overflow: "hidden",
              zIndex: "1000",
              fontWeight: "550",
              backgroundColor: "white",
              marginTop: "0px",
              fontSize: "14px",
              height: "25px",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            Co-Occurrenece Matrix for Exploration Argumentation
          </div>
          <svg
            className="fullSvg"
            ref={d3Container}
            style={{ overflow: "visible" }}
          >
            <g
              className="zoomable"
              transform={transform ? transform.toString() : undefined}
            >
              <g className="svgG" ref={svgGRef}>
                <g
                  // transform={`translate(${-265}, ${220}) scale(1.32 -1.32) rotate(-45)`}
                  transform={transformStyle}
                >
                  <SubChartKor
                    // width={windowSize.width - 330}
                    width={windowSize.width - 330}
                    height={windowSize.height}
                  />
                  <rect
                    style={{
                      fill: "#ffffff",
                    }}
                    width={subChartWidth}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <TranscriptViewer
        isOpen={isOpen}
        dataStructureMaker={dataStructureManager}
        ref={transcriptViewerRef}
      ></TranscriptViewer>
      <ConceptualMapModal
        ref={conceptualMapModalRef}
        participantDict={
          dataStructureManager
            ? dataStructureManager.dataStructureSet.participantDict
            : {}
        }
        utteranceObjects={debateDataset ? debateDataset.utteranceObjects : []}
        termList={debateDataset ? debateDataset.termList : []}
        termUtteranceBooleanMatrixTransposed={
          debateDataset
            ? debateDataset.termUtteranceBooleanMatrixTransposed
            : []
        }
        termType={termTypeOfQuery}
      ></ConceptualMapModal>
    </div>
  );
}
export default ConceptualRecurrencePlot;
