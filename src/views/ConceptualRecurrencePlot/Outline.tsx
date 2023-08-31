import React, { useRef, useEffect } from "react";
import styles from "./Outline.module.scss";
import classNames from "classnames";
import * as d3 from "d3";
//@ts-ignore
const Outline = (props) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      //@ts-ignore
      const zoomed = (event) => {
        const { transform } = event;
        svg.attr("transform", transform);
      };

      const zoom = d3.zoom().scaleExtent([0.8, 2.5]).on("zoom", zoomed);
      //@ts-ignore
      svg.call(zoom);
    }
  }, []);
  return (
    <svg
      ref={svgRef}
      x="0px"
      y="0px"
      viewBox="0 0 2937.5 218.9"
      style={{
        enableBackground: "new 0 0 2937.5 218.9",
        overflow: "visible",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <rect
          width="100%"
          height="100%"
          style={{
            fill: "#ffffff",
          }}
        />
        <rect className={styles.st0} width={2941.7} height={218.9} />
        <text transform="matrix(1 0 0 1 11.2066 56.5391)">
          <tspan
            x={0}
            y={0}
            className={classNames(styles.st1, styles.st2, styles.st3)}
          >
            {"\uC774\uC900\uC11D"}
          </tspan>
          <tspan
            x={0}
            y={42.9}
            className={classNames(styles.st1, styles.st2, styles.st3)}
          >
            {"\uC7A5\uACBD\uD0DC"}
          </tspan>
          <tspan
            x={0}
            y={85.8}
            className={classNames(styles.st1, styles.st2, styles.st3)}
          >
            {"\uBC15\uD718\uB77D"}
          </tspan>
          <tspan
            x={0}
            y={128.8}
            className={classNames(styles.st1, styles.st2, styles.st3)}
          >
            {"\uAE40\uC885\uB300 "}
          </tspan>
        </text>
        <text
          transform="matrix(0.9048 0 0 1 186.2007 52.0303)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC548\uBCF4\uC704\uD611 \uACFC\uC18C\uD3C9\uAC00"}
        </text>
        <rect
          x={110.7}
          y={76.2}
          className={styles.st5}
          width={184.1}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 112.9006 97.2571)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"50\uB9CC\uAD70 \uC720\uC9C0\uBD88\uAC00, \uC778\uAD6C\uC808\uBCBD"}
        </text>
        <rect
          x={181.9}
          y={30.6}
          className={styles.st6}
          width={130.9}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2303.8533 182.9772)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uBD80\uB300 \uD1B5\uD3D0\uD569\uC744 \uD1B5\uD55C \uC608\uC0B0\uC870\uC815"
          }
        </text>
        <rect
          x={2302.3}
          y={118.2}
          className={styles.st7}
          width={94.4}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2304.5532 139.204)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uAD6D\uBC29\uC608\uC0B0\uCD08\uACFC"}
        </text>
        <rect
          x={2300.5}
          y={161.5}
          className={styles.st8}
          width={194.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2379.9561 52.0145)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uAD6D\uBC29\uC608\uC0B0 \uC870\uC815\uBD88\uAC00, \uC0AC\uBCD1\uC778\uAC74\uBE44 2\uC870"
          }
        </text>
        <rect
          x={2376.6}
          y={30.6}
          className={styles.st6}
          width={239.1}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2503.9023 182.6583)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uD575\uC2EC\uAE30\uB3D9\uC7A5\uBE44 \uC720\uC9C0"}
        </text>
        <rect
          x={2500.6}
          y={161.2}
          className={styles.st8}
          width={127.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2836.7825 183.3071)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC9C1\uC5C5\uAD70\uC778 \uC804\uD658"}
        </text>
        <rect
          x={2833.4}
          y={161.9}
          className={styles.st8}
          width={99.3}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2715.1094 52.5101)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uBCD1\uC0AC\uCC98\uC6B0\uAC1C\uC120 \uD544\uC694"}
        </text>
        <rect
          x={2710.8}
          y={31.1}
          className={styles.st6}
          width={131}
          height={31}
        />
        <rect
          x={2524.2}
          y={75.5}
          className={styles.st9}
          width={388}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2527.1738 96.5303)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC608\uC0B0\uC808\uAC10 \uC5B4\uB824\uC6C0, \uC9D5\uBCD1\uC720\uC9C0 \uAD6D\uBC29\uB825\uC57D\uD654, \uC9D5\uC9D1 \uD3B8\uC81C\uC720\uC9C0\uBD88\uAC00"
          }
        </text>
        <rect
          x={2770.1}
          y={118.9}
          className={styles.st7}
          width={158.6}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 2772.3538 139.9409)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC545\uD3D0\uC2B5\uCCA0\uD3D0, \uAD70\uBB38\uD654\uAC1C\uC120"}
        </text>
        <text
          transform="matrix(0.9048 0 0 1 1789.2704 52.1407)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uB0A8\uC131 2\uB144\uB2A6\uB294 \uCDE8\uC5C5\uC2DC\uAE30, \uD3C9\uB4F1\uAD8C \uCE68\uD574"
          }
        </text>
        <rect
          x={1785.9}
          y={30.7}
          className={styles.st6}
          width={243.8}
          height={31}
        />
        <rect
          x={1883.2}
          y={74.5}
          className={styles.st9}
          width={205.5}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1886.1738 95.5303)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC5EC\uC131\uD76C\uB9DD\uC9D5\uC9D1\uC81C, \uBD09\uAE09\uCCB4\uACC4\uBCC0\uD654 "
          }
        </text>
        <rect
          x={1622.2}
          y={74.5}
          className={styles.st9}
          width={113.5}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1625.1738 95.5303)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uAC04\uBD80\uC911\uC2EC \uAD70\uAC1C\uD3B8 "}
        </text>
        <rect
          x={1610.7}
          y={118.5}
          className={styles.st7}
          width={333.1}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1612.8733 139.5729)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC608\uBE44\uC5ED \uC18C\uBA78\uBB38\uC81C, \uCDA9\uBD84\uD55C \uBD80\uC0AC\uAD00 \uC218, \uC5EC\uAD70 \uD6C4\uBC29\uD22C\uC785"
          }
        </text>
        <text
          transform="matrix(0.9048 0 0 1 1763.1067 182.426)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC9C1\uC5C5\uC608\uBE44\uAD70\uC81C \uC804\uD658"}
        </text>
        <rect
          x={1759.8}
          y={161}
          className={styles.st8}
          width={128}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1967.0519 182.3343)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC5EC\uC131\uC0AC\uBCD1\uC9D5\uC9D1 \uBD88\uD544\uC694, \uCDA9\uBD84\uD55C \uC5EC\uAD70\uAC04\uBD80 \uC218"
          }
        </text>
        <rect
          x={1963.7}
          y={160.9}
          className={styles.st8}
          width={276.9}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1283.6842 182.0364)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC545\uD3D0\uC2B5 \uAC10\uC18C, \uC790\uAE30\uAC1C\uBC1C\uD61C\uD0DD"
          }
        </text>
        <rect
          x={1280.3}
          y={160.6}
          className={styles.st8}
          width={181.4}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1471.7775 181.6311)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC9C1\uBB34\uD63C\uD569\uB2E8\uACC4, \uD2B9\uC218\uBCD1\uACFC \uC9C1\uC5C5\uAD70\uC778 \uC804\uD658"
          }
        </text>
        <rect
          x={1469.4}
          y={160.2}
          className={styles.st8}
          width={255.3}
          height={31}
        />
        <rect
          x={1256.6}
          y={118.5}
          className={styles.st7}
          width={131.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1258.7803 139.5324)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC81C\uD55C\uB41C \uC0AC\uD68C\uC801 \uC9C0\uC704"}
        </text>
        <text
          transform="matrix(0.9048 0 0 1 1332.8813 52.4247)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uBCD1\uC0AC \uC7A5\uAE30\uBCF5\uBB34 \uC5B4\uB824\uC6C0, \uCDE8\uC5C5\uC2DC\uC7A5 \uC81C\uD55C"
          }
        </text>
        <rect
          x={1330.5}
          y={31}
          className={styles.st6}
          width={245.2}
          height={31}
        />
        <rect
          x={1003.3}
          y={74.8}
          className={styles.st9}
          width={221.4}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 1006.2614 95.8148)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC815\uC608\uD654\uB41C \uBCF4\uBCD1, 21\uB9CC \uC77C\uC790\uB9AC \uC81C\uACF5"
          }
        </text>
        <text
          transform="matrix(0.9048 0 0 1 1149.8723 52.3917)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC77C\uC790\uB9AC\uCD1D\uB7C9 \uC77C\uC815"}
        </text>
        <rect
          x={1147.5}
          y={31}
          className={styles.st6}
          width={112.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 594.5845 52.403)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC790\uC8FC\uAD6D\uBC29 \uC5B4\uB824\uC6C0"}
        </text>
        <rect
          x={592.2}
          y={31}
          className={styles.st6}
          width={112.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 802.004 52.2241)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uBCD1\uB825\uC218\uC694\uACF5\uAE09 \uC608\uCE21\uBD88\uAC00, \uACBD\uC81C\uD638\uD669 \uBAA8\uBCD1\uC5B4\uB824\uC6C0"
          }
        </text>
        <rect
          x={799.7}
          y={30.8}
          className={styles.st6}
          width={301.1}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 526.2996 182.6502)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "50\uB9CC\uAD70 \uC720\uC9C0\uBD88\uAC00, \uC804\uC7C1\uC591\uC0C1 \uBB34\uC778\uD654"
          }
        </text>
        <rect
          x={523}
          y={161.2}
          className={styles.st8}
          width={233.8}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 812.428 182.8007)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uC0AC\uD68C\uC801\uAC00\uCE58 \uC81C\uACF5, \uACC4\uCE35 \uC0AC\uB2E4\uB9AC"
          }
        </text>
        <rect
          x={809.1}
          y={161.4}
          className={styles.st8}
          width={199.7}
          height={31}
        />
        <rect
          x={718.1}
          y={118.4}
          className={styles.st7}
          width={159.6}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 720.3468 139.3976)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC9C8\uC801\uD5A5\uC0C1\uACFC \uD604\uB300\uD654 \uD544\uC694"}
        </text>
        <rect x={602.7} y={74} className={styles.st9} width={201} height={31} />
        <text
          transform="matrix(0.9048 0 0 1 605.649 95.0745)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uAD70 \uC815\uC608\uD654, \uACBD\uB825\uB2E8\uC808\uBB38\uC81C \uD574\uACB0"
          }
        </text>
        <text
          transform="matrix(0.9048 0 0 1 304.9168 182.7025)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uCCAD\uB144\uC778\uAD6C \uAC10\uC18C, \uAD70 \uBD80\uC801\uC751\uC790 \uC99D\uAC00"
          }
        </text>
        <rect
          x={301.6}
          y={161.3}
          className={styles.st8}
          width={218.2}
          height={31}
        />
        <rect
          x={377.2}
          y={118.1}
          className={styles.st7}
          width={227.5}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 379.438 139.1056)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {
            "\uCD1D\uC120\uC6A9 \uBAA8\uBCD1\uC81C, \uBBF8\uBE44\uD55C \uAD70\uC815\uCC45\uAC80\uD1A0"
          }
        </text>
        <text
          transform="matrix(0.9048 0 0 1 383.8393 51.6677)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uAC10\uAD70\uB300\uBE44 \uBB34\uB300\uCC45"}
        </text>
        <rect
          x={381.5}
          y={30.2}
          className={styles.st6}
          width={112.2}
          height={31}
        />
        <rect
          x={305.5}
          y={76.4}
          className={styles.st5}
          width={161.2}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 307.747 97.4284)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC791\uC9C0\uB9CC \uAC15\uD55C \uC2A4\uB9C8\uD2B8\uAD70\uB300"}
        </text>
        <rect
          x={118.3}
          y={118.4}
          className={styles.st7}
          width={70.4}
          height={31}
        />
        <text
          transform="matrix(0.9048 0 0 1 122.5279 139.4274)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uBD81 \uD575\uC704\uD611"}
        </text>
        <text
          transform="matrix(0.9048 0 0 1 80.2257 182.8388)"
          className={classNames(styles.st1, styles.st2, styles.st4)}
        >
          {"\uC778\uAD6C\uC808\uBCBD"}
        </text>
        <rect
          x={76.9}
          y={161.4}
          className={styles.st8}
          width={65.9}
          height={31}
        />
      </g>
    </svg>
  );
};
export default Outline;
