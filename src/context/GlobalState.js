import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Question from "../components/Question/question";

import questionsArray from "../surveyQuestions";

// Initial state
const initialState = {
  date: new Date(),
  increment: 0,
  currentQuestion: 0,
  showStartPage: true,
  showGroup: false,
  rolldownClass: false,
  header: " ",
  questionExit: "question-exit",
  questionEntry: "question-entry",
  questionHidden: "question-hidden",
  questionsArray: questionsArray,
  direction: "increment",
  completion: 0
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function handleNextQuestion() {
    if (state.currentQuestion < state.questionsArray.length - 1) {
      dispatch({
        type: "NEXT_QUESTION",
        payload: {
          increment: true,
          currentQuestion: state.currentQuestion + 1,
          rolldownClass: true,
          direction: "increment"
        }
      });
    }
  }

  function handlePreviousQuestion(currentQuestion) {
    if (state.currentQuestion > 0) {
      dispatch({
        type: "PREVIOUS_QUESTION",
        payload: {
          direction: "decrement",
          increment: false,
          currentQuestion: state.currentQuestion - 1
        }
      });
    }
  }

  function handleHeader(header) {
    dispatch({
      type: "HEADER",
      payload: { showGroup: true, header: header }
    });
  }

  function handleCloseHeader() {
    dispatch({
      type: "CLOSE_HEADER",
      payload: { showGroup: false }
    });
  }

  function handleStartSurvey() {
    dispatch({
      type: "START_SURVEY",
      payload: { showStartPage: false, increment: true }
    });
  }

  function handleCompletion(cq, length) {
    const answer = Math.floor((cq / length) * 100);
    dispatch({
      type: "SURVEY_COMPLETION",
      payload: {
        completion: answer
      }
    });
  }

  const handleQuestion = () => {
    return questionsArray.map(questionComponent => {
      if (state.direction === "increment") {
        // if forward transvering through the question list
        if (Number(questionComponent.key) < state.currentQuestion) {
          //if current question  is leaving, then it is assigned css class questionEquestionComponentit
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: `${state.questionExit} `,
            nextQuestion: handleNextQuestion,
            onAnimationStart: () => {
              if (questionComponent.props.className.match(/question-group/gi)) {
                handleHeader(questionComponent.props.question);
              }
            }
          });

          return questionComponent;
        }
        if (Number(questionComponent.key) === state.currentQuestion) {
          //if current question then it is assigned css class questionEntry
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: state.questionEntry,
            nextQuestion: handleNextQuestion,
            onAnimationStart: () => {
              if (questionComponent.props.className.match(/question-group/gi)) {
                handleCloseHeader();
              }
            }
          });
          return questionComponent;
        }
        if (Number(questionComponent.key) > state.currentQuestion) {
          //if question is before currentQuestion then it is assigned css class questionEntry
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: state.questionHidden,
            nextQuestion: handleNextQuestion
          });
          return questionComponent;
        }
      }

      if (state.direction === "decrement") {
        // if backward transvering through the question lists
        if (Number(questionComponent.key) > state.currentQuestion) {
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: "reverse-question-exit"
          });
          return questionComponent;
        } else if (state.currentQuestion === Number(questionComponent.key)) {
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: "reverse-question-entry"
          });
          return questionComponent;
        } else if (Number(questionComponent.key) < state.currentQuestion) {
          questionComponent = React.cloneElement(questionComponent, {
            ...questionComponent,
            class: "reverse-question-exit",
            nextQuestion: handleNextQuestion
          });
        }
      }
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        handleNextQuestion,
        handlePreviousQuestion,
        handleHeader,
        handleCloseHeader,
        handleStartSurvey,
        handleCompletion,
        handleQuestion,
        showStartPage: state.showStartPage,
        header: state.header,
        showGroup: state.showGroup,
        currentQuestion: state.currentQuestion,
        direction: state.direction,
        completion: state.completion,
        questionEntry: initialState.questionEntry,
        questionHidden: initialState.questionHidden,
        questionExit: initialState.questionExit,
        questionsLength: questionsArray.length
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
