import React, { useContext, useState } from "react";
import "./custbutton.scss";
// import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";

function CustButton(props) {
  const { handleNextQuestion, recordAnswer } = useContext(GlobalContext);
  const styles = {

  }
 const [isClicked, setClicked] = useState(false)

  return (
    <button value={props.value} id={props.id} className={isClicked ?'custom-button-clicked': "custom-button"} onClick={(e)=>{setClicked(true)}} >
     <span className="init-container">{props.initial}</span>
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