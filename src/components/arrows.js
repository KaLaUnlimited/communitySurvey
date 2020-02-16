import React from "react";
import Button from "@material-ui/core/Button";

function Arrows(props) {
  return (
    <div className="question-controllers">
      <div>
        Developed by <strong>Kavodel Lasode </strong>
      </div>
      <div id="arrows-container">
        <i id='up' onClick={props.previousQuestion} class="fas fa-chevron-up fa-md"></i> 
        
<i onClick={props.nextQuestion} class="fas fa-chevron-down fa-md"></i>
        
      </div>
    </div>
  );
}

export default Arrows;
