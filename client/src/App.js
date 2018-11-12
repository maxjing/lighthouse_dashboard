import React, { Component } from "react";
import "./App.css";
import data from "../src/lighthouse_reports/report.json";
import _ from "lodash";

class App extends Component {
  render() {
    _.map(data.lhr.audits, obj => {
      obj.details && obj.details.items.length > 0 && console.log(obj);
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
