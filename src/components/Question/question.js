import React, { useContext } from "react";
import "./question.scss";
// import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";
import PressEnter from '../PressEnter/pressEnter'

function Question(props) {
  const { handleNextQuestion } = useContext(GlobalContext);
  return (
    <div
      onAnimationStart={props.onAnimationStart ? props.onAnimationStart : null}
      id={props.id}
      className={[props.class]}
    >
     
   
      {props.question}
      {props.QuestionType}
      <br />
      <button onClick={handleNextQuestion}>Continue </button>
      <PressEnter/>
    
    </div>
  );
}

// Question.propTypes = {
//   onAnimationStart: PropTypes.func,
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   class: PropTypes.func
// };

export default Question;
