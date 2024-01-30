/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./SubChart.scss";
import { DataStructureSet } from "./DataStructureMaker/DataStructureManager";
import { SentenceObject } from "../../interfaces/DebateDataInterface";
import { SimilarityBlock } from "./interfaces";
import { DebateDataSet } from "../../interfaces/DebateDataInterface";
import { ParticipantBlocksDrawer } from "./Drawers/ParticipantBlocksDrawer";
import { SimilarityBlocksDrawer } from "./Drawers/SimilarityBlocksDrawer";
import { D3Drawer } from "./Drawers/D3Drawer";
import { TranscriptViewerMethods } from "./TranscriptViewer/TranscriptViewer";

interface SubChartKorProps extends React.SVGProps<SVGSVGElement> {
  onBarClick: (index: number) => void;
  dataStructureSet: DataStructureSet;
  transcriptViewerRef: React.RefObject<TranscriptViewerMethods>;
  d3Drawer: D3Drawer;
}

//@ts-ignore
const SubChartKor = ({
  onBarClick,
  dataStructureSet,
  transcriptViewerRef,
  d3Drawer,
  ...props
}: SubChartKorProps) => {
  // 각 논쟁구간 지금 필터링 잘해서 보여지고 잇음. useEffect 내 콘솔 자체는 잘 나오고 있음
  useEffect(() => {
    if (dataStructureSet && dataStructureSet.similarityBlockManager) {
      const similarityBlocks =
        dataStructureSet.similarityBlockManager.similarityBlocks;

      // 특정 argumentScore 이상인 SimilarityBlock 식별
      const highScoreBlocks = similarityBlocks.filter((block) => {
        const argumentScore =
          (block.similarity * block.weight) /
          Math.sqrt(
            Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
          );
        return argumentScore >= 0.25; // 0.25 이상인 SimilarityBlock 필터링
      });

      // 필터링된 SimilarityBlocks 콘솔에 출력
      // console.log("High Score SimilarityBlocks:", highScoreBlocks);
    }
  }, [dataStructureSet]);

  const handleBarClickOne = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 0 &&
            block.rowUtteranceIndex <= 18 &&
            block.columnUtteranceIndex >= 0 &&
            block.columnUtteranceIndex <= 18;
          if (
            block.columnUtteranceIndex === 12 &&
            block.rowUtteranceIndex === 13
          ) {
            return true;
          }
          break;
        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 0 &&
            block.rowUtteranceIndex <= 18 &&
            block.columnUtteranceIndex >= 0 &&
            block.columnUtteranceIndex <= 18;
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 0 &&
            block.rowUtteranceIndex <= 18 &&
            block.columnUtteranceIndex >= 0 &&
            block.columnUtteranceIndex <= 18;
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 0 &&
            block.rowUtteranceIndex <= 18 &&
            block.columnUtteranceIndex >= 0 &&
            block.columnUtteranceIndex <= 18;
          break;
      }

      return isHighScore && condition;
    });
    // console.log(
    //   `Filtered SimilarityBlocks for barIndex ${barIndex}:`,
    //   filteredBlocks
    // );

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickTwo = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 15 &&
            block.rowUtteranceIndex <= 37 &&
            block.columnUtteranceIndex >= 15 &&
            block.columnUtteranceIndex <= 37;
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 15 &&
            block.rowUtteranceIndex <= 37 &&
            block.columnUtteranceIndex >= 15 &&
            block.columnUtteranceIndex <= 37;
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 15 &&
            block.rowUtteranceIndex <= 37 &&
            block.columnUtteranceIndex >= 15 &&
            block.columnUtteranceIndex <= 37;
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 15 &&
            block.rowUtteranceIndex <= 37 &&
            block.columnUtteranceIndex >= 15 &&
            block.columnUtteranceIndex <= 37;
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickThree = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 24 &&
            block.rowUtteranceIndex <= 58 &&
            block.columnUtteranceIndex >= 24 &&
            block.columnUtteranceIndex <= 58 &&
            !(
              (block.columnUtteranceIndex === 28 &&
                block.rowUtteranceIndex === 56) ||
              (block.columnUtteranceIndex === 28 &&
                block.rowUtteranceIndex === 58)
            );
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 24 &&
            block.rowUtteranceIndex <= 58 &&
            block.columnUtteranceIndex >= 24 &&
            block.columnUtteranceIndex <= 58;
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 24 &&
            block.rowUtteranceIndex <= 58 &&
            block.columnUtteranceIndex >= 24 &&
            block.columnUtteranceIndex <= 58;
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 24 &&
            block.rowUtteranceIndex <= 58 &&
            block.columnUtteranceIndex >= 24 &&
            block.columnUtteranceIndex <= 58;
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickFour = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 43 &&
            block.rowUtteranceIndex <= 79 &&
            block.columnUtteranceIndex >= 43 &&
            block.columnUtteranceIndex <= 79;
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 43 &&
            block.rowUtteranceIndex <= 79 &&
            block.columnUtteranceIndex >= 43 &&
            block.columnUtteranceIndex <= 79 &&
            !(
              (block.columnUtteranceIndex === 43 &&
                block.rowUtteranceIndex === 48) ||
              (block.columnUtteranceIndex === 43 &&
                block.rowUtteranceIndex === 51) ||
              (block.columnUtteranceIndex === 43 &&
                block.rowUtteranceIndex === 76)
            );
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 43 &&
            block.rowUtteranceIndex <= 79 &&
            block.columnUtteranceIndex >= 43 &&
            block.columnUtteranceIndex <= 79;
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 43 &&
            block.rowUtteranceIndex <= 79 &&
            block.columnUtteranceIndex >= 43 &&
            block.columnUtteranceIndex <= 79;
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickFive = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 73 &&
            block.rowUtteranceIndex <= 106 &&
            block.columnUtteranceIndex >= 73 &&
            block.columnUtteranceIndex <= 106;
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 73 &&
            block.rowUtteranceIndex <= 106 &&
            block.columnUtteranceIndex >= 73 &&
            block.columnUtteranceIndex <= 106;
          if (
            (block.columnUtteranceIndex === 80 &&
              block.rowUtteranceIndex === 85) ||
            (block.columnUtteranceIndex === 84 &&
              block.rowUtteranceIndex === 85)
          ) {
            return true;
          }
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 73 &&
            block.rowUtteranceIndex <= 106 &&
            block.columnUtteranceIndex >= 73 &&
            block.columnUtteranceIndex <= 106;
          if (
            block.columnUtteranceIndex === 94 &&
            block.rowUtteranceIndex === 104
          ) {
            return true;
          }
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 73 &&
            block.rowUtteranceIndex <= 106 &&
            block.columnUtteranceIndex >= 73 &&
            block.columnUtteranceIndex <= 106;
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickSix = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 94 &&
            block.rowUtteranceIndex <= 126 &&
            block.columnUtteranceIndex >= 94 &&
            block.columnUtteranceIndex <= 126;
          if (
            (block.columnUtteranceIndex === 109 &&
              block.rowUtteranceIndex === 111) ||
            (block.columnUtteranceIndex === 111 &&
              block.rowUtteranceIndex === 115)
          ) {
            return true;
          }
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 94 &&
            block.rowUtteranceIndex <= 126 &&
            block.columnUtteranceIndex >= 94 &&
            block.columnUtteranceIndex <= 126;
          if (
            (block.columnUtteranceIndex === 121 &&
              block.rowUtteranceIndex === 126) ||
            (block.columnUtteranceIndex === 123 &&
              block.rowUtteranceIndex === 126)
          ) {
            return true;
          }
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 94 &&
            block.rowUtteranceIndex <= 126 &&
            block.columnUtteranceIndex >= 94 &&
            block.columnUtteranceIndex <= 126;
          break;
        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 94 &&
            block.rowUtteranceIndex <= 126 &&
            block.columnUtteranceIndex >= 94 &&
            block.columnUtteranceIndex <= 126;
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  const handleBarClickSeven = (barIndex: number) => {
    // dataStructureSet에서 SimilarityBlocks 정보 가져오기
    const similarityBlocks =
      dataStructureSet.similarityBlockManager.similarityBlocks;
    d3Drawer.similarityBlocksDrawer.clearSelectedBlocks();

    // 특정 조건에 따른 필터링
    const filteredBlocks = similarityBlocks.filter((block) => {
      const argumentScore =
        (block.similarity * block.weight) /
        Math.sqrt(
          Math.abs(block.columnUtteranceIndex - block.rowUtteranceIndex)
        );
      const isHighScore = argumentScore >= 0.25;

      // 특정 조건에 따른 필터링 로직
      let condition = false;
      switch (barIndex) {
        case 0: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 146 &&
            block.rowUtteranceIndex <= 183 &&
            block.columnUtteranceIndex >= 146 &&
            block.columnUtteranceIndex <= 183;
          if (
            block.columnUtteranceIndex === 176 &&
            block.rowUtteranceIndex === 178
          ) {
            return true;
          }
          break;

        case 1: // 이준석, 장경태
          condition =
            ((block.colUtteranceName === "이준석" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "이준석")) &&
            block.rowUtteranceIndex >= 146 &&
            block.rowUtteranceIndex <= 183 &&
            block.columnUtteranceIndex >= 146 &&
            block.columnUtteranceIndex <= 183;
          break;
        case 2: // 박휘락, 장경태
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "장경태") ||
              (block.colUtteranceName === "장경태" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 146 &&
            block.rowUtteranceIndex <= 183 &&
            block.columnUtteranceIndex >= 146 &&
            block.columnUtteranceIndex <= 183;
          if (
            (block.columnUtteranceIndex === 172 &&
              block.rowUtteranceIndex === 173) ||
            (block.columnUtteranceIndex === 178 &&
              block.rowUtteranceIndex === 180)
          ) {
            return true;
          }
          break;

        case 3: // 박휘락, 김종대
          condition =
            ((block.colUtteranceName === "박휘락" &&
              block.rowUtteranceName === "김종대") ||
              (block.colUtteranceName === "김종대" &&
                block.rowUtteranceName === "박휘락")) &&
            block.rowUtteranceIndex >= 146 &&
            block.rowUtteranceIndex <= 183 &&
            block.columnUtteranceIndex >= 146 &&
            block.columnUtteranceIndex <= 183;
          if (
            block.columnUtteranceIndex === 161 &&
            block.rowUtteranceIndex === 163
          ) {
            return true;
          }
          break;
      }
      return isHighScore && condition;
    });

    const indexPairs = filteredBlocks.map((block) => [
      block.rowUtteranceIndex,
      block.columnUtteranceIndex,
    ]);
    //@ts-ignore
    d3Drawer.similarityBlocksDrawer.setMultipleBlockIndices(indexPairs);
  };

  return (
    <svg
      id="\uB808\uC774\uC5B4_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1594 223"
      // style={{
      //   enableBackground: "new 0 0 1594 223",
      // }}
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <g>
          {/* <rect x={9.6} y={133.9} className="stt3" width={6.9} height={6.9} />
          <rect x={55} y={133.9} className="stt4" width={6.9} height={6.9} /> */}
          <text
            transform="matrix(1 0 0 1 13.5164 139.6523)"
            xmlSpace="preserve"
          >
            <tspan x={0} y={66} className="stt0 stt32">
              {"박휘락 & 김종대"}
            </tspan>
          </text>
        </g>
        <g>
          {/* <rect x={9.6} y={155.6} className="stt3" width={6.9} height={6.9} />
          <rect x={55} y={155.8} className="stt6" width={6.9} height={6.9} /> */}
          <text
            transform="matrix(1 0 0 1 13.5164 139.6523)"
            xmlSpace="preserve"
          >
            <tspan x={0} y={44} className="stt0 stt32">
              {"박휘락 & 장경태"}
            </tspan>
          </text>
        </g>
        <g>
          {/* <rect x={9.6} y={177.5} className="stt5" width={6.9} height={6.9} />
          <rect x={55} y={177.5} className="stt4" width={6.9} height={6.9} /> */}
          <text
            transform="matrix(1 0 0 1 13.5164 139.6523)"
            xmlSpace="preserve"
          >
            <tspan x={0} y={22} className="stt0 stt32">
              {"이준석 & 김종대"}
            </tspan>
          </text>
        </g>
        <g>
          {/* <rect x={9.6} y={199.3} className="stt5" width={6.9} height={6.9} />
          <rect x={55} y={199.5} className="stt6" width={6.9} height={6.9} /> */}
          <text
            transform="matrix(1 0 0 1 13.5164 139.6523)"
            xmlSpace="preserve"
          >
            <tspan x={0} y={0} className="stt0 stt32">
              {"이준석 & 장경태"}
            </tspan>
          </text>
        </g>
      </g>
      <rect x={18.6} y={10.6} className="stt2" width={1575} height={102} />
      <g className="plot">
        <rect x={33.3} y={20} className="stt3" width={1542.1} height={5.2} />
        <rect x={33.3} y={43.1} className="stt4" width={1542.1} height={5.2} />
        <rect x={33.5} y={66.5} className="stt5" width={1542.1} height={5.2} />
        <rect x={33.5} y={89.7} className="stt6" width={1542.1} height={5.2} />
      </g>
      <g className="blackbox">
        <path
          className="stt7"
          d="M120.5,103.5H47.8c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h72.7c5.3,0,9.6,4.3,9.6,9.6v72.7 C130,99.2,125.8,103.5,120.5,103.5z"
        />
        <path
          className="stt7"
          d="M266.9,103.5h-96.2c-5.3,0-9.6-4.3-9.6-9.6V21.7c0-5.3,4.3-9.6,9.6-9.6h96.2c5.3,0,9.6,4.3,9.6,9.6v72.2 C276.4,99.2,272.1,103.5,266.9,103.5z"
        />
        <path
          className="stt7"
          d="M456.7,103.5H300c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h156.7c5.3,0,9.6,4.3,9.6,9.6v72.7 C466.3,99.2,462,103.5,456.7,103.5z"
        />
        <path
          className="stt7"
          d="M590.1,57h-93.6c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h93.6c5.3,0,9.6,4.3,9.6,9.6v26.3 C599.7,52.8,595.4,57,590.1,57z"
        />
        <path
          className="stt7"
          d="M859.9,103.5H687c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h172.9c5.3,0,9.6,4.3,9.6,9.6v72.7 C869.5,99.2,865.2,103.5,859.9,103.5z"
        />
        <path
          className="stt7"
          d="M1068,81H899.3c-5.3,0-9.6-4.3-9.6-9.6V20.7c0-5.3,4.3-9.6,9.6-9.6H1068c5.3,0,9.6,4.3,9.6,9.6v50.8 C1077.5,76.8,1073.3,81,1068,81z"
        />
        <path
          className="stt7"
          d="M1431.3,104.5h-168.7c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h168.7c5.3,0,9.6,4.3,9.6,9.6V95 C1440.9,100.2,1436.6,104.5,1431.3,104.5z"
        />
        <path
          className="stt7"
          d="M1566.8,104.5h-81.1c-5.3,0-9.6-4.3-9.6-9.6V21.2c0-5.3,4.3-9.6,9.6-9.6h81.1c5.3,0,9.6,4.3,9.6,9.6V95 C1576.4,100.2,1572.1,104.5,1566.8,104.5z"
        />
      </g>
      <g className="김종대">
        <g className="김종대-1">
          <title>인구절벽</title>
          <rect
            x={42.2}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={33}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 44.8876 93.2448)">
            <tspan x={0} y={1} className="stt40 stt0 stt22">
              {"인구절벽"}
            </tspan>
          </text>
        </g>
        <g className="김종대-2">
          <title>청년인구 감소, 군 부적응자 증가</title>
          <rect
            x={180.4}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={90}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 190.0822 90.9879)">
            <tspan x={-7} y={3} className="stt40 stt0 stt22">
              {"청년인구 감소, 군 부적응자 증가"}
            </tspan>
          </text>
        </g>
        <g className="김종대-3">
          <title>50만 군 유지불가, 전쟁양상 무인화</title>
          <rect
            x={294.6}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={103}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 298.7792 90.9879)">
            <tspan x={0} y={3} className="stt40 stt0 stt22">
              {"50만 군 유지불가, 전쟁양상 무인화"}
            </tspan>
          </text>
        </g>
        <g className="김종대-4">
          <title>사회적가치 제공</title>
          <rect
            x={415.7}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={50}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 418.5161 93.4811)">
            <tspan x={0} y={0} className="stt40 stt0 stt22">
              {"사회적가치 제공"}
            </tspan>
          </text>
        </g>
        <g className="김종대-5">
          <title>악폐습 감소, 자기개발</title>
          <rect
            x={680}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={70}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 700.0448 90.9882)">
            <tspan x={-16} y={3} className="stt40 stt0 stt22">
              {"악폐습 감소, 자기개발"}
            </tspan>
          </text>
        </g>
        <g className="김종대-6">
          <title>직무혼합단계, 특수병과 직업군인 전환</title>
          <rect
            x={760.1}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={105}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 762.6777 90.6489)">
            <tspan x={0} y={3} className="stt40 stt0 stt22">
              {"직무혼합단계, 특수병과 직업군인 전환"}
            </tspan>
          </text>
        </g>
        <g className="김종대-7">
          <title>직업예비군제 전환</title>
          <rect
            x={1267.1}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={57.5}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 1269.0715 91.1128)">
            <tspan x={2} y={3.5} className="stt40 stt0 stt22">
              {"직업예비군제 전환"}
            </tspan>
          </text>
        </g>
        <g className="김종대-8">
          <title>핵심기동장비 유지</title>
          <rect
            x={1354}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={55}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 1356.4791 91.1128)">
            <tspan x={0} y={3} className="stt40 stt0 stt22">
              {"핵심기동장비 유지"}
            </tspan>
          </text>
        </g>
        <g className="김종대-9">
          <title>직업군인 전환</title>
          <rect
            x={1529}
            y={86}
            className="stt8"
            rx="5"
            ry="5"
            width={43.9}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 1532.1721 91.1128)">
            <tspan x={0} y={3} className="stt40 stt0 stt22">
              {"직업군인 전환"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="이준석">
        <title>안보위협 과소평가</title>
        <g className="이준석-1">
          <rect x={68} y={17} className="stt9" width={57} height={12.8} />
          <text transform="matrix(0.9587 0 0 1 88.9567 21.0914)">
            <tspan x={-17} y={4} className="stt40 stt0 stt22">
              {"안보위협 과소평가"}
            </tspan>
          </text>
        </g>
        <g className="이준석-2">
          <title>감군대비 무대책</title>
          <rect x={165} y={17} className="stt9" width={50} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 171.5255 21.8512)">
            <tspan x={-5} y={3} className="stt40 stt0 stt22">
              {"감군대비 무대책"}
            </tspan>
          </text>
        </g>
        <g className="이준석-3">
          <title>자주국방 어려움</title>
          <rect x={220} y={17} className="stt9" width={50} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 220.0312 24.8564)">
            <tspan x={3} className="stt40 stt0 stt22">
              {"자주국방 어려움"}
            </tspan>
          </text>
        </g>
        <g className="이준석-4">
          <title>병력수요공급 예측불가, 경제호황 모병어려움</title>
          <rect x={309.9} y={17} className="stt9" width={125} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 330.0588 21.5068)">
            <tspan x={-18} y={4} className="stt40 stt0 stt22">
              {" 병력수요공급 예측불가, 경제호황 모병어려움"}
            </tspan>
          </text>
        </g>
        <g className="이준석-5">
          <title>일자리 총량 일정</title>
          <rect x={489.7} y={17} className="stt9" width={50} height={12.8} />
          <text
            transform="matrix(0.9048 0 0 1 491.3352 24.856)"
            className="stt40 stt0 stt22"
          >
            {"일자리 총량 일정"}
          </text>
        </g>
        <g className="이준석-6">
          <title>병사 장기복무 어려움, 취업시장 제한</title>
          <rect x={739.3} y={17} className="stt9" width={105} height={12.8} />
          <text
            transform="matrix(0.9048 0 0 1 743.3804 24.8013)"
            className="stt40 stt0 stt22"
          >
            <tspan x={0} y={0} className="stt40 stt0 stt22">
              {"병사 장기복무 어려움, 취업시장 제한"}
            </tspan>
          </text>
        </g>
        <g className="이준석-7">
          <title>남성 2년 늦는 취업시기, 평등권 침해</title>
          <rect x={968.8} y={17} className="stt9" width={105} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 976.5809 22.1646)">
            <tspan x={-5} y={3} className="stt40 stt0 stt22">
              {"남성 2년 늦는 취업시기, 평등권 침해"}
            </tspan>
          </text>
        </g>
        <g className="이준석-8">
          <title>국방예산 조정불가, 사병인건비 2조</title>
          <rect x={1300.5} y={17} className="stt9" width={98} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 1303.4590 22.1646)">
            <tspan x={0} y={2.5} className="stt40 stt0 stt22">
              {"국방예산 조정불가, 사병인건비 2조"}
            </tspan>
          </text>
        </g>
        <g className="이준석-9">
          <title>병사처우개선 필요</title>
          <rect x={1479.8} y={17} className="stt9" width={55} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 1482.2146 22.1646)">
            <tspan x={0} y={2} className="stt40 stt0 stt22">
              {"병사처우개선 필요"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="장경태">
        <title>50만군 유지불가, 인구절벽</title>
        <g className="장경태-1">
          <rect
            x={45}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={80}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 62.1424 43.9254)">
            <tspan x={-14} y={4.5} className="stt40 stt0 stt22">
              {"50만군 유지불가, 인구절벽"}
            </tspan>
          </text>
        </g>
        <g className="장경태-2">
          <title>작지만 강한 스마트군대</title>
          <rect
            x={163.2}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={70}
            height={12.8}
          />
          <text transform="matrix(0.9048 0 0 1 167.2165 47.8141)">
            <tspan y={0.5} className="stt40 stt0 stt22">
              {"작지만 강한 스마트군대"}
            </tspan>
          </text>
        </g>
        <g className="장경태-3">
          <title>군 정예화, 경력단절문제 해결</title>
          <rect
            x={343.4}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={93}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 348.0743 44.5465)">
            <tspan x={0} y={4} className="stt40 stt0 stt22">
              {"군 정예화, 경력단절문제 해결"}
            </tspan>
          </text>
        </g>
        <g className="장경태-4">
          <title>정예화된 보병, 21만 일자리 제공</title>
          <rect
            x={491}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={98}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 523.1106 46.7104)">
            <tspan x={-30} y={1.5} className="stt40 stt0 stt22">
              {"정예화된 보병, 21만 일자리 제공"}
            </tspan>
          </text>
        </g>
        <g className="장경태-5">
          <title>간부중심 군 개편</title>
          <rect
            x={892.6}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={57}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 895.3335 44.5464)">
            <tspan x={0} y={3.5} className="stt40 stt0 stt22">
              {"간부중심 군 개편"}
            </tspan>
          </text>
        </g>
        <g className="장경태-6">
          <title>여성희망징집제, 봉급체계변화</title>
          <rect
            x={978}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={95}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 991.8525 44.5464)">
            <tspan x={-8} y={3} className="stt40 stt0 stt22">
              {"여성희망징집제, 봉급체계변화"}
            </tspan>
          </text>
        </g>
        <g className="장경태-7">
          <title>예산절감 어려움, 징병유지 국방력약화</title>
          <rect
            x={1320}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={118}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 1332.6628 44.9459)">
            <tspan x={-8} y={3} className="stt40 stt0 stt22">
              {"예산절감 어려움, 징병유지 국방력약화"}
            </tspan>
          </text>
        </g>
        <g className="장경태-8">
          <title>징집 편제유지불가</title>
          <rect
            x={1500}
            y={40}
            className="stt12"
            rx="5"
            ry="5"
            width={58}
            height={12.8}
          />
          <text transform="matrix(0.9781 0 0 1 1506.838 47.2965)">
            <tspan x={-2} y={1} className="stt40 stt0 stt22">
              {"징집 편제유지불가"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="박휘락">
        <title>북 핵위협</title>
        <g className="박휘락-1">
          <rect x={47.4} y={63} className="stt14" width={33} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 48.7585 70.4)">
            <tspan x={1.4} y={1} className="stt40 stt0 stt22">
              {"북 핵위협"}
            </tspan>
          </text>
        </g>
        <g className="박휘락-2">
          <title>총선용 모병제, 미비한 군정책검토</title>
          <rect x={178} y={63} className="stt14" width={95} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 192.7844 67.7929)">
            <tspan x={-13} y={4} className="stt40 stt0 stt22">
              {"총선용 모병제, 미비한 군정책검토"}
            </tspan>
          </text>
        </g>
        <g className="박휘락-3">
          <title>질적향상과 현대화 필요</title>
          <rect x={380} y={63} className="stt14" width={68} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 384.0538 67.7929)">
            <tspan x={-1.2} y={4.5} className="stt40 stt0 stt22">
              {"질적향상과 현대화 필요"}
            </tspan>
          </text>
        </g>
        <g className="박휘락-4">
          <title>제한된 사회적 지위</title>
          <rect x={688.5} y={63} className="stt14" width={58} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 691.2057 70.8967)">
            <tspan x={0} y={0} className="stt40 stt0 stt22">
              {"제한된 사회적 지위"}
            </tspan>
          </text>
        </g>
        <g className="박휘락-5">
          <title>예비역 소멸문제, 충분한 부사관 수, 여군 후방투입</title>
          <rect x={904.5} y={63} className="stt14" width={140} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 906.7999 68.1227)">
            <tspan x={0} y={3.5} className="stt40 stt0 stt22">
              {"예비역 소멸문제, 충분한 부사관 수, 여군 후방투입"}
            </tspan>
          </text>
        </g>
        <g className="박휘락-6">
          <title>국방예산초과</title>
          <rect x={1260} y={63} className="stt14" width={43} height={12.8} />
          <text x={5} y={0} transform="matrix(0.9048 0 0 1 1258.0261 70.8969)">
            <tspan className="stt40 stt0 stt22">{"국방예산초과"}</tspan>
          </text>
        </g>
        <g className="박휘락-7">
          <title>악폐습철폐, 군문화개선</title>
          <rect x={1500} y={63} className="stt14" width={70} height={12.8} />
          <text transform="matrix(0.9048 0 0 1 1513.6693 68.3844)">
            <tspan x={-11} y={3} className="stt40 stt0 stt22">
              {"악폐습철폐, 군문화개선"}
            </tspan>
          </text>
        </g>
      </g>
      <g className="name">
        <title>이준석</title>
        <text
          transform="matrix(0.9762 0 0 1 4 25)"
          className="stt30 stt31 stt32"
          xmlSpace="preserve"
        >
          {"이준석"}
        </text>
      </g>
      <g>
        <text
          transform="matrix(0.9762 0 0 1 4 72)"
          className="stt30 stt31 stt32"
          xmlSpace="preserve"
        >
          {"박휘락"}
        </text>
      </g>
      <g>
        <text
          transform="matrix(0.9762 0 0 1 4 95)"
          className="stt30 stt31 stt32"
          xmlSpace="preserve"
        >
          {"김종대"}
        </text>
      </g>
      <g>
        <text
          transform="matrix(0.9822 0 0 1 4 47)"
          className="stt30 stt31 stt32"
          xmlSpace="preserve"
        >
          {"장경태"}
        </text>
      </g>
      <rect x={88.9} y={129.6} className="stt38" width={100} height={12.5} />
      <rect x={88.9} y={152} className="stt38" width={100} height={12.5} />
      <rect x={88.9} y={174.5} className="stt38" width={100} height={12.5} />
      <rect x={88.9} y={196.9} className="stt38" width={100} height={12.5} />
      <rect
        x={88.7}
        y={129.6}
        className="stt39"
        onClick={() => handleBarClickOne(0)}
        width={40}
        height={12.5}
      />
      <rect
        x={88.7}
        y={152}
        className="stt39"
        onClick={() => handleBarClickOne(1)}
        width={40}
        height={12.5}
      />
      <rect
        x={88.7}
        y={174.5}
        className="stt39"
        onClick={() => handleBarClickOne(2)}
        width={40}
        height={12.5}
      />
      <rect
        x={88.7}
        y={196.9}
        className="stt39"
        onClick={() => handleBarClickOne(3)}
        width={40}
        height={12.5}
      />
      <rect x={268.3} y={129.1} className="stt38" width={100} height={12.5} />
      <rect x={268.3} y={151.5} className="stt38" width={100} height={12.5} />
      <rect x={268.3} y={173.9} className="stt38" width={100} height={12.5} />
      <rect x={268.3} y={196.4} className="stt38" width={100} height={12.5} />
      <rect
        x={267.9}
        y={129.1}
        className="stt39"
        onClick={() => handleBarClickTwo(0)}
        width={30}
        height={12.5}
      />
      <rect
        x={268.4}
        y={151.5}
        className="stt39"
        onClick={() => handleBarClickTwo(1)}
        width={70}
        height={12.5}
      />
      <rect
        x={268.4}
        y={173.9}
        className="stt39"
        onClick={() => handleBarClickTwo(2)}
        width={20}
        height={12.5}
      />
      <rect
        x={268.6}
        y={196.4}
        className="stt39"
        onClick={() => handleBarClickTwo(3)}
        width={50}
        height={12.5}
      />
      <rect x={410} y={128.5} className="stt38" width={100} height={12.5} />
      <rect x={410} y={151} className="stt38" width={100} height={12.5} />
      <rect x={410} y={173.4} className="stt38" width={100} height={12.5} />
      <rect x={410} y={195.9} className="stt38" width={100} height={12.5} />
      <rect
        x={410}
        y={128.5}
        className="stt39"
        onClick={() => handleBarClickThree(0)}
        width={70}
        height={12.5}
      />
      <rect
        x={410}
        y={151}
        className="stt39"
        onClick={() => handleBarClickThree(1)}
        width={80}
        height={12.5}
      />
      <rect
        x={410}
        y={173.4}
        className="stt39"
        onClick={() => handleBarClickThree(2)}
        width={40}
        height={12.5}
      />
      <rect
        x={410}
        y={195.9}
        className="stt39"
        onClick={() => handleBarClickThree(3)}
        width={50}
        height={12.5}
      />
      <rect x={590} y={128.5} className="stt38" width={100} height={12.5} />
      <rect x={590} y={151} className="stt38" width={100} height={12.5} />
      <rect x={590} y={173.4} className="stt38" width={100} height={12.5} />
      <rect x={590} y={195.9} className="stt38" width={100} height={12.5} />
      <rect
        x={590}
        y={128.5}
        className="stt39"
        onClick={() => handleBarClickFour(0)}
        width={70}
        height={12.5}
      />
      <rect
        x={590}
        y={151}
        className="stt39"
        onClick={() => handleBarClickFour(1)}
        width={10}
        height={12.5}
      />
      <rect
        x={590}
        y={173.4}
        className="stt39"
        onClick={() => handleBarClickFour(2)}
        width={50}
        height={12.5}
      />
      <rect
        x={590}
        y={195.9}
        className="stt39"
        onClick={() => handleBarClickFour(3)}
        width={20}
        height={12.5}
      />
      <rect x={782} y={129.1} className="stt38" width={100} height={12.5} />
      <rect x={782} y={151.5} className="stt38" width={100} height={12.5} />
      <rect x={782} y={173.9} className="stt38" width={100} height={12.5} />
      <rect x={782} y={196.4} className="stt38" width={100} height={12.5} />
      <rect
        x={782.1}
        y={129.1}
        className="stt39"
        onClick={() => handleBarClickFive(0)}
        width={20}
        height={12.5}
      />
      <rect
        x={782.1}
        y={151.5}
        className="stt39"
        onClick={() => handleBarClickFive(1)}
        width={50}
        height={12.5}
      />
      <rect
        x={782.1}
        y={173.9}
        className="stt39"
        onClick={() => handleBarClickFive(2)}
        width={50}
        height={12.5}
      />
      <rect
        x={782.1}
        y={196.4}
        className="stt39"
        onClick={() => handleBarClickFive(3)}
        width={50}
        height={12.5}
      />
      <rect x={966.5} y={129.1} className="stt38" width={100} height={12.6} />
      <rect x={966.5} y={151.6} className="stt38" width={100} height={12.6} />
      <rect x={966.5} y={174.2} className="stt38" width={100} height={12.6} />
      <rect x={966.5} y={196.7} className="stt38" width={100} height={12.6} />
      <rect
        x={966.3}
        y={129.1}
        className="stt39"
        onClick={() => handleBarClickSix(0)}
        width={20}
        height={12.5}
      />
      <rect
        x={966.3}
        y={151.5}
        className="stt39"
        onClick={() => handleBarClickSix(1)}
        width={20}
        height={12.5}
      />
      <rect
        x={966.3}
        y={173.9}
        className="stt39"
        onClick={() => handleBarClickSix(2)}
        width={40}
        height={12.5}
      />
      <rect x={1366.3} y={128.5} className="stt38" width={100} height={12.5} />
      <rect x={1366.3} y={151} className="stt38" width={100} height={12.5} />
      <rect x={1366.3} y={173.4} className="stt38" width={100} height={12.5} />
      <rect x={1366.3} y={195.9} className="stt38" width={100} height={12.5} />
      <rect
        x={1366.1}
        y={128.5}
        className="stt39"
        onClick={() => handleBarClickSeven(0)}
        width={40}
        height={12.5}
      />
      <rect
        x={1366.1}
        y={151}
        className="stt39"
        onClick={() => handleBarClickSeven(1)}
        width={30}
        height={12.5}
      />
      <rect
        x={1366.1}
        y={173.4}
        className="stt39"
        onClick={() => handleBarClickSeven(2)}
        width={40}
        height={12.5}
      />
      <rect
        x={1366.1}
        y={195.9}
        className="stt39"
        onClick={() => handleBarClickSeven(3)}
        width={60}
        height={12.5}
      />
      <text transform="matrix(1 0 0 1 197.3914 139.4609)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"4 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 376.8728 138.9385)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"3 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"7 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"2 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"5 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 518.5291 138.416)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"7 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"8 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"5 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 726.9255 138.416)">
        <tspan x={-28} y={0} className="stt0 stt1">
          {"7 회"}
        </tspan>
        <tspan x={-28} y={22} className="stt0 stt1">
          {"1 회"}
        </tspan>
        <tspan x={-28} y={44} className="stt0 stt1">
          {"5 회"}
        </tspan>
        <tspan x={-28} y={66} className="stt0 stt1">
          {"2 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 890.5398 138.9385)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"2 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"5 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"5 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"5 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 1074.9792 138.9385)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"2 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"2 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"0 회"}
        </tspan>
      </text>
      <text transform="matrix(1 0 0 1 1474.8171 138.416)">
        <tspan x={0} y={0} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={22} className="stt0 stt1">
          {"3 회"}
        </tspan>
        <tspan x={0} y={44} className="stt0 stt1">
          {"4 회"}
        </tspan>
        <tspan x={0} y={66} className="stt0 stt1">
          {"6 회"}
        </tspan>
      </text>
      {/* {showTooltip && (
        <foreignObject
          x={tooltipPos.x - tooltipWidth / 2}
          y={tooltipPos.y - tooltipHeight}
          width={tooltipWidth}
          height={tooltipHeight}
        >
          {React.createElement("div", {
            className: "tooltip",
            xmlns: "http://www.w3.org/1999/xhtml",
            children: tooltipText,
          })}
        </foreignObject>
      )} */}
    </svg>
  );
};
export default SubChartKor;
