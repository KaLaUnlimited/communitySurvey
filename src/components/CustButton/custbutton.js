import React, { useContext, useState } from "react";
import "./custbutton.scss";
// import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";

function CustButton(props) {
  const { handleNextQuestion, recordAnswer } = useContext(GlobalContext);
  const styles = {};
  const [isClicked, setClicked] = useState(false);
  const toggleClass = cb => {
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  const proceed = () => {
    setTimeout(handleNextQuestion, 1000);
  };
// const toggleTF = (answerTF) => {

//   setAnswerTF = answerTF;
// }
  return (
    <button
      value={props.value}
      // disabled={isClicked}
      id={props.id}
      className={isClicked ? "custom-button-clicked" : "custom-button"}
      onClick={e => {
        toggleClass();
        console.log(e.target, props.question);
        // proceed();
        //toggleTF(e.target.value)
      }}
    >
      {/* <span className="init-container">{props.initial}</span> */}
      {props.label}
    </button>
  );
}

// Question.propTypes = {
//   onAnimationStart: PropTypes.func,
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   class: PropTypes.func
// };

export default CustButton;
