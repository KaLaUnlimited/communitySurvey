import React from "react";
import './question.scss';

function Question(props) {
  console.log(props)
  return (
    <div onAnimationStart={props.onAnimationStart? props.onAnimationStart:null } id={props.id} className={[props.class]}>
      {/* //  <div id={props.id} className='question'> */}
    {props.question}
      <br />
      <button
        onClick={props.nextQuestion}
      >
        Continue
      </button>
    </div>
  );
}

export default Question;
