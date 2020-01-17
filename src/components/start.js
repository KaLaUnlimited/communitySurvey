import React from 'react';
import Button from "@material-ui/core/Button";
import welcome from '../assets/welcome.png';

function Start(props) {
    return (
      <div >
 <img id="welcome" src={welcome} alt="Welcome"/>
 <div>The B-Line</div>
 <div>Buidling, Growing, Securing, Flourishing</div>
  <Button onClick={props.handleStartSurvey} variant="contained" color="primary">Start</Button>
      </div>
    );
  }
  
  export default Start;
  