import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./yes_nobox.scss";

function YesNoBox(props) {

  return (
    <div className="yes-no-container">
      <button>
       Yes
      </button>
      <button>
      No
      </button>
       </div>
  );
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default YesNoBox;