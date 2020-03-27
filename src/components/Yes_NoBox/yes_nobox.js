import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./yes_nobox.scss";
import CustButton from '../CustButton/custbutton';

function YesNoBox(props) {
  
  return (
    <div className="yes-no-container">
      <CustButton question={props.question} value="yes" label="Yes" />
      <CustButton value="no" label="No" />
    </div>
  ); 
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default YesNoBox;
