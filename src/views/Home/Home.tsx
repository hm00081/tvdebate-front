// /* eslint-disable no-unused-vars */
// import { Button, Checkbox } from "antd";
// import React, { useState } from "react";
// import styles from "./Home.module.scss";
// import { Link } from "react-router-dom";
// import Axios from "axios";
// import {
//   aiopenAccessKey,
//   nodeExpressAddress,
//   pythonFlaskAddress,
// } from "../../constants/constants";
// import { TermType } from "../ConceptualRecurrencePlot/DataImporter";
// import { style } from "d3-selection";

// interface ComponentProps {}

// function Home(props: ComponentProps) {
//   const [termType, setTermType] = useState<TermType>("compound_term");

//   return (
//     <div className={styles.home}>
//       <div className={styles.serviceTitle}>MetaDebateVis</div>
//       <div className={styles.links}>
//         <Button
//           className={styles.button}
//           href={`/coocurence_matrix?debate_name=모병제&term_type=${termType}`}
//         >
//           Recruitment System
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Home;
/* eslint-disable no-unused-vars */
import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom"; // Link 를 사용하기 위해 임포트
import Axios from "axios";
import {
  aiopenAccessKey,
  nodeExpressAddress,
  pythonFlaskAddress,
} from "../../constants/constants";
import { TermType } from "../ConceptualRecurrencePlot/DataImporter";
import { style } from "d3-selection";

// ... (기타 임포트 내용)
interface ComponentProps {}

function Home(props: ComponentProps) {
  const [termType, setTermType] = useState<TermType>("compound_term");

  return (
    <div className={styles.home}>
      <div className={styles.serviceTitle}>MetaDebateVis</div>
      <div className={styles.links}>
        <Link
          to={`/coocurence_matrix?debate_name=모병제&term_type=${termType}`}
          className={`${styles.button} ant-btn ant-btn-primary`}
        >
          Recruitment System
        </Link>
      </div>
    </div>
  );
}

export default Home;
