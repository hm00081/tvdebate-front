/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect, ReactNode } from "react";

interface TooltipState {
  display: boolean;
  x: number;
  y: number;
}

interface CP1KProps extends React.SVGProps<SVGSVGElement> {
  onTitleClick: (index: number) => void;
}

const CP1K = ({ onTitleClick, ...props }: CP1KProps) => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    display: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // console.log("Tooltip state changed:", tooltip);
  }, [tooltip]);

  const handleMouseOver = (e: React.MouseEvent<SVGGElement, MouseEvent>) => {
    //console.log("Mouse Over!");
    if (e.currentTarget && e.currentTarget.classList.contains("CP1")) {
      setTooltip({
        display: true,
        x: e.pageX,
        y: e.pageY,
      });
    }
  };
  const handleMouseOut = () => {
    //console.log("Mouse Out!");
    setTooltip({ display: false, x: 0, y: 0 });
  };

  // 각 path 요소에 대한 참조 생성
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);

  useEffect(() => {
    if (pathRef1.current && pathRef2.current) {
      //@ts-ignore
      const bbox1 = pathRef1.current.getBBox();
      //@ts-ignore
      const bbox2 = pathRef2.current.getBBox();

      // 바운딩 박스의 너비와 높이 로깅
      console.log("Path 1 bounding box:", bbox1);
      console.log("Path 2 bounding box:", bbox2);
    }
  }, []);

  const titleClickHandler = (index: number) => {
    if (typeof onTitleClick === "function") {
      onTitleClick(index);
    } else {
      console.error("onTitleClick is not a function");
    }
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
        xmlSpace="preserve"
        {...props}
      >
        {/* 다른 것도 수정해주기 */}
        <style type="text/css">
          {
            "\n\t.PHR{fill: #bf6020;}.KJD{fill: #1da36b;}.LJS{fill: #ac1d3b;}.JKT{fill: #1e96d1;}.st0{fill:#040000;}\n\t.st1{font-family:'NanumGothicExtraBold';}\n\t.st4{font-size:6.336px;}\n\t.st5{font-size:5.1276px;}\n\t.st6{font-size:8.4392px;}\n\t.st7{enable-background:new    ;}\n\t.st8{font-size:7.4863px;}\n\t.st9{font-size:6.8885px;}\n\t.st10{font-size:6.4688px;}\n\t.st11{font-size:8.1073px;}\n\t.st12{font-size:8.3036px;}\n\t.st13{font-size:14.3527px;}\n\t.st14{font-size:8.2107px;}\n\t.st15{fill:none;stroke:#7F8080;stroke-miterlimit:10;}\n\t.st16{fill:#BF6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st17{fill:#808080;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st18{fill:#AC1D3B;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st19{fill:#1da36b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st20{fill:#0EA0E2;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st21{fill:#ac1d3b;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st22{fill:#bf6020;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st23{fill:#bf6020;}\n\t.st24{fill:#FFFFFF;}\n\t.st25{font-size:3.1999px;}\n\t.st26{fill:#1da36b;}\n\t.st27{font-size:4.8348px;}\n\t.st28{fill:#ac1d3b;}\n\t.st29{font-size:4.6437px;}\n\t.st30{fill:#1e96d1;}\n\t.st31{font-size:4.0673px;}\n\t.st32{font-size:4.364px;}\n\t.st33{font-size:4.3567px;}\n\t.st34{font-size:7.5035px;}\n\t.st35{font-size:3.1978px;}\n\t.st36{font-size:3.3785px;}\n\t.st37{font-size:4.0259px;}\n\t.st38{font-size:3.0489px;}\n\t.st39{font-size:6.8847px;}\n\t.st40{font-size:4.8705px;}\n\t.st41{font-size:7.0167px;}\n\t.st42{font-size:4.0832px;}\n\t.st43{font-size:4.7467px;}\n\t.st44{font-size:4.1583px;}\n\t.st45{font-size:5.5797px;}\n\t.st46{font-size:4.5574px;}\n\t.st47{font-size:3.9033px;}\n\t.st48{font-size:5.03px;}\n\t.st49{font-size:5.0613px;}\n\t.st50{font-size:3.2238px;}\n\t.st51{font-size:6.551px;}\n\t.st52{font-size:6.2746px;}\n\t.st53{font-size:4.8224px;}\n\t.st54{font-size:5.0769px;}\n\t.st55{font-size:7.6649px;}\n\t.st56{font-size:5.2097px;}\n\t.st57{font-size:5.7785px;}\n\t.st58{font-size:4.168px;}\n\t.st59{font-size:7.3889px;}\n\t.st60{font-size:4.7606px;}\n\t.st61{font-size:2.6512px;}\n\t.st62{font-size:4.9984px;}\n\t.st63{font-size:4.319px;}\n\t.st64{font-size:4.5174px;}\n\t.st65{font-size:6.7674px;}\n\t.st66{font-size:3.9446px;}\n\t.st67{font-size:6.3288px;}\n\t.st68{font-size:4.8715px;}\n\t.st69{font-size:3.6476px;}\n\t.st70{font-size:6.1604px;}\n\t.st71{font-size:5.3491px;}\n\t.st72{font-size:5.846px;}\n\t.st73{font-size:8px;}\n\t.st74{font-size:57.0758px;}\n\t.st75{font-size:3.9339px;}\n\t.st76{font-size:2.7333px;}\n\t.st77{font-size:1.8411px;}\n\t.st78{font-size:4.5882px;}\n\t.st79{fill:#1e96d1;}\n\t.st80{font-size:3.3048px;}\n\t.st81{font-size:4.0122px;}\n\t.st82{font-size:3.7104px;}\n\t.st83{font-size:3.237px;}\n\t.st84{font-size:3.6621px;}\n\t.st85{font-size:2.4555px;}\n\t.st86{font-size:6.122px;}\n\t.st87{font-size:4.0856px;}\n\t.st88{font-size:4.3994px;}\n\t.st89{font-size:4.5279px;}\n\t.st90{font-size:4.121px;}\n\t.st91{font-size:2.9352px;}\n\t.st92{font-size:7.7877px;}\n\t.st93{font-size:5.3551px;}\n\t.st94{font-size:6.073px;}\n\t.st95{font-size:3.4659px;}\n\t.st96{font-size:5.5366px;}\n\t.st97{font-size:4.9445px;}\n\t.st98{font-size:5.2054px;}\n\t.st99{font-size:4.701px;}\n\t.st100{font-size:2.7254px;}\n\t.st101{font-size:6.284px;}\n\t.st102{font-size:3.6779px;}\n\t.st103{font-size:2.4364px;}\n\t.st104{font-size:4.4063px;}\n\t.st105{fill:none;stroke:#C4C4C4;stroke-miterlimit:10;}\n\t.st106{font-size:3.8789px;}\n\t.st107{font-size:4.1619px;}\n\t.st108{font-size:4.1549px;}\n\t.st109{font-size:3.4925px;}\n\t.st110{font-size:2.3417px;}\n\t.st111{font-size:5.8384px;}\n"
          }
        </style>
        <g className="CP1">
          <g className="T1">
            <g onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <title>토론 시작 및 모병제 도입</title>
              <text
                style={{ fontSize: "6px" }}
                transform="matrix(1 0 0 1 59.5201 47.5178)"
                className="st7"
              >
                <tspan
                  onClick={() => titleClickHandler(0)}
                  x={0}
                  y={0}
                  className="st0 st1 st13"
                >
                  {"토론 시작 및 모병제 도입"}
                </tspan>
                {/* <tspan x={-3} y={17.2} className="st0 st1 st13">
                  {"all volunteer military system(AVMS)"}
                </tspan> */}
              </text>
            </g>
            <g className="P1">
              <path
                className="st16"
                d="M137.4,64.3v-8.1c-28.2,0-52.8,9-74.4,27l5.2,6.2C88.3,72.7,111.3,64.3,137.4,64.3z"
              />
              <path
                className="st17"
                d="M51.5,107.1c5.1-6.7,10.4-12.3,16.8-17.7l0,0l-5.2-6.2c-6.9,5.8-12.6,11.9-18.1,18.9L51.5,107.1L51.5,107.1z"
              />
              <path
                className="st18"
                d="M35.7,137c3.9-11.5,8.5-20.1,15.8-29.7l-6.4-4.9c-7.8,10.4-12.8,19.7-17.1,32L35.7,137L35.7,137z"
              />
              <path
                className="st19"
                d="M34.6,203.4c-6.8-22.5-6.4-44.3,1.1-66.6l-7.7-2.7c-8.2,23.9-8.6,47.4-1.3,71.5L34.6,203.4L34.6,203.4z"
              />
              <path
                className="st17"
                d="M39.2,215.8c-2-4.4-3.2-7.7-4.5-12.3l-7.7,2.4c1.5,5.1,2.8,8.5,4.9,13.3L39.2,215.8L39.2,215.8z"
              />
              <path
                className="st18"
                d="M66.8,253.2c-12-10.5-21.2-22.9-27.7-37.4l-7.5,3.3c6.9,15.7,16.8,29.1,29.8,40.3L66.8,253.2L66.8,253.2z"
              />
              <path
                className="st20"
                d="M104.2,274.4c-14.4-4.8-25.9-11.2-37.4-21.2l-5.3,6.1c12.3,10.7,24.6,17.7,40.2,22.7L104.2,274.4L104.2,274.4 z"
              />
              <path
                className="st19"
                d="M113.2,276.8c-3.5-0.8-5.6-1.4-9.1-2.5l-2.5,7.7c3.7,1.3,5.9,1.8,9.7,2.7L113.2,276.8L113.2,276.8z"
              />
              <path
                className="st17"
                d="M113.2,276.8l-1.8,8c13.5,3.2,26.3,3.8,40.2,2.1l-1-8.1C137.7,280.3,125.8,279.7,113.2,276.8z"
              />
              <path
                className="st18"
                d="M158,277.7c-2.8,0.5-4.7,0.9-7.5,1.1l0,0l1,8.1c3-0.4,5.1-0.6,8-1.3L158,277.7L158,277.7z"
              />
              <path
                className="st17"
                d="M158,277.7l1.5,8c4.8-0.9,9-2,13.6-3.5l-2.5-7.7C166.4,275.8,162.4,276.8,158,277.7z"
              />
              <path
                className="st18"
                d="M222.2,238.3c-13.6,17.4-30.3,29.2-51.5,36.1l0,0l2.5,7.7c22.7-7.3,40.7-20,55.5-38.8L222.2,238.3 L222.2,238.3z"
              />
              <path
                className="st17"
                d="M222.2,238.3l6.4,4.9c1.4-1.8,2.3-3,3.7-4.9l-6.7-4.7C224.3,235.5,223.6,236.5,222.2,238.3z"
              />
              <path
                className="st20"
                d="M244.7,181.3c-1.8,20-7.6,35.9-19.1,52.4l0,0l6.7,4.7c12.4-17.7,18.6-34.7,20.5-56.3L244.7,181.3L244.7,181.3 z"
              />
              <path
                className="st17"
                d="M252.9,163.9l-8.1,0.5l0,0c0.4,5.4,0.4,11.5-0.1,16.9l8.1,0.8C253.3,176.2,253.3,169.7,252.9,163.9z"
              />
              <path
                className="st16"
                d="M244.8,164.5l8.1-0.5c-1.5-21.3-7.6-38.9-19.5-56.6l-6.7,4.5C237.7,128.2,243.4,144.5,244.8,164.5z"
              />
              <path
                className="st17"
                d="M226.6,111.7L226.6,111.7l6.7-4.5c-1.8-2.7-2.8-4-4.8-6.6l-6.4,4.9C224,108,225,109.3,226.6,111.7z"
              />
              <path
                className="st19"
                d="M222.2,105.6L222.2,105.6l6.4-4.9c-10.7-13.8-23.1-24-38.7-31.8l-3.7,7.2C200.7,83.4,212.2,92.9,222.2,105.6z "
              />
              <path
                className="st17"
                d="M186.3,76.1L186.3,76.1l3.7-7.2c-17.3-8.8-33.1-12.6-52.5-12.6v8.1C155.6,64.3,170.1,67.9,186.3,76.1z"
              />
            </g>
          </g>
          <g className="T1-1">
            <circle className="st15" cx={81.5} cy={172.2} r={51.7} />
            <title>현 사회상황</title>
            <text transform="matrix(1 0 0 1 50 104.3537)" className="st7">
              <tspan x={5} y={9.9} className="st0 st1 st14">
                {"현 사회상황"}
              </tspan>
            </text>
          </g>
          <g className="T1-1-J1">
            <ellipse
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -89.5315 81.101)"
              className="JKT"
              cx={53.1}
              cy={148.6}
              rx={14.6}
              ry={14.6}
            />

            <title>키워드: 인구 절벽위협</title>
            <text
              style={{ fontSize: "6.4px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 40.7148 146.8604)"
              className="st7"
            >
              <tspan x={11} y={-1} className="st24 st1 ">
                {"인구"}
              </tspan>
              <tspan x={11} y={6} className="st24 st1">
                {"절벽위협"}
              </tspan>
            </text>
          </g>
          <g className="T1-1-P1">
            <title>안보위협 과소평가</title>
            <path
              //ref={pathRef1}
              className="PHR"
              d="M75.7,169.7l1.3-1.3c1.3-1.3,1.3-3.6,0-4.9l-2.9-2.9c-1.3-1.3-3.6-1.3-4.9,0l-1.3,1.3l-1.3-1.3 c-1.3-1.3-3.6-1.3-4.9,0l-2.9,2.9c-1.3,1.3-1.3,3.6,0,4.9l1.3,1.3l-1.3,1.3c-1.3,1.3-1.3,3.6,0,4.9l2.9,2.9c1.3,1.3,3.6,1.3,4.9,0 l1.3-1.3l1.3,1.3c1.3,1.3,3.6,1.3,4.9,0l2.9-2.9c1.3-1.3,1.3-3.6,0-4.9L75.7,169.7z"
            />
            <text
              style={{ fontSize: "4.5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 60.6143 168.4858)"
              className="st7"
            >
              <tspan x={8} y={0} className="st24 st1">
                {"안보위협 "}
              </tspan>
              <tspan x={8} y={5} className="st24 st1 ">
                {"과소평가"}
              </tspan>
            </text>
          </g>
          <g className="T1-1-L1">
            <path
              className="LJS"
              d="M102.6,143.5l2.5-2.5c2.6-2.6,2.6-6.9,0-9.5l-5.6-5.6c-2.6-2.6-6.9-2.6-9.5,0l-2.5,2.5l-2.5-2.5 c-2.6-2.6-6.9-2.6-9.5,0l-5.6,5.6c-2.6,2.6-2.6,6.9,0,9.5l2.5,2.5l-2.5,2.5c-2.6,2.6-2.6,6.9,0,9.5l5.6,5.6c2.6,2.6,6.9,2.6,9.5,0 l2.5-2.5l2.5,2.5c2.6,2.6,6.9,2.6,9.5,0l5.6-5.6c2.6-2.6,2.6-6.9,0-9.5L102.6,143.5z"
            />

            <title>키워드: 안보위협 과소평가</title>
            <text
              style={{ fontSize: "8px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 69.2554 139.6934)"
              className="st7"
            >
              <tspan x={18} y={0} className="st24 st1">
                {"안보위협 "}
              </tspan>
              <tspan x={18} y={13} className="st24 st1">
                {"과소평가 "}
              </tspan>
            </text>
          </g>
          <g className="T1-1-P2">
            <path
              className="PHR"
              d="M117.6,190l3-3c3.2-3.2,3.2-8.5,0-11.7l-6.9-6.9c-3.2-3.2-8.5-3.2-11.7,0l-3,3l-3-3c-3.2-3.2-8.5-3.2-11.7,0 l-6.9,6.9c-3.2,3.2-3.2,8.5,0,11.7l3,3l-3,3c-3.2,3.2-3.2,8.5,0,11.7l6.9,6.9c3.2,3.2,8.5,3.2,11.7,0l3-3l3,3 c3.2,3.2,8.5,3.2,11.7,0l6.9-6.9c3.2-3.2,3.2-8.5,0-11.7L117.6,190z"
            />

            <title>키워드: 북 핵위협</title>
            <text
              style={{ fontSize: "12px" }}
              transform="matrix(1 0 0 1 89.9458 179.4644)"
              className="st7"
            >
              <tspan x={3} y={6.5} className="st24 st1">
                {"북"}
              </tspan>
              <tspan x={-7} y={20.5} className="st24 st1">
                {"핵위협"}
              </tspan>
            </text>
          </g>
          <g className="T1-1-J2">
            <ellipse
              transform="matrix(0.6641 -0.7477 0.7477 0.6641 -114.6271 89.0518)"
              className="JKT"
              cx={41.8}
              cy={172.1}
              rx={11.2}
              ry={11.2}
            />

            <title>키워드: 청년실업률 증가</title>
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 31.8335 171.4048)"
              className="st7"
            >
              <tspan x={10} y={-3} className="st24 st1">
                {"청년"}
              </tspan>
              <tspan x={10} y={2} className="st24 st1">
                {"실업률"}
              </tspan>
              <tspan x={10} y={7} className="st24 st1">
                {"증가"}
              </tspan>
            </text>
          </g>
          <g className="T1-1-J3">
            <ellipse
              transform="matrix(0.3847 -0.923 0.923 0.3847 -145.8439 173.9329)"
              className="JKT"
              cx={57.5}
              cy={196.4}
              rx={17.2}
              ry={17.2}
            />

            <title>키워드: 50만군 유지불가</title>
            <text
              style={{ fontSize: "8px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 45.5747 189.7864)"
              className="st7"
            >
              <tspan x={12} y={2} className="st24 st1">
                {"50만군"}
              </tspan>
              <tspan x={12} y={12} className="st24 st1">
                {"유지불가"}
              </tspan>
            </text>
          </g>
          <g className="T1-2">
            <circle className="st15" cx={188.8} cy={171.7} r={55.2} />

            <title>키워드: 현 군상황</title>
            <text transform="matrix(1 0 0 1 185 98.9778)" className="st7">
              {/* <tspan x={0} y={0} className="st0 st1 st14">
                {"Current "}
              </tspan> */}
              <tspan x={-16.5} y={9.9} className="st0 st1 st14">
                {"현 군상황"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-K1">
            <ellipse
              transform="matrix(0.2318 -0.9728 0.9728 0.2318 -27.5608 273.884)"
              className="KJD"
              cx={159.6}
              cy={154.4}
              rx={19.4}
              ry={19.4}
            />

            <title>키워드: 청년인구 감소</title>
            <text
              style={{ fontSize: "8.2px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 145.1528 148.4434)"
              className="st7"
            >
              <tspan x={15} y={3} className="st24 st1">
                {"청년인구"}
              </tspan>
              <tspan x={15} y={12} className="st24 st1">
                {"감소"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-P1">
            <path
              className="PHR"
              d="M219.2,206.8l1.7-1.7c1.8-1.8,1.8-4.7,0-6.5l-3.8-3.8c-1.8-1.8-4.7-1.8-6.5,0l-1.7,1.7l-1.7-1.7 c-1.8-1.8-4.7-1.8-6.5,0l-3.8,3.8c-1.8,1.8-1.8,4.7,0,6.5l1.7,1.7l-1.7,1.7c-1.8,1.8-1.8,4.7,0,6.5l3.8,3.8c1.8,1.8,4.7,1.8,6.5,0 l1.7-1.7l1.7,1.7c1.8,1.8,4.7,1.8,6.5,0l3.8-3.8c1.8-1.8,1.8-4.7,0-6.5L219.2,206.8z"
            />

            <title>키워드: 미비한 군정책검토</title>
            <text
              style={{ fontSize: "5.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 200.4277 201.721)"
              className="st7"
            >
              <tspan x={9} y={3} className="st24 st1">
                {"미비한"}
              </tspan>
              <tspan x={9} y={11} className="st24 st1">
                {"군정책검토 "}
              </tspan>
            </text>
          </g>
          <g className="T1-2-L1">
            <path
              className="LJS"
              d="M223.4,149l3.1-3.1c3.3-3.3,3.3-8.9,0-12.2l-7.2-7.2c-3.3-3.3-8.9-3.3-12.2,0l-3.1,3.1l-3.1-3.1 c-3.3-3.3-8.9-3.3-12.2,0l-7.2,7.2c-3.3,3.3-3.3,8.9,0,12.2l3.1,3.1l-3.1,3.1c-3.3,3.3-3.3,8.9,0,12.2l7.2,7.2 c3.3,3.3,8.9,3.3,12.2,0l3.1-3.1l3.1,3.1c3.3,3.3,8.9,3.3,12.2,0l7.2-7.2c3.3-3.3,3.3-8.9,0-12.2L223.4,149z"
            />

            <title>키워드: 감군대비 무대책</title>
            <text
              style={{ fontSize: "9.3px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 189.605 143.2314)"
              className="st7"
            >
              <tspan x={14} y={1} className="st24 st1">
                {"감군대비"}
              </tspan>
              <tspan x={14} y={14} className="st24 st1">
                {"무대책"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-J1">
            <ellipse
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -76.6033 186.8325)"
              className="JKT"
              cx={187.2}
              cy={185.9}
              rx={12.9}
              ry={12.9}
            />

            <title>키워드: 스마트군대 전환</title>
            <text
              style={{ fontSize: "5px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 176.1748 184.9607)"
              className="st7"
            >
              <tspan x={11} y={-3} className="st24 st1">
                {"스마트"}
              </tspan>
              <tspan x={11} y={3} className="st24 st1">
                {"군대"}
              </tspan>
              <tspan x={11} y={9} className="st24 st1">
                {"전환"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-K2">
            <ellipse
              transform="matrix(0.5227 -0.8525 0.8525 0.5227 -88.026 224.9724)"
              className="KJD"
              cx={156.9}
              cy={191.1}
              rx={17.6}
              ry={17.6}
            />

            <title>키워드: 군 부적응자 매년증가</title>
            <text
              style={{ fontSize: "7px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 144.7456 184.1839)"
              className="st7"
            >
              <tspan x={12} y={0} className="st24 st1">
                {"군"}
              </tspan>
              <tspan x={12} y={8} className="st24 st1">
                {"부적응자"}
              </tspan>
              <tspan x={12} y={16} className="st24 st1">
                {"매년증가"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-L2">
            <path
              className="LJS"
              d="M236.9,184.1l1.7-1.7c1.8-1.8,1.8-4.7,0-6.5l-3.8-3.8c-1.8-1.8-4.7-1.8-6.5,0l-1.7,1.7l-1.7-1.7 c-1.8-1.8-4.7-1.8-6.5,0l-3.8,3.8c-1.8,1.8-1.8,4.7,0,6.5l1.7,1.7l-1.7,1.7c-1.8,1.8-1.8,4.7,0,6.5l3.8,3.8c1.8,1.8,4.7,1.8,6.5,0 l1.7-1.7l1.7,1.7c1.8,1.8,4.7,1.8,6.5,0l3.8-3.8c1.8-1.8,1.8-4.7,0-6.5L236.9,184.1z"
            />

            <title>키워드: 군인 수 25만 적정</title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 217.3013 179.4031)"
              className="st7"
            >
              <tspan x={10} y={1} className="st24 st1">
                {"군인 수"}
              </tspan>
              <tspan x={10} y={7.5} className="st24 st1">
                {"25만"}
              </tspan>
              <tspan x={10} y={14} className="st24 st1">
                {"적정"}
              </tspan>
            </text>
          </g>
          <g className="T1-2-K3">
            <path
              className="KJD"
              d="M181.4,197.8c7.7,0,14,6.3,14,14c0,7.7-6.3,14-14,14c-7.7,0-14-6.3-14-14 C167.4,204.1,173.6,197.8,181.4,197.8z"
            />

            <title>키워드: 관심병사 증가</title>
            <text
              style={{ fontSize: "6px" }}
              textAnchor="middle"
              transform="matrix(1 0 0 1 171.5542 208.66)"
              className="st7"
            >
              <tspan x={9} y={1} className="st24 st1">
                {"관심병사"}
              </tspan>
              <tspan x={9} y={9} className="st24 st1">
                {"증가"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
      {/* {tooltip.display && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "white",
            border: "1px solid black",
            zIndex: 1000,
            transform: "translate(-50%, 20px)",
          }}
        >
          <svg viewBox="0 0 1753 318" width="400" height="200">
            <g transform="scale(1.5)">
              <MySvgComponent />
            </g>
          </svg>
        </div>
      )} */}
    </>
  );
};
export default CP1K;