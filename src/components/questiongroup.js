import React from "react";
import Button from "@material-ui/core/Button";

// const style = () ={
//   return
// }

function QuestionGroup(props) {
  console.log("show********", props.show, props.header);
  const tripper = document.getElementById("header-trigger");
  const trip = document.getElementsByClassName("question-exit");
  const a = () => {
    if (tripper && trip) {
      return true;
    }
  };
  return (
    <div id={props.show ? "question-group" : "question-group-hide"}>
      {/* <div  id='question-group-hide' > */}

      {props.questionGroup}
      <br />
      {props.header}
    </div>
  );
}

export default QuestionGroup;
