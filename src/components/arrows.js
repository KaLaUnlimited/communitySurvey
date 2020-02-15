import React from "react";
import Button from "@material-ui/core/Button";

function Arrows(props) {
  return (
    <div className="question-controllers">
      Developed by <strong>Kavodel Lasode </strong>
      <Button
        variant="contained"
        color="primary"
        // onClick={props.handlePreviousQuestion}
        onClick={props.previousQuestion}
        
      >
      <i class="fas fa-chevron-up"></i>
      </Button>
      <Button
        variant="contained"
        color="primary"
        // onClick={props.handleNextQuestion}
        onClick={props.nextQuestion}
      >
       <i class="fas fa-chevron-down"></i>
      </Button>{" "}
    </div>
  );
}

export default Arrows;
