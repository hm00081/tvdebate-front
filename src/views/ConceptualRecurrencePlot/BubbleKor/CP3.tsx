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
const CP3K = (props) => {
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
        <g className="CP3">
          <g className="T3">
            <title>키워드: 모병제, 병력 충원에 문제없나?</title>
            <text
              transform="matrix(1 0 0 1 570.109 32.4924)"
              className="st0 st1 st13"
            >
              {"모병제, 병력 충원에 "}
            </text>
            <text
              transform="matrix(1 0 0 1 600.0191 49.6897)"
              className="st0 st1 st13"
            >
              {"문제 없나?"}
            </text>
          </g>
          <g className="T3-1">
            <circle className="st15" cx={564.6} cy={172.7} r={46.4} />

            <title>키워드: 인력확충 문제, 해결법은?</title>
            <text
              style={{ fontSize: "7px" }}
              transform="matrix(1 0 0 1 538.8662 115.576)"
            >
              <tspan x={0} y={-2} className="st0 st1 st14">
                {"인력확충 문제,"}
              </tspan>
              <tspan x={5} y={7.6} className="st0 st1 st14">
                {"해결법은?"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-P1">
            <path
              className="PHR"
              d="M598.7,156.9l2.4-2.4c2.7-2.7,2.7-7.1,0-9.8l-5.8-5.8c-2.7-2.7-7.1-2.7-9.8,0l-2.4,2.4l-2.4-2.4 c-2.7-2.7-7.1-2.7-9.8,0l-5.8,5.8c-2.7,2.7-2.7,7.1,0,9.8l2.4,2.4l-2.4,2.4c-2.7,2.7-2.7,7.1,0,9.8l5.8,5.8c2.7,2.7,7.1,2.7,9.8,0 l2.4-2.4l2.4,2.4c2.7,2.7,7.1,2.7,9.8,0l5.8-5.8c2.7-2.7,2.7-7.1,0-9.8L598.7,156.9z"
            />

            <title>키워드: 질적향상과 현대화 후 모병제 도입</title>
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 574.4023 147.3257)"
              className="st7"
            >
              <tspan x={10} y={3} className="st24 st1">
                {"질적향상과"}
              </tspan>

              <tspan x={10} y={11} className="st24 st1">
                {"현대화 후"}
              </tspan>

              <tspan x={10} y={19} className="st24 st1">
                {"모병제 도입"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J1">
            <circle className="JKT" cx={555.6} cy={138.5} r={10.7} />

            <title>키워드: 소수 정예화군</title>
            <text
              style={{ fontSize: "5.6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 549.8735 135.3394)"
              className="st7"
            >
              <tspan x={5} y={0} className="st24 st1">
                {"소수"}
              </tspan>
              <tspan x={5} y={6} className="st24 st1">
                {"정예화"}
              </tspan>
              <tspan x={5} y={12} className="st24 st1">
                {"군"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-L1">
            <path
              className="LJS"
              d="M597,193l1.9-1.9c2.2-2.2,2.2-5.7,0-7.9l-4.6-4.6c-2.2-2.2-5.7-2.2-7.9,0l-1.9,1.9l-1.9-1.9 c-2.2-2.2-5.7-2.2-7.9,0l-4.6,4.6c-2.2,2.2-2.2,5.7,0,7.9l1.9,1.9L570,195c-2.2,2.2-2.2,5.7,0,7.9l4.6,4.6c2.2,2.2,5.7,2.2,7.9,0 l1.9-1.9l1.9,1.9c2.2,2.2,5.7,2.2,7.9,0l4.6-4.6c2.2-2.2,2.2-5.7,0-7.9L597,193z"
            />

            <title>키워드: 스마트군대 체제</title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 576.1318 187.6772)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1 ">
                {"스마트"}
              </tspan>
              <tspan x={8} y={7.5} className="st24 st1 ">
                {"군대"}
              </tspan>
              <tspan x={8} y={15} className="st24 st1 ">
                {"체제"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J2">
            <circle className="JKT" cx={537.7} cy={157.3} r={14.7} />

            <title>키워드: 감축을 통한 군 정예화</title>
            <text
              style={{ fontSize: "5.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 525.8018 154.6792)"
              className="st7"
            >
              <tspan x={11} y={-3} className="st24 st1">
                {"감축을"}
              </tspan>
              <tspan x={11} y={4} className="st24 st1">
                {"통한"}
              </tspan>
              <tspan x={11} y={11} className="st24 st1">
                {"군 정예화"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J3">
            <circle className="JKT" cx={529.5} cy={180.3} r={9.6} />

            <title>키워드: 군대 기계화</title>
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 521.2036 179.5581)"
              className="st7"
            >
              <tspan x={8} y={-1} className="st24 st1">
                {"군대"}
              </tspan>
              <tspan x={8} y={5} className="st24 st1">
                {"기계화"}
              </tspan>
            </text>
          </g>
          <g className="T3-1-J4">
            <circle className="JKT" cx={550.6} cy={197.7} r={17.1} />

            <title>키워드: 직업군인위주 편제개편</title>
            <text
              style={{ fontSize: "6.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 537.1704 191.1675)"
              className="st7"
            >
              <tspan x={13} y={0} className="st24 st1 ">
                {"직업군인 "}
              </tspan>

              <tspan x={13} y={8} className="st24 st1 ">
                {"위주"}
              </tspan>

              <tspan x={13} y={16} className="st24 st1">
                {"편제개편"}
              </tspan>
            </text>
          </g>
          <g className="T3-2">
            <circle className="st15" cx={675.1} cy={175.6} r={64} />
            <title>모병제, 과연 현실적인가?</title>
            <text
              style={{ fontSize: "7px" }}
              transform="matrix(1 0 0 1 641.1006 105.2332)"
              className="st0 st1 st6"
            >
              <tspan x={21} y={-5} className="st0 st1 st14">
                {"모병제,"}
              </tspan>
              <tspan x={8} y={4} className="st0 st1 st14">
                {"과연 현실적인가?"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L1">
            <path
              className="LJS"
              d="M720.1,142.4l2-2c2.2-2.2,2.2-5.6,0-7.7l-4.6-4.6c-2.2-2.2-5.6-2.2-7.7,0l-2,2l-2-2c-2.2-2.2-5.6-2.2-7.7,0 l-4.6,4.6c-2.2,2.2-2.2,5.6,0,7.7l2,2l-2,2c-2.2,2.2-2.2,5.6,0,7.7l4.6,4.6c2.2,2.2,5.6,2.2,7.7,0l2-2l2,2c2.2,2.2,5.6,2.2,7.7,0 l4.6-4.6c2.2-2.2,2.2-5.6,0-7.7L720.1,142.4z"
            />
            <title>병력수요공급 예측불가</title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(0.9857 0 0 1 694.3354 136.2767)"
              className="st7"
            >
              <tspan x={13} y={2} className="st24 st1 ">
                {"병력"}
              </tspan>
              <tspan x={13} y={8} className="st24 st1 ">
                {"수요공급"}
              </tspan>
              <tspan x={13} y={14} className="st24 st1 ">
                {"예측불가"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-K1">
            <ellipse
              transform="matrix(0.3847 -0.9231 0.9231 0.3847 223.3512 688.9498)"
              className="KJD"
              cx={628.4}
              cy={177}
              rx={16.9}
              ry={16.9}
            />

            <title>키워드: 사회주류로의 발판제공</title>
            <text
              style={{ fontSize: "6.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 621.5742 171.0032)"
              className="st7"
            >
              <tspan x={7} y={0} className="st24 st1 ">
                {"사회주류"}
              </tspan>
              <tspan x={7} y={7} className="st24 st1 ">
                {"로의"}
              </tspan>
              <tspan x={7} y={14} className="st24 st1 ">
                {"발판제공"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J1">
            <ellipse className="JKT" cx={673.1} cy={130.7} rx={18} ry={18.3} />
            <title>고위층자녀 병역기피</title>
            <text
              style={{ fontSize: "7.1px" }}
              textAnchor="middle"
              transform="matrix(0.9897 0 0 1 664.2944 121.5696)"
              className="st7"
            >
              <tspan x={9} y={1} className="st24 st1">
                {"고위층 "}
              </tspan>
              <tspan x={9} y={9.5} className="st24 st1">
                {"자녀"}
              </tspan>
              <tspan x={9} y={18} className="st24 st1">
                {"병역기피"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J2">
            <ellipse
              className="JKT"
              cx={639.8}
              cy={145.2}
              rx={16.9}
              ry={17.2}
            />
            <title>정예화된 보병</title>
            <text
              style={{ fontSize: "7.2px" }}
              textAnchor="middle"
              transform="matrix(0.9897 0 0 1 633.1079 142.5726)"
              className="st7"
            >
              <tspan x={5} y={0} className="st24 st1">
                {"정예화된"}
              </tspan>
              <tspan x={5} y={9} className="st24 st1">
                {"보병 "}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L2">
            <path
              className="LJS"
              d="M696.3,175.8l3.3-3.3c3.7-3.7,3.7-9.7,0-13.4l-7.8-7.8c-3.7-3.7-9.7-3.7-13.4,0l-3.3,3.3l-3.3-3.3 c-3.7-3.7-9.7-3.7-13.4,0l-7.8,7.8c-3.7,3.7-3.7,9.7,0,13.4l3.3,3.3l-3.3,3.3c-3.7,3.7-3.7,9.7,0,13.4l7.8,7.8 c3.7,3.7,9.7,3.7,13.4,0l3.3-3.3l3.3,3.3c3.7,3.7,9.7,3.7,13.4,0l7.8-7.8c3.7-3.7,3.7-9.7,0-13.4L696.3,175.8z"
            />

            <title>키워드: 경제호황 모병어려움</title>
            <text
              style={{ fontSize: "11px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 658.2773 165.0125)"
              className="st7"
            >
              <tspan x={17} y={2} className="st24 st1">
                {"경제호황"}
              </tspan>
              <tspan x={17} y={15} className="st24 st1">
                {"모병"}
              </tspan>
              <tspan x={17} y={28} className="st24 st1">
                {"어려움"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L3">
            <path
              className="LJS"
              d="M733.2,176l2.1-2.1c2.3-2.3,2.3-6.1,0-8.5l-5-5c-2.3-2.3-6.1-2.3-8.5,0l-2.1,2.1l-2.1-2.1 c-2.3-2.3-6.1-2.3-8.5,0l-5,5c-2.3,2.3-2.3,6.1,0,8.5l2.1,2.1l-2.1,2.1c-2.3,2.3-2.3,6.1,0,8.5l5,5c2.3,2.3,6.1,2.3,8.5,0l2.1-2.1 l2.1,2.1c2.3,2.3,6.1,2.3,8.5,0l5-5c2.3-2.3,2.3-6.1,0-8.5L733.2,176z"
            />
            <title>일자리총량 일정</title>
            <text
              style={{ fontSize: "7.3px" }}
              textAnchor="middle"
              transform="matrix(1.0067 0 0 1 708.9961 171.3006)"
              className="st7"
            >
              <tspan x={11} y={0} className="st24 st1">
                {"일자리"}
              </tspan>
              <tspan x={11} y={7.5} className="st24 st1">
                {"총량"}
              </tspan>
              <tspan x={11} y={15} className="st24 st1">
                {"일정"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-J3">
            <ellipse
              className="JKT"
              cx={645.2}
              cy={210.9}
              rx={16.6}
              ry={16.7}
            />
            <title>21만 일자리 제공</title>
            <text
              style={{ fontSize: "7.5px" }}
              textAnchor="middle"
              transform="matrix(0.9931 0 0 1 637.5508 209.2518)"
              className="st7"
            >
              <tspan x={8} y={-4} className="st24 st1">
                {"21만"}
              </tspan>
              <tspan x={8} y={4} className="st24 st1">
                {"일자리"}
              </tspan>
              <tspan x={8} y={12} className="st24 st1">
                {"제공"}
              </tspan>
            </text>
          </g>
          <g className="T3-2-L4">
            <path
              className="LJS"
              d="M709.3,216.1l1.8-1.8c2-2,2-5.3,0-7.3l-4.3-4.3c-2-2-5.3-2-7.3,0l-1.8,1.8l-1.8-1.8c-2-2-5.3-2-7.3,0 l-4.3,4.3c-2,2-2,5.3,0,7.3l1.7,1.8l-1.8,1.8c-2,2-2,5.3,0,7.3l4.3,4.3c2,2,5.3,2,7.3,0l1.8-1.8l1.8,1.8c2,2,5.3,2,7.3,0l4.3-4.3 c2-2,2-5.3,0-7.3L709.3,216.1z"
            />

            <title>키워드: 미군모병 인원미달</title>
            <text
              style={{ fontSize: "6.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 689.9937 213.5838)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1">
                {"미군 모병"}
              </tspan>
              <tspan x={8} y={8} className="st24 st1">
                {"인원 미달"}
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
export default CP3K;
