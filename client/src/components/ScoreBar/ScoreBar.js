import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  scoreText: {
    top: "40%",
    textAlign: "center"
  },
  ScoreCircle: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: "1px solid black",
    textAlign: "center"
  },
  Green: {
    backgroundColor: "green"
  },
  Yellow: {
    backgroundColor: "yellow"
  },
  Red: {
    backgroundColor: "red"
  }
});

const ScoreBar = props => {
  const { classes } = props;
  const { score } = props;
  return (
    <div style={{ marginBottom: "30px" }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="title" gutterBottom>
            LDP Page
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            className={classes.scoreText}
            component="h2"
            variant="display1"
          >
            Score:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {score >= 80 && (
            <div className={classes.ScoreCircle + " " + classes.Green}>
              {score}
            </div>
          )}
          {score >= 50 && score < 80 && (
            <div className={classes.ScoreCircle + " " + classes.Yellow}>
              {score}
            </div>
          )}
          {score < 50 && (
            <div className={classes.ScoreCircle + " " + classes.Red}>
              {score}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ScoreBar);
