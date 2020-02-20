import React from "react";
import Button from "@material-ui/core/Button";
import welcome from "../assets/welcome.png";
import './overrides.scss';

function Start(props) {
  return (
    <div id="start-container">
      <img id="welcome" src={welcome} alt="Welcome" />
      <div id='business-title'>The B-Line</div>
      <div id="tag-line">Buidling, Growing, Securing, Flourishing</div>
      <div id='enter-container'>
      <button
        onClick={props.handleStartSurvey}
      >
        Start
      </button>
      <div id='press-enter'>press<span> &nbsp; Enter <i className="fas fa-level-down-alt fa-rotate-90 fa-xs"></i></span> </div>
     
      </div>
    </div>
  );
}

export default Start;
