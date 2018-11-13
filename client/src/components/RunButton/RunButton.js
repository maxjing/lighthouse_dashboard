import React from "react";

import Button from "@material-ui/core/Button";

const styles = {
  float: "right",
  backgroundColor: "Green",
  padding: "15px 35px"
};

const RunButton = props => {
  return <Button style={styles}>Re-Run</Button>;
};

export default RunButton;
