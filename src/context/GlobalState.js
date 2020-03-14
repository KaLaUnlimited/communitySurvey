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
  test: "testing",
  completion: 0
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

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
    // if(!showGroup){
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

  function handleQuestion() {
    return questionsArray.map(x => {
      if (this.state.increment) {
        console.log("increment");
        if (this.state.currentQuestion > Number(x.key)) {
          console.log("81>>>", x.props.className);
          x = React.cloneElement(x, {
            ...x,
            class: `${this.state.questionExit} `,
            nextQuestion: this.handleNextQuestion,
            onAnimationStart: () => {
              console.log(
                x.props.id,
                x.props.class,
                "match?>>>",
                x.props.class.match(/question-group/gi)
              );
              if (x.props.className.match(/question-group/gi)) {
                console.log("87 question class>>>", x.props.className);
                this.handleHeader(x.props.question);
              }
            }
          });
          console.log(x.key, "Previous Question", x.props.question);

          return x;
        }
        if (this.state.currentQuestion === Number(x.key)) {
          x = React.cloneElement(x, {
            ...x,
            class: this.state.questionEntry,
            nextQuestion: this.handleNextQuestion,
            onAnimationStart: () => {
              if (x.props.className.match(/question-group/gi)) {
                console.log("120 question class>>>", x.props.className);
                this.closeHandleHeader();
              }
            }
          });

          console.log("header?", x.id);
          if (x.props.id === "header-trigger") {
            // this.handleHeader()
            // this.setState({
            //   showGroup:true
            // })
          } else {
            console.log(">>>> id:", typeof x.id);
            // this.setState({
            //   showGroup:false
            // })
          }
          console.log(x.key, "Current Question>>>", x.props.id);
          return x;
        }
        if (this.state.currentQuestion < Number(x.key)) {
          x = React.cloneElement(x, {
            ...x,
            class: this.state.questionEntry,
            nextQuestion: this.handleNextQuestion
          });
          // x.class=this.state.questionHidden
          // return x
          // console.log(x.key, "Hidden Question", x.props.class);
        }
      } else {
        console.log("decrement>>>", this.state.currentQuestion);
        if (this.state.currentQuestion < Number(x.key)) {
          x = React.cloneElement(x, { ...x, class: "reverse-question-exit" });
          // console.log(">>>>double class?",x.props)
          // console.log(x.key, "Previous Question", x.props.class,"cuurent qu", this.state.currentQuestion);
          return x;
        } else if (this.state.currentQuestion === Number(x.key)) {
          // console.log(x.key, "Current Question", x.props.class);
          x = React.cloneElement(x, { ...x, class: "reverse-question-entry" });

          // console.log("x>>>??",x.props.class )
          return x;
        } else if (this.state.currentQuestion > Number(x.key)) {
          // console.log(x.key, "Next Question", x.props.class);
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-exit",
            nextQuestion: this.handleNextQuestion
          });
          // x.class=this.state.questionHidden
          // return x
        }
      }
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
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
