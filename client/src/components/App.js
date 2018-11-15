import React, { Component } from "react";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ScoreBar from "./ScoreBar/ScoreBar";
import RunButton from "./RunButton/RunButton";
import List from "./List/List";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  runButton: {
    float: "right"
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { hpScore: null, hpFails: [], hpPasses: [] };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    const data = require("../lighthouse_reports/report.json");
    let hpFails = [];
    let hpPasses = [];
    let hpAudits = [];
    let hpScore;
    _.map(data.lhr.audits, obj => {
      obj.details && obj.details.items && hpAudits.push(obj);
    });
    _.map(hpAudits, audit => {
      audit.details.items.length === 0
        ? hpPasses.push(audit)
        : hpFails.push(audit);
    });

    hpScore = data.lhr.categories.accessibility.score * 100;
    this.setState({ hpFails: hpFails, hpScore: hpScore, hpPasses: hpPasses });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <RunButton />
              </Grid>
              <Grid item xs={4}>
                <div style={{ border: "1px solid black" }}>
                  <ScoreBar score={this.state.hpScore} />
                  <List
                    fails={this.state.hpFails}
                    passes={this.state.hpPasses}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
