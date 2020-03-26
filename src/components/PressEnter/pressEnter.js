import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function PressEnter(props) {
  const { handleNextQuestion } = useContext(GlobalContext);
  return (
    <>
      <div id="press-enter">
        <button className="continue-button" onClick={handleNextQuestion}>Continue </button>
        <p>
          press Enter &nbsp;
          <i className="fas fa-level-down-alt fa-rotate-90 fa-xs" />
        </p>
      </div>
    </>
  );
}

export default PressEnter;
