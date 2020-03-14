import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./progressBar.scss";
// import PropTypes from "prop-types";

function ProgressBar(props) {
  const { completion, handleCompletion, currentQuestion, questionsLength } = useContext(GlobalContext);

  useEffect(() => {
    handleCompletion(currentQuestion, questionsLength);
  }, [currentQuestion]);

  const style = {
    content: "",
    width: "100%",
    height: "90%",
    backgroundColor: " #83867F",
    position: "absolute",
    transtion: "width .2s ease 10s"
  };
  return (
    <div id="progress-container">
      {completion} % completed
      <div id="progress-bar">
        <div id="trans" style={{ ...style, width: `${completion}%` }} />
      </div>
    </div>
  );
}

// ProgressBar.propTypes = {
//   completion: PropTypes.number
// };

export default ProgressBar;
