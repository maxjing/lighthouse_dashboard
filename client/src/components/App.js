import React, { Component } from "react";
import _ from "lodash";
import FailList from "./FailList/FailList";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ScoreBar from "./ScoreBar/ScoreBar";
import RunButton from "./RunButton/RunButton";

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

    this.state = { fails: [], score: null };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    const data = require("../lighthouse_reports/report.json");
    let fails = [];
    let score;
    _.map(data.lhr.audits, obj => {
      obj.details && obj.details.items.length > 0 && fails.push(obj);
    });
    score = data.lhr.categories.accessibility.score * 100;
    this.setState({ fails: fails, score: score });
  };

  render() {
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
                  <ScoreBar score={this.state.score} />
                  <FailList fails={this.state.fails} />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div style={{ border: "1px solid black" }}>
                  <ScoreBar score={this.state.score} />
                  <FailList fails={this.state.fails} />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div style={{ border: "1px solid black" }}>
                  <ScoreBar score={this.state.score} />
                  <FailList fails={this.state.fails} />
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
