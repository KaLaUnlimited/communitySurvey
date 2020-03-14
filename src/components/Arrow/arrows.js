import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./arrow.scss";
import PropTypes from "prop-types";

function Arrows(props) {
  const { handleNextQuestion, handlePreviousQuestion } = useContext(
    GlobalContext
  );

  return (
    <div className="question-controllers">
      <div>
        Developed by <strong>Kavodel Lasode </strong>
      </div>
      <div id="arrows-container">
        <i
          id="up"
          onClick={handlePreviousQuestion}
          className="fas fa-chevron-up fa-md"
        />

        <i
          id="down"
          onClick={handleNextQuestion}
          className="fas fa-chevron-down fa-md"
        />
      </div>
    </div>
  );
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default Arrows;
