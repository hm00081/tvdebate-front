/* eslint-disable no-unused-vars */
import * as React from "react";
//import "./Tooltip.css"; // 툴팁 스타일을 정의하는 CSS 파일
import { useState } from "react";
import Pie from "./Pie";

interface TooltipState {
  display: boolean;
  x: number;
  y: number;
  content: JSX.Element | null;
}

//@ts-ignore
const CP7K = (props) => {
  const [tooltip, setTooltip] = useState({
    display: false,
    x: 0,
    y: 0,
    content: null,
  });
  //@ts-ignore
  const handleMouseOver = (e, content) => {
    setTooltip({
      display: true,
      x: e.clientX,
      y: e.clientY,
      content: content,
    });
  };

  const handleMouseOut = () => {
    setTooltip({ display: false, x: 0, y: 0, content: null });
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
        style={{
          enableBackground: "new 0 0 1753 318",
        }}
        xmlSpace="preserve"
        {...props}
      >
        {/* 다른 것도 수정해주기 */}
        <style type="text/css">
          {
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st2{font-size:14.1954px;}\n\t.st3{font-size:7.0364px;}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14.3527px;}\n\t.st14{font-size:8.2107px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:4.9087px;}\n\t.st74{font-size:7.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP7">
          <title>Keyword: 국방 예산 이슈 및 토론 마무리</title>
          <g className="T7">
            <text
              transform="matrix(1 0 0 1 1525.0665 23.6643)"
              className="st0 st1 st13"
            >
              {"국방 예산 이슈 및 토론 마무리 "}
            </text>
          </g>
          <g className="T7-1">
            <title>Keyword: 모병제를 위한 군 예산조정</title>
            <circle className="st15" cx={1557.7} cy={169.1} r={57} />
            <text transform="matrix(1 0 0 1 1529.8154 96.9686)" className="st7">
              <tspan x={0} y={0} className="st0 st1 st14">
                {"모병제를 위한"}
              </tspan>
              <tspan x={0} y={10} className="st0 st1 st14">
                {"군 예산조정"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-P1">
            <title>Keyword: 국방예산 초과</title>
            <path
              className="PHR"
              d="M1591.8,140.7l2.5-2.5c2.7-2.7,2.7-7.4,0-10.1l-6-6c-2.7-2.7-7.4-2.7-10.1,0l-2.5,2.5l-2.5-2.5 c-2.7-2.7-7.4-2.7-10.1,0l-6,6c-2.7,2.7-2.7,7.4,0,10.1l2.5,2.5l-2.5,2.5c-2.7,2.7-2.7,7.4,0,10.1l6,6c2.7,2.7,7.4,2.7,10.1,0 l2.5-2.5l2.5,2.5c2.7,2.7,7.4,2.7,10.1,0l6-6c2.7-2.7,2.7-7.4,0-10.1L1591.8,140.7z"
            />
            <text
              style={{ fontSize: "8.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1561.8125 135.3306)"
              className="st7"
            >
              <tspan x={13} y={2} className="st24 st1">
                {"국방예산"}
              </tspan>
              <tspan x={13} y={14} className="st24 st1">
                {"초과"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-K1">
            <title>Keyword: 부대 통폐합을 통한 예산조정</title>
            <ellipse
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 59.293 597.37)"
              className="KJD"
              cx={1531.2}
              cy={149.6}
              rx={23.6}
              ry={23.6}
            />
            <text
              style={{ fontSize: "8.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1520.6387 139.584)"
              className="st7"
            >
              <tspan x={11} y={-3} className="st24 st1">
                {"부대 "}
              </tspan>
              <tspan x={11} y={7} className="st24 st1">
                {"통폐합을 "}
              </tspan>
              <tspan x={11} y={17} className="st24 st1">
                {"통한"}
              </tspan>
              <tspan x={11} y={27} className="st24 st1">
                {"예산조정"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-J1">
            <title>Keyword: 부대토지 매각</title>
            <circle className="JKT" cx={1551} cy={208.8} r={15.2} />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1540.4971 204.3011)"
              className="st7"
            >
              <tspan x={11} y={3} className="st24 st1">
                {"부대토지 "}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"매각"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-L1">
            <title>Keyword: 병력유지 필요</title>
            <path
              className="LJS"
              d="M1573.8,177.7l1.9-1.9c2.1-2.1,2.1-5.5,0-7.7l-4.5-4.5c-2.1-2.1-5.5-2.1-7.7,0l-1.9,1.9l-1.9-1.9 c-2.1-2.1-5.5-2.1-7.7,0l-4.5,4.5c-2.1,2.1-2.1,5.5,0,7.7l1.9,1.9l-1.9,1.9c-2.1,2.1-2.1,5.5,0,7.7l4.5,4.5c2.1,2.1,5.5,2.1,7.7,0 l1.9-1.9l1.9,1.9c2.1,2.1,5.5,2.1,7.7,0l4.5-4.5c2.1-2.1,2.1-5.5,0-7.7L1573.8,177.7z"
            />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1551.3682 173.2002)"
              className="st7"
            >
              <tspan x={11} y={3} className="st24 st1">
                {"병력유지 "}
              </tspan>
              <tspan x={11} y={12} className="st24 st1">
                {"필요"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-L2">
            <title>Keyword: 국방예산 조정불가</title>
            <path
              className="LJS"
              d="M1608.8,177l2.1-2.1c2.3-2.3,2.3-6.1,0-8.5l-5-5c-2.3-2.3-6.1-2.3-8.5,0l-2.1,2.1l-2.1-2.1 c-2.3-2.3-6.1-2.3-8.5,0l-5,5c-2.3,2.3-2.3,6.1,0,8.5l2.1,2.1l-2.1,2.1c-2.3,2.3-2.3,6.1,0,8.5l5,5c2.3,2.3,6.1,2.3,8.5,0l2.1-2.1 l2.1,2.1c2.3,2.3,6.1,2.3,8.5,0l5-5c2.3-2.3,2.3-6.1,0-8.5L1608.8,177z"
            />
            <text
              style={{ fontSize: "6.9px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1585.2754 170.1639)"
              className="st7"
            >
              <tspan x={10} y={4} className="st24 st1">
                {"국방예산"}
              </tspan>

              <tspan x={10} y={13} className="st24 st1">
                {"조정불가"}
              </tspan>
            </text>
          </g>
          <g className="T7-1-P2">
            <title>Keyword: 최소병력 유지</title>
            <path
              className="PHR"
              d="M1588.6,206.3l1.5-1.5c1.6-1.6,1.6-4.4,0-6l-3.6-3.6c-1.6-1.6-4.4-1.6-6,0l-1.5,1.5l-1.5-1.5 c-1.6-1.6-4.4-1.6-6,0l-3.6,3.6c-1.6,1.6-1.6,4.4,0,6l1.5,1.5l-1.5,1.5c-1.6,1.6-1.6,4.4,0,6l3.6,3.6c1.6,1.6,4.4,1.6,6,0l1.5-1.5 l1.5,1.5c1.6,1.6,4.4,1.6,6,0l3.6-3.6c1.6-1.6,1.6-4.4,0-6L1588.6,206.3z"
            />
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1571.8252 201.7493)"
              className="st7"
            >
              <tspan x={7} y={3} className="st24 st1">
                {"최소병력 "}
              </tspan>
              <tspan x={7} y={10} className="st24 st1">
                {"유지 "}
              </tspan>
            </text>
          </g>
          <g className="T7-1-K2">
            <title>Keyword: 핵심기동 장비유지</title>
            <circle className="KJD" cx={1524.8} cy={190.6} r={16.2} />
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1509.9561 187.388)"
              className="st7"
            >
              <tspan x={14} y={3} className="st24 st1">
                {"핵심기동"}
              </tspan>
              <tspan x={14} y={11} className="st24 st1">
                {"장비유지"}
              </tspan>
            </text>
          </g>
          <g className="T7-2">
            <circle className="st15" cx={1675.6} cy={170.4} r={60.1} />
            <text transform="matrix(1 0 0 1 1631.5186 102.0184)">
              <tspan x={24} y={2} className="st0 st1 st14">
                {"마무리발언"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-L1">
            <title>Keyword: 병사처우 개선필요</title>
            <path
              className="LJS"
              d="M1723.3,187l2.8-2.8c3-3,3-7.9,0-10.9l-6.4-6.4c-3-3-7.9-3-10.9,0l-2.8,2.8l-2.8-2.8c-3-3-7.9-3-10.9,0 l-6.4,6.4c-3,3-3,7.9,0,10.9l2.8,2.8l-2.8,2.8c-3,3-3,7.9,0,10.9l6.4,6.4c3,3,7.9,3,10.9,0l2.8-2.8l2.8,2.8c3,3,7.9,3,10.9,0 l6.4-6.4c3-3,3-7.9,0-10.9L1723.3,187z"
            />
            <text
              style={{ fontSize: "8.3px" }}
              textAnchor="middle"
              transform="matrix(1.0025 0 0 1 1696.4316 178.9754)"
              className="st7"
            >
              <tspan x={10} y={5} className="st24 st1">
                {"병사처우"}
              </tspan>
              <tspan x={10} y={17} className="st24 st1">
                {"개선필요"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-J1">
            <title>Keyword: 징집편제 유지불가</title>
            <ellipse
              transform="matrix(9.853820e-02 -0.9951 0.9951 9.853820e-02 1352.7478 1776.272)"
              className="JKT"
              cx={1656.8}
              cy={141.5}
              rx={24.8}
              ry={24.8}
            />
            <text
              style={{ fontSize: "9.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1638.0029 134.9139)"
              className="st7"
            >
              <tspan x={18} y={4} className="st24 st1">
                {"징집편제"}
              </tspan>
              <tspan x={18} y={15} className="st24 st1">
                {"유지불가"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-K1">
            <title>Keyword: 직업군인 전환</title>
            <ellipse
              transform="matrix(0.9239 -0.3827 0.3827 0.9239 54.6602 640.9101)"
              className="KJD"
              cx={1638.4}
              cy={183.1}
              rx={20.4}
              ry={20.4}
            />
            <text
              style={{ fontSize: "8.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1621.1201 178.9744)"
              className="st7"
            >
              <tspan x={17} y={3} className="st24 st1">
                {"직업군인"}
              </tspan>
              <tspan x={17} y={13} className="st24 st1">
                {"전환 "}
              </tspan>
            </text>
          </g>
          <g className="T7-2-P1">
            <title>Keyword: 군 악폐습 철폐</title>
            <path
              className="PHR"
              d="M1717.8,144.4l2.5-2.5c2.8-2.8,2.8-7.4,0-10.1l-6-6c-2.8-2.8-7.4-2.8-10.1,0l-2.5,2.5l-2.5-2.5 c-2.8-2.8-7.4-2.8-10.1,0l-6,6c-2.8,2.8-2.8,7.4,0,10.1l2.5,2.5l-2.5,2.5c-2.8,2.8-2.8,7.4,0,10.1l6,6c2.8,2.8,7.4,2.8,10.1,0 l2.5-2.5l2.5,2.5c2.8,2.8,7.4,2.8,10.1,0l6-6c2.8-2.8,2.8-7.4,0-10.1L1717.8,144.4z"
            />
            <text
              style={{ fontSize: "8.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1683.4092 140.2395)"
              className="st7"
            >
              <tspan x={17} y={-2} className="st24 st1">
                {"군"}
              </tspan>
              <tspan x={17} y={8} className="st24 st1">
                {"악폐습"}
              </tspan>
              <tspan x={17} y={18} className="st24 st1">
                {"철폐"}
              </tspan>
            </text>
          </g>
          <g className="T7-2-L2">
            <title>Keyword: 초임장교 임금개선</title>
            <path
              className="LJS"
              d="M1682.2,209.5l2.2-2.2c2.4-2.4,2.4-6.4,0-8.9l-5.2-5.2c-2.4-2.4-6.4-2.4-8.9,0l-2.2,2.2l-2.2-2.2 c-2.4-2.4-6.4-2.4-8.9,0l-5.2,5.2c-2.4,2.4-2.4,6.4,0,8.9l2.2,2.2l-2.2,2.2c-2.4,2.4-2.4,6.4,0,8.9l5.2,5.2c2.4,2.4,6.4,2.4,8.9,0 l2.2-2.2l2.2,2.2c2.4,2.4,6.4,2.4,8.9,0l5.2-5.2c2.4-2.4,2.4-6.4,0-8.9L1682.2,209.5z"
            />
            <text
              style={{ fontSize: "7.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 1667 205.2264)"
              className="st7"
            >
              <tspan x={0} y={2} className="st24 st1">
                {"초임장교"}
              </tspan>
              <tspan x={0} y={11} className="st24 st1">
                {"임금개선"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
      {tooltip.display && (
        <div
          className="tooltip"
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
        >
          {tooltip.content}
        </div>
      )}
    </>
  );
};
export default CP7K;
