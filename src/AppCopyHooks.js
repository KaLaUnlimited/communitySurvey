import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import questionsArray from "./surveyQuestions";
import Start from "./components/start";
import Arrow from "./components/Arrow/arrows";
import QuestionGroup from "./components/questiongroup";
import ProgressBar from "./components/ProgressBar/progressBar";

import "./App.css";

function App() {
  const {
    showStartPage,
    header,
    showGroup,
    currentQuestion,
    direction,
    handleNextQuestion,
    handlePreviousQuestion,
    completion,
    questionEntry,
    questionExit,
    questionHidden,
    handleHeader,
    handleCloseHeader
  } = useContext(GlobalContext);

  const handleQuestion = () => {
    return questionsArray.map(x => {
      // const { currentQuestion } = this.state;
      // switch (currentQuestion) {
      //   case currentQuestion > Number(x.key):

      //         console.log("81>>>", x.props.className);
      //         x = React.cloneElement(x, {
      //           ...x,
      //           className: `${questionExit} `,
      //           nextQuestion: this.handleNextQuestion,
      //           onAnimationStart: () => {
      //             console.log(
      //               x.props.id,
      //               x.props.class,
      //               "match?>>>",
      //               x.props.class.match(/question-group/gi)
      //             );
      //             if (x.props.className.match(/question-group/gi)) {
      //               console.log("87 question class>>>", x.props.className);
      //               this.handleHeader(x.props.question);
      //             }
      //           }
      //         });
      //         console.log(x.key, "Previous Question", x.props.question);

      //         return x;

      //   case 4:
      //     alert( 'Exactly!' );

      //     break;
      //   case 5:
      //     alert( 'Too large' );
      //     break;
      //   default:
      //     alert( "I don't know such values" );
      // }

      if (direction === "increment") {
        if (Number(x.key) < currentQuestion) {
          x = React.cloneElement(x, {
            ...x,
            class: `${questionExit} `,
            nextQuestion: handleNextQuestion,
            onAnimationStart: () => {
              if (x.props.className.match(/question-group/gi)) {
                handleHeader(x.props.question);
              }
            }
          });

          return x;
        }
        if (Number(x.key) === currentQuestion) {
          x = React.cloneElement(x, {
            ...x,
            class: questionEntry,
            nextQuestion: handleNextQuestion,
            onAnimationStart: () => {
              if (x.props.className.match(/question-group/gi)) {
                handleCloseHeader();
              }
            }
          });
          return x;
        }
        if (Number(x.key) > currentQuestion) {
          x = React.cloneElement(x, {
            ...x,
            class: questionHidden,
            nextQuestion: handleNextQuestion
          });
          return x;
        }
      } else {
        if (Number(x.key) > currentQuestion) {
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-exit"
          });
          return x;
        } else if (currentQuestion === Number(x.key)) {
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-entry"
          });
          return x;
        } else if (Number(x.key) < currentQuestion) {
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-exit",
            nextQuestion: handleNextQuestion
          });
        }
      }
    });
  };
  // console.log("showPage?", showPage);
  // if (show) {
  //   console.log("if>>>", showStartPage);
  //   return (
  //     <GlobalProvider>
  //       <Start />
  //     </GlobalProvider>
  //   );
  // } else {
  //   return (
  //     <GlobalProvider>
  //       <>
  //         {/* <div className="question-container"> */}
  //         <div>helloe {test}</div>
  //         {/* {handleQuestion().map((question, key) => {
  //         return question;
  //       })} */}
  //         {/* </div> */}
  //         {/* <QuestionGroup
  //       header={header}
  //       currentNum={currentQuestion}
  //       show={showGroup}
  //     /> */}
  //         {/* {React.cloneElement(<ProgressBar />, { completion: completion })}
  //     <Arrow
  //       previousQuestion={handlePreviousQuestion}
  //       nextQuestion={handleNextQuestion}
  //     /> */}
  //       </>
  //     </GlobalProvider>
  //   );
  // }

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
          <QuestionGroup
            header={header}
            currentNum={currentQuestion}
            show={showGroup}
          />
          {React.cloneElement(<ProgressBar />, { completion: completion })}
          <Arrow
            previousQuestion={handlePreviousQuestion}
            nextQuestion={handleNextQuestion}
          />
        </>
      )}
    </>
  );
}

export default App;
