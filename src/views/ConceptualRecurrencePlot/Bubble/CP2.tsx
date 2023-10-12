/* eslint-disable react/no-unescaped-entities */
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
const CP2 = (props) => {
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
        <g className="CP2">
          <g className="T2">
            <title>Keyword: The population cliff and its impact on AVMS</title>
            <text transform="matrix(1 0 0 1 297.9351 41.7034)">
              <tspan x={0} y={0} className="st0 st1 st2">
                {"The population cliff and "}
              </tspan>
              <tspan x={15.3} y={17} className="st0 st1 st2">
                {"its impact on AVMS"}
              </tspan>
            </text>
          </g>
          <g className="T2-1">
            <circle className="st15" cx={327.8} cy={173.8} r={47.8} />

            <title>Keyword: Population cliff, is AVMS the answer?</title>
            <text transform="matrix(1 0 0 1 316.4375 105.6326)">
              <tspan x={0} y={0} className="st0 st1 st3">
                {"Population cliff, "}
              </tspan>
              <tspan x={12} y={8.4} className="st0 st1 st3">
                {"is AVMS "}
              </tspan>
              <tspan x={5.6} y={16.9} className="st0 st1 st3">
                {"the answer? "}
              </tspan>
            </text>
          </g>
          <g className="T2-1-P1">
            <path
              className="PHR"
              d="M346.1,142.7l1.8-1.8c1.9-1.9,1.9-5.1,0-7l-4.1-4.1c-1.9-1.9-5.1-1.9-7,0l-1.8,1.8l-1.8-1.8 c-1.9-1.9-5.1-1.9-7,0l-4.1,4.1c-1.9,1.9-1.9,5.1,0,7l1.8,1.8l-1.8,1.8c-1.9,1.9-1.9,5.1,0,7l4.1,4.1c1.9,1.9,5.1,1.9,7,0l1.8-1.8 l1.8,1.8c1.9,1.9,5.1,1.9,7,0l4.1-4.1c1.9-1.9,1.9-5.1,0-7L346.1,142.7z"
            />

            <title>
              Keyword: Conscription for General Elections without Measures
            </title>
            <text transform="matrix(1 0 0 1 325.1153 136.3636)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st25">
                {"Conscription "}
              </tspan>
              <tspan x={0.9} y={3.8} className="st24 st1 st25">
                {"for General "}
              </tspan>
              <tspan x={2.8} y={7.7} className="st24 st1 st25">
                {"Elections "}
              </tspan>
              <tspan x={3.5} y={11.5} className="st24 st1 st25">
                {"without "}
              </tspan>
              <tspan x={2.2} y={15.4} className="st24 st1 st25">
                {"Measures "}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K1">
            <ellipse
              transform="matrix(0.3688 -0.9295 0.9295 0.3688 55.2782 378.4305)"
              className="KJD"
              cx={306.3}
              cy={148.5}
              rx={14.3}
              ry={14.3}
            />

            <title>Keyword: Unmanned warfare</title>
            <text transform="matrix(1 0 0 1 293.6226 147.5977)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st27">
                {"Unmanned "}
              </tspan>
              <tspan x={4.5} y={5.8} className="st24 st1 st27">
                {"warfare"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-L1">
            <path
              className="LJS"
              d="M366,190.1l1.8-1.8c1.9-1.9,1.9-5.2,0-7.2l-4.2-4.2c-1.9-1.9-5.2-1.9-7.2,0l-1.8,1.8l-1.8-1.8 c-1.9-1.9-5.2-1.9-7.2,0l-4.2,4.2c-1.9,1.9-1.9,5.2,0,7.2l1.8,1.8l-1.8,1.8c-1.9,1.9-1.9,5.2,0,7.2l4.2,4.2c1.9,1.9,5.2,1.9,7.2,0 l1.8-1.8l1.8,1.8c1.9,1.9,5.2,1.9,7.2,0l4.2-4.2c1.9-1.9,1.9-5.2,0-7.2L366,190.1z"
            />

            <title>Keyword: Difficulties in self-defense</title>
            <text transform="matrix(1 0 0 1 343.2012 186.208)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st29">
                {"Difficulties "}
              </tspan>
              <tspan x={9.3} y={5.6} className="st24 st1 st29">
                {"in "}
              </tspan>
              <tspan x={-1} y={11.1} className="st24 st1 st29">
                {"self-defense"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K2">
            <circle className="KJD" cx={294.1} cy={173.5} r={13.5} />

            <title>Keyword: Unpredictable future wars</title>
            <text transform="matrix(1 0 0 1 281.5723 173.0996)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st82">
                {"Unpredictable "}
              </tspan>
              <tspan x={2.7} y={4.5} className="st24 st1 st82">
                {"future wars"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-P2">
            <path
              className="PHR"
              d="M368.3,161.8l1.6-1.7c1.7-1.8,1.7-4.7-0.1-6.4l-3.8-3.7c-1.8-1.7-4.7-1.7-6.4,0.1l-1.6,1.7l-1.7-1.6 c-1.8-1.7-4.7-1.7-6.4,0.1l-3.7,3.8c-1.7,1.8-1.7,4.7,0.1,6.4l1.7,1.6l-1.6,1.7c-1.7,1.8-1.7,4.7,0.1,6.4l3.8,3.7 c1.8,1.7,4.7,1.7,6.4-0.1l1.6-1.7l1.7,1.6c1.8,1.7,4.7,1.7,6.4-0.1l3.7-3.8c1.7-1.8,1.7-4.7-0.1-6.4L368.3,161.8z"
            />
            <title>Need to maintain the number of soldiers</title>
            <text
              transform="matrix(0.9999 -1.043959e-02 1.043959e-02 0.9999 352.4758 157.4642)"
              className="st7"
            >
              <tspan x={0} y={0} className="st24 st1 st83">
                {"Need to "}
              </tspan>
              <tspan x={-0.6} y={3.9} className="st24 st1 st83">
                {"maintain "}
              </tspan>
              <tspan x={-4.9} y={7.8} className="st24 st1 st83">
                {"the number of "}
              </tspan>
              <tspan x={0.8} y={11.7} className="st24 st1 st83">
                {"soldiers"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K3">
            <ellipse
              transform="matrix(0.1655 -0.9862 0.9862 0.1655 109.9615 465.6726)"
              className="KJD"
              cx={330.1}
              cy={167.9}
              rx={10.9}
              ry={10.9}
            />

            <title>Keyword: military reduction system</title>
            <text transform="matrix(1 0 0 1 323.4614 164.0332)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st81">
                {"military "}
              </tspan>
              <tspan x={-2.1} y={4.8} className="st24 st1 st81">
                {"reduction "}
              </tspan>
              <tspan x={1} y={9.6} className="st24 st1 st81">
                {"system"}
              </tspan>
            </text>
          </g>
          <g className="T2-1-K4">
            <ellipse
              transform="matrix(0.1607 -0.987 0.987 0.1607 71.5962 481.494)"
              className="KJD"
              cx={318.9}
              cy={198.7}
              rx={21.7}
              ry={21.7}
            />

            <title>Keyword: Unable to maintain 500,000 troops</title>
            <text transform="matrix(1 0 0 1 306.1509 191.4131)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st72">
                {"Unable to "}
              </tspan>
              <tspan x={1.4} y={7} className="st24 st1 st72">
                {"maintain "}
              </tspan>
              <tspan x={1.7} y={14} className="st24 st1 st72">
                {"500,000 "}
              </tspan>
              <tspan x={5.4} y={21} className="st24 st1 st72">
                {"troops"}
              </tspan>
            </text>
          </g>
          <g className="T2-2">
            <circle className="st15" cx={425.4} cy={176.6} r={48.6} />

            <title>Keyword: Recruitment Problem, What's the Solution?</title>
            <text transform="matrix(1 0 0 1 389.0738 116.8055)">
              <tspan x={0} y={0} className="st0 st1 st4">
                {"Recruitment Problem, "}
              </tspan>
              <tspan x={1.1} y={7.6} className="st0 st1 st4">
                {"What's the Solution? "}
              </tspan>
            </text>
          </g>
          <g className="T2-2-P1">
            <path
              className="PHR"
              d="M461.1,160l2.5-2.5c2.8-2.8,2.8-7.5,0-10.3l-6.1-6.1c-2.8-2.8-7.5-2.8-10.3,0l-2.5,2.5l-2.5-2.5 c-2.8-2.8-7.5-2.8-10.3,0l-6.1,6.1c-2.8,2.8-2.8,7.5,0,10.3l2.5,2.5l-2.5,2.5c-2.8,2.8-2.8,7.5,0,10.3l6.1,6.1 c2.8,2.8,7.5,2.8,10.3,0l2.5-2.5l2.5,2.5c2.8,2.8,7.5,2.8,10.3,0l6.1-6.1c2.8-2.8,2.8-7.5,0-10.3L461.1,160z"
            />

            <title>
              Keyword: Introduce AVMS after quality improvement and
              modernization
            </title>
            <text transform="matrix(1 0 0 1 435.5918 149.952)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st33">
                {"Introduce"}
              </tspan>
              <tspan x={2.7} y={5.2} className="st24 st1 st33">
                {"AVMS "}
              </tspan>
              <tspan x={-3} y={10.5} className="st24 st1 st33">
                {"after quality "}
              </tspan>
              <tspan x={-4.4} y={15.7} className="st24 st1 st33">
                {"improvement "}
              </tspan>
              <tspan x={-9.4} y={20.9} className="st24 st1 st33">
                {"and modernization"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J1">
            <circle className="JKT" cx={415.9} cy={140.7} r={11.2} />

            <title>Keyword: A small elite military</title>
            <text transform="matrix(1 0 0 1 409.8721 137.3826)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st84">
                {"A small "}
              </tspan>
              <tspan x={2.6} y={4.4} className="st24 st1 st84">
                {"elite "}
              </tspan>
              <tspan x={0.5} y={8.8} className="st24 st1 st84">
                {"military"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-L1">
            <path
              className="LJS"
              d="M459.3,197.9l2-2c2.3-2.3,2.3-6,0-8.3l-4.9-4.9c-2.3-2.3-6-2.3-8.3,0l-2,2l-2-2c-2.3-2.3-6-2.3-8.3,0 l-4.9,4.9c-2.3,2.3-2.3,6,0,8.3l2,2l-2,2c-2.3,2.3-2.3,6,0,8.3l4.9,4.9c2.3,2.3,6,2.3,8.3,0l2-2l2,2c2.3,2.3,6,2.3,8.3,0l4.9-4.9 c2.3-2.3,2.3-6,0-8.3L459.3,197.9z"
            />

            <title>Keyword: Smart Army System</title>
            <text transform="matrix(1 0 0 1 437.4053 192.2627)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st86">
                {"Smart "}
              </tspan>
              <tspan x={0.8} y={7.3} className="st24 st1 st86">
                {"Army "}
              </tspan>
              <tspan x={-0.7} y={14.7} className="st24 st1 st86">
                {"System"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J2">
            <circle className="JKT" cx={397.1} cy={160.4} r={15.4} />

            <title>Keyword: Military elite through reduction</title>
            <text transform="matrix(1 0 0 1 384.6314 157.6614)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st32">
                {"Military elite "}
              </tspan>
              <tspan x={4.7} y={5.2} className="st24 st1 st32">
                {"through"}
              </tspan>
              <tspan x={3.3} y={10.5} className="st24 st1 st32">
                {"reduction"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J3">
            <circle className="JKT" cx={388.6} cy={184.5} r={10.1} />

            <title>Keyword: Mechanization of the military</title>
            <text transform="matrix(1 0 0 1 379.8096 183.7493)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st85">
                {"Mechanization "}
              </tspan>
              <tspan x={0.9} y={2.9} className="st24 st1 st85">
                {"of the military"}
              </tspan>
            </text>
          </g>
          <g className="T2-2-J4">
            <circle className="JKT" cx={410.6} cy={202.8} r={18} />

            <title>
              Keyword: Reorganization of the military to focus on professional
              soldiers
            </title>
            <text transform="matrix(1 0 0 1 396.5518 195.9227)" className="st7">
              <tspan x={0} y={0} className="st24 st1 st31">
                {"Reorganization "}
              </tspan>
              <tspan x={1.2} y={4.9} className="st24 st1 st31">
                {"of the military "}
              </tspan>
              <tspan x={3.6} y={9.8} className="st24 st1 st31">
                {"to focus on "}
              </tspan>
              <tspan x={2.9} y={14.6} className="st24 st1 st31">
                {"professional "}
              </tspan>
              <tspan x={7.7} y={19.5} className="st24 st1 st31">
                {"soldiers"}
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
export default CP2;
