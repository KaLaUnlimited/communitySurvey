import React from "react";
import Button from "@material-ui/core/Button";

function Question(props) {
  return (
    <div>
         {/* <p className={props.rolldownClass?"question-animation":null }>{props.surveyQuestion} </p>   <br /> */}
    <p className={props.rolldownClass?"current-question-animate":"current-question-noanimate"} >Have you ever thought about investing in a business in your area?", </p>   <br /> 
    <p className="next-question">{props.nextQuestion}</p>
      <Button onClick={props.handleNextQuestion} variant="contained" color="primary">
        Continue
      </Button>
    </div>
  );
}

export default Question;
