import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";

function QuestionHeader() {
  const { header, showGroup } = useContext(GlobalContext);

  return (
    <div id={showGroup ? "question-group" : "question-group-hide"}>
      <br />
      {header}
    </div>
  );
}
// QuestionGroup.propTypes = {
//   showGroup: PropTypes.string.isRequired,
//   header:PropTypes.string.isRequired
// };

export default QuestionHeader;
