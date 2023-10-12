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
const CP6 = (props) => {
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
        <g className="CP6">
          <title>Keyword: Female conscription and pay system</title>
          <g className="T6">
            <text transform="matrix(1 0 0 1 1293.1123 49.2322)">
              <tspan x={0} y={0} className="st0 st1 st2">
                {"Female conscription "}
              </tspan>
              <tspan x={17.2} y={17} className="st0 st1 st2">
                {"and pay system"}
              </tspan>
            </text>
          </g>
          <g className="T6-1">
            <title>
              Keyword: What is the current situation and how to recruit women?
            </title>
            <circle className="st15" cx={1314.5} cy={176.7} r={44.7} />
            <circle className="st15" cx={1406.3} cy={175.1} r={46.5} />
            <text
              transform="matrix(1 0 0 1 1310.7285 113.7039)"
              className="st7"
            >
              <tspan x={0} y={0} className="st0 st1 st11">
                {"What is the current situation "}
              </tspan>
              <tspan x={0} y={9.7} className="st0 st1 st11">
                {"and how to recruit women?"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-K1">
            <title>
              Keyword: Sufficient number of female military officers
            </title>
            <circle className="KJD" cx={1290.6} cy={158.9} r={13.4} />
            <text
              transform="matrix(1 0 0 1 1283.0957 154.0176)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st50">
                {"Sufficient "}
              </tspan>
              <tspan x={-0.8} y={3.9} className="st24 st1 st50">
                {"number of "}
              </tspan>
              <tspan x={2} y={7.7} className="st24 st1 st50">
                {"female "}
              </tspan>
              <tspan x={-3.9} y={11.6} className="st24 st1 st50">
                {"military officers"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-P1">
            <title>Keyword: No unisex enlistment</title>
            <path
              className="PHR"
              d="M1331.7,149.4l1.9-1.9c2.1-2.2,2-5.6-0.1-7.7l-4.5-4.4c-2.2-2.1-5.6-2-7.7,0.1l-1.9,1.9l-1.9-1.9 c-2.2-2.1-5.6-2-7.7,0.1l-4.4,4.5c-2.1,2.2-2,5.6,0.1,7.7l1.9,1.9l-1.9,1.9c-2.1,2.2-2,5.6,0.1,7.7l4.5,4.4c2.2,2.1,5.6,2,7.7-0.1 l1.9-1.9l1.9,1.9c2.2,2.1,5.6,2,7.7-0.1l4.4-4.5c2.1-2.2,2-5.6-0.1-7.7L1331.7,149.4z"
            />
            <text
              transform="matrix(0.9999 -1.497861e-02 1.497861e-02 0.9999 1307.1531 148.5055)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st93">
                {"No unisex "}
              </tspan>
              <tspan x={0} y={6.4} className="st24 st1 st93">
                {"enlistment"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-K2">
            <title>Keyword: No female enlistment required</title>
            <ellipse
              transform="matrix(0.2298 -0.9732 0.9732 0.2298 810.1683 1400.9176)"
              className="KJD"
              cx={1290.2}
              cy={188.6}
              rx={15.8}
              ry={15.8}
            />
            <text
              transform="matrix(1 0 0 1 1277.5732 184.7832)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st48">
                {"No female "}
              </tspan>
              <tspan x={-0.2} y={6} className="st24 st1 st48">
                {"enlistment "}
              </tspan>
              <tspan x={2.9} y={12.1} className="st24 st1 st48">
                {"required"}
              </tspan>
            </text>
          </g>
          <g className="T6-1-P2">
            <title>
              Keyword: Rear-loading of female soldiers after recruitment
            </title>
            <path
              className="PHR"
              d="M1347.1,188l2.9-2.9c3.3-3.3,3.3-8.6,0-11.7l-6.9-6.9c-3.3-3.3-8.6-3.3-11.7,0l-2.9,2.9l-2.9-2.9 c-3.3-3.3-8.6-3.3-11.7,0l-6.9,6.9c-3.3,3.3-3.3,8.6,0,11.7l2.9,2.9l-2.9,2.9c-3.3,3.3-3.3,8.6,0,11.7l6.9,6.9 c3.3,3.3,8.6,3.3,11.7,0l2.9-2.9l2.9,2.9c3.3,3.3,8.6,3.3,11.7,0l6.9-6.9c3.3-3.3,3.3-8.6,0-11.7L1347.1,188z"
            />
            <text
              transform="matrix(1 0 0 1 1310.4238 183.0576)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st49">
                {"Rear-loading of "}
              </tspan>
              <tspan x={0.7} y={6.1} className="st24 st1 st49">
                {"female soldiers "}
              </tspan>
              <tspan x={-3.2} y={12.1} className="st24 st1 st49">
                {"after recruitment   "}
              </tspan>
            </text>
          </g>
          <g className="T6-2-L1">
            <title>
              Keyword: Provide benefits for short-term service for female
              soldiers
            </title>
            <path
              className="LJS"
              d="M1435.8,151.3l1.7-1.7c1.9-1.9,1.9-5.1,0-7.1l-4.1-4.1c-1.9-1.9-5.1-1.9-7.1,0l-1.7,1.7l-1.7-1.7 c-1.9-1.9-5.1-1.9-7.1,0l-4.1,4.1c-1.9,1.9-1.9,5.1,0,7.1l1.7,1.7l-1.7,1.7c-1.9,1.9-1.9,5.1,0,7.1l4.1,4.1c1.9,1.9,5.1,1.9,7.1,0 l1.7-1.7l1.7,1.7c1.9,1.9,5.1,1.9,7.1,0l4.1-4.1c1.9-1.9,1.9-5.1,0-7.1L1435.8,151.3z"
            />
            <text
              transform="matrix(1 0 0 1 1419.9414 147.0029)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st100">
                {"Provide "}
              </tspan>
              <tspan x={-2.2} y={3.3} className="st24 st1 st100">
                {"benefits for"}
              </tspan>
              <tspan x={-6.6} y={6.5} className="st24 st1 st100">
                {"short-term service "}
              </tspan>
              <tspan x={-6.5} y={9.8} className="st24 st1 st100">
                {"for female soldiers"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J1">
            <title>Keyword: Problem of complex salary system</title>
            <ellipse
              transform="matrix(8.362155e-02 -0.9965 0.9965 8.362155e-02 1104.8994 1534.2709)"
              className="JKT"
              cx={1386.7}
              cy={166.4}
              rx={24.2}
              ry={24.2}
            />
            <text
              transform="matrix(0.9999 -1.497861e-02 1.497861e-02 0.9999 1371.0117 160.9413)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st101">
                {"Problem of"}
              </tspan>
              <tspan x={2.9} y={7.5} className="st24 st1 st101">
                {"complex "}
              </tspan>
              <tspan x={-3.7} y={15.1} className="st24 st1 st101">
                {"salary system "}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J2">
            <title>Keyword: Men entering the workforce two years late</title>
            <path
              className="LJS"
              d="M1443.8,186.1l2.4-2.4c2.8-2.8,2.8-7.1,0-9.9l-5.8-5.8c-2.8-2.8-7.1-2.8-9.9,0l-2.4,2.4l-2.4-2.4 c-2.8-2.8-7.1-2.8-9.9,0l-5.8,5.8c-2.8,2.8-2.8,7.1,0,9.9l2.4,2.4l-2.4,2.4c-2.8,2.8-2.8,7.1,0,9.9l5.8,5.8c2.8,2.8,7.1,2.8,9.9,0 l2.4-2.4l2.4,2.4c2.8,2.8,7.1,2.8,9.9,0l5.8-5.8c2.8-2.8,2.8-7.1,0-9.9L1443.8,186.1z"
            />
            <text
              transform="matrix(1 0 0 1 1413.3506 181.8223)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st99">
                {"Men entering "}
              </tspan>
              <tspan x={-0.5} y={5.6} className="st24 st1 st99">
                {"the workforce "}
              </tspan>
              <tspan x={0.3} y={11.3} className="st24 st1 st99">
                {"two years late"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J2">
            <title>Keyword: Reorganize the officer system</title>
            <path
              className="JKT"
              d="M1387.6,190.9c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12s-12-5.4-12-12C1375.6,196.3,1381,190.9,1387.6,190.9z"
            />
            <text
              transform="matrix(1 0 0 1 1377.8379 200.3191)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st102">
                {"Reorganize "}
              </tspan>
              <tspan x={0.7} y={4.4} className="st24 st1 st102">
                {"the officer "}
              </tspan>
              <tspan x={4.3} y={8.8} className="st24 st1 st102">
                {"system"}
              </tspan>
            </text>
          </g>
          <g className="T6-2-J3">
            <title>Keyword: Revival of the military merit system</title>
            <path
              className="LJS"
              d="M1416.1,211.4l1.2-1.2c1.3-1.3,1.3-3.2,0-4.5l-2.6-2.6c-1.3-1.3-3.2-1.3-4.5,0l-1.2,1.2l-1.2-1.2 c-1.3-1.3-3.2-1.3-4.5,0l-2.6,2.6c-1.3,1.3-1.3,3.2,0,4.5l1.2,1.2l-1.2,1.2c-1.3,1.3-1.3,3.2,0,4.5l2.6,2.6c1.3,1.3,3.2,1.3,4.5,0 l1.2-1.2l1.2,1.2c1.3,1.3,3.2,1.3,4.5,0l2.6-2.6c1.3-1.3,1.3-3.2,0-4.5L1416.1,211.4z"
            />
            <text
              transform="matrix(1 0 0 1 1403.5088 209.0965)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st103">
                {"Revival of "}
              </tspan>
              <tspan x={-0.6} y={2.9} className="st24 st1 st103">
                {"the military"}
              </tspan>
              <tspan x={-1.4} y={5.8} className="st24 st1 st103">
                {"merit system"}
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
export default CP6;
