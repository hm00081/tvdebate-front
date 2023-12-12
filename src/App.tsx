// /* eslint-disable no-unused-vars */
// export default App;
import React from "react";
import {
  HashRouter as Router, // 변경: BrowserRouter -> HashRouter
  Switch,
  Route,
} from "react-router-dom";
import { DebateDataSet } from "./interfaces/DebateDataInterface";
import { DataStructureSet } from "./views/ConceptualRecurrencePlot/DataStructureMaker/DataStructureManager";
import { TermType } from "./views/ConceptualRecurrencePlot/DataImporter";
import "./App.scss";
import { useSelector } from "react-redux";
import ConceptualRecurrencePlot from "./views/ConceptualRecurrencePlot/ConceptualRecurrencePlot";
import Home from "./views/Home/Home";

interface AppProps {
  debateDataSet: DebateDataSet;
  dataStructureSet: DataStructureSet;
  termType: TermType;
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/coocurence_matrix">
            <ConceptualRecurrencePlot />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
