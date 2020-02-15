import React from "react";
import Button from "@material-ui/core/Button";

function QuestionGroup(props) {
  return (
    <div className="question-animation-container" >
    {props.questionGroup}
      <br />
      <Button
        onClick={props.nextQuestion}
        variant="contained"
        color="primary"
      >
        Continue
      </Button>
    </div>
  );
}

export default QuestionGroup;