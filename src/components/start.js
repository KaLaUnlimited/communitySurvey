import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import welcome from "../assets/welcome.png";
import "./overrides.scss";

function Start(props) {
  const { handleStartSurvey } = useContext(GlobalContext);

  return (
    <div id="start-container">
      <img id="welcome" src={welcome} alt="Welcome" />
      <div id="business-title">The B-Line</div>
      <div id="tag-line">Buidling, Growing, Securing, Flourishing</div>
      <div id="enter-container">
        <button onClick={handleStartSurvey}>Start</button>
        <div id="press-enter">
          press
          <span>
            &nbsp; Enter{" "}
            <i className="fas fa-level-down-alt fa-rotate-90 fa-xs" />
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Start;
