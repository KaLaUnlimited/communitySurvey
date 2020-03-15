import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./multichoice.scss";

function MultiChoice(props) {
    const char = props.char.map((char)=>{
        return <button>{char}</button>
    })

  return (
    <div className="yes-no-container">
        {char ? char: "...waiting"}
  
       </div>
  );
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default MultiChoice;