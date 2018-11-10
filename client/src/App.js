import React, { Component } from "react";
import "./App.css";
import data from "../src/lighthouse_reports/report.json";

class App extends Component {
  render() {
    const Data = [];
    Data.push(data.lhr.audits);
    Data.map((obj, index) => {
      console.log(obj + " " + index);
    });
    return (
      <div className="App">
        <header className="App-header">
          <p />
        </header>
      </div>
    );
  }
}

export default App;
