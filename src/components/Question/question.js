import React, { useContext } from "react";
import "./question.scss";
// import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";

function Question(props) {
  const { handleNextQuestion } = useContext(GlobalContext);
  return (
    <div
      onAnimationStart={props.onAnimationStart ? props.onAnimationStart : null}
      id={props.id}
      className={[props.class]}
    >
      {props.question}
      <br />
      <button onClick={handleNextQuestion}>Continue</button>
    </div>
  );
}

// Question.propTypes = {
//   onAnimationStart: PropTypes.func,
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   class: PropTypes.func
// };

export default Question;
