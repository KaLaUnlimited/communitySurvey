import React from "react";
import Button from "@material-ui/core/Button";

function Question(props) {
  return (
    // <div id={props.id} className={[props.class]}>
       <div id={props.id} className='question'>
    {props.question}
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

export default Question;
