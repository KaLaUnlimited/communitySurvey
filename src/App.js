import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Start from "./components/start";
import Arrow from "./components/Arrow/arrows";
import QuestionHeader from "./components/questionheader";
import ProgressBar from "./components/ProgressBar/progressBar";

import "./App.css";

function App() {
  const { showStartPage, handleQuestion } = useContext(GlobalContext);

  return (
    <>
      {showStartPage ? (
        <Start />
      ) : (
        <>
          <QuestionHeader />
          <div className="question-container">
            {handleQuestion().map((question, key) => {
              return question;
            })}
          </div>
          <ProgressBar />
          <Arrow />
        </>
      )}
    </>
  );
}

export default App;
