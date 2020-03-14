import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalState";
import Question from "./components/Question/question";
import questionsArray from "./surveyQuestions";
import Start from "./components/start";
import Arrow from "./components/Arrow/arrows";
import QuestionGroup from "./components/questiongroup";
import ProgressBar from "./components/ProgressBar/progressBar";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";
import { render } from "react-dom";

function App() {
  const {
    showStartPage,
    test,
    tester
    // header,
    // showGroup,
    // currentQuestion,
    // direction,
    // handleNextQuestion,
    // handlePreviousQuestion,
    // completion,
  } = useContext(GlobalContext);

  return (
    <>
      {showStartPage ? (
        <Start />
      ) : (
        <>
          <div>Survey Questions will Go Here {test}</div>
        </>
      )}
    </>
  );
}

export default App;
