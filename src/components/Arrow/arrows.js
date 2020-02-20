import React from "react";
import './arrow.scss'

function Arrows(props) {
  return (
    <div className="question-controllers">
      <div>
        Developed by <strong>Kavodel Lasode </strong>
      </div>
      <div id="arrows-container">
        <i
          id="up"
          onClick={props.previousQuestion}
          className="fas fa-chevron-up fa-md"
        ></i>

        <i
          id="down"
          onClick={props.nextQuestion}
          className="fas fa-chevron-down fa-md"
        ></i>
      </div>
    </div>
  );
}

export default Arrows;
