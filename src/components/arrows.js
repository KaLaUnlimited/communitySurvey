import React from "react";
import Button from "@material-ui/core/Button";

function Arrows(props) {
  return (
    <div className="question-controllers">
      Developer
      <Button
        variant="contained"
        color="primary"
        // onClick={props.handlePreviousQuestion}
        onClick={props.previousQuestion}
        
      >
        up
      </Button>
      <Button
        variant="contained"
        color="primary"
        // onClick={props.handleNextQuestion}
        onClick={props.nextQuestion}
      >
        down
      </Button>{" "}
    </div>
  );
}

export default Arrows;
