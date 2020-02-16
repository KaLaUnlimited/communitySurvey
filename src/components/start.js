import React from "react";
import Button from "@material-ui/core/Button";
import welcome from "../assets/welcome.png";

function Start(props) {
  return (
    <div id="start-container">
      <img id="welcome" src={welcome} alt="Welcome" />
      <div id='business-title'>The B-Line</div>
      <div id="tag-line">Buidling, Growing, Securing, Flourishing</div>
      <div id='enter-container'>
      <Button 
        onClick={props.handleStartSurvey}
        variant="contained"
        color="primary"
      >
        Start
      </Button>
      <div id='press-enter'>press<span> &nbsp; Enter <i class="fas fa-level-down-alt fa-rotate-90 fa-xs"></i></span> </div>
     
      </div>
    </div>
  );
}

export default Start;
