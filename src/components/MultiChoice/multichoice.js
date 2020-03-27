import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./multichoice.scss";
import CustButton from '../CustButton/custbutton';

function MultiChoice(props) {
    const char = props.char.map((char)=>{
        return <CustButton label={char}/>
    })

  return (
    <div className="multi-choice-container">
        {char ? char: "...waiting"}
  
       </div>
  );
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default MultiChoice;