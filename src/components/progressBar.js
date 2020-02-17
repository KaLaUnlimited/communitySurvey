import React from "react";

function ProgressBar(props) {
    console.log(props.completion)
  return (
   <div id='progress-container'>
       {props.completion} % completed
       <div id='progress-bar'></div>
   </div>
  );
}

export default ProgressBar;
