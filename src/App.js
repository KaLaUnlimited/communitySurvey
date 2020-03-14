import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import Start from "./components/start";
import Arrow from "./components/Arrow/arrows";
import QuestionGroup from "./components/questiongroup";
import ProgressBar from "./components/ProgressBar/progressBar";

import "./App.css";

function App() {
  const {
    showStartPage,
    handleQuestion
  } = useContext(GlobalContext);


  return (
    <>
      {showStartPage ? (
        <Start />
      ) : (
        <>
          <div className="question-container">
            {handleQuestion().map((question, key) => {
              return question;
            })}
          </div>
          <QuestionGroup/>
          <ProgressBar/>
          <Arrow/>
        </>
      )}
    </>
  );
}

export default App;
