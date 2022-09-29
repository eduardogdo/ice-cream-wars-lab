import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import AdsDesigner from "./components/AdsDesigner/AdsDesigner";
import Votes from "./components/Votes/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="column">
          <AdsDesigner />
        </div>
        <div className="column">
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
