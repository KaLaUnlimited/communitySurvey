import React from "react";
// import Question from "./components/Question/question";
import questionsArray from "./surveyQuestions";
import Start from "./components/start";
import Arrow from "./components/Arrow/arrows";
import QuestionGroup from "./components/questiongroup";
import ProgressBar from "./components/ProgressBar/progressBar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      increment: false,
      direction: "",
      currentQuestion: 0,
      startPage: true,
      showGroup: false,
      rolldownClass: false,
      header: " ",
      questionExit: "question-exit",
      questionEntry: "question-entry",
      questionHidden: "question-hidden"
    };
  }
  handleNextQuestion = cb => {
    if (this.state.currentQuestion < questionsArray.length - 1) {
      this.setState({
        direction: "increment",
        currentQuestion: this.state.currentQuestion + 1,
        rolldownClass: true
      });
    }
  };

  handlePreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({
        direction: "decrement",
        currentQuestion: this.state.currentQuestion - 1
      });
    }
  };

  handleStartSurvey = () => {
    this.setState({
      startPage: false,
      direction: "increment"
    });
  };

  handleHeader = header => {
    console.log("handleHeader", header);
    this.setState({
      showGroup: true,
      header: header
    });
  };

  closeHandleHeader = () => {
    this.setState({
      showGroup: false
    });
  };

  handleCompletion = () => {
    const answer = Math.floor(
      (this.state.currentQuestion / questionsArray.length) * 100
    );

    return answer;
  };
  handleQuestion = () => {
    return questionsArray.map(x => {
      // const { currentQuestion } = this.state;
      // switch (currentQuestion) {
      //   case currentQuestion > Number(x.key):

      //         console.log("81>>>", x.props.className);
      //         x = React.cloneElement(x, {
      //           ...x,
      //           className: `${this.state.questionExit} `,
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
      console.log(
        "++++ >>currentquestion:",
        this.state.currentQuestion,
        " key:",
        x.key
      );

      if (this.state.direction === "increment") {
        console.log(" direction: increment");
        //anything a
        if (this.state.currentQuestion > Number(x.key)) {
          // console.log(
          //   "++++ >>currentquestion:",
          //   this.state.currentQuestion,
          //   " key:",
          //   x.key
          // );
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
              if (x.props.class.match(/question-group/gi)) {
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
            class: "question-hidden",
            // class: this.state.questionEntry,
            nextQuestion: this.handleNextQuestion
          });
          // x.class=this.state.questionHidden
          return x;
          // console.log(x.key, "Hidden Question", x.props.class);
        }
      } else {
        console.log("decrement>>>", this.state.currentQuestion);
        if (this.state.currentQuestion < Number(x.key)) {
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-exit"
          });
          // console.log(">>>>double class?",x.props)
          // console.log(x.key, "Previous Question", x.props.class,"cuurent qu", this.state.currentQuestion);
          return x;
        } else if (this.state.currentQuestion === Number(x.key)) {
          // console.log(x.key, "Current Question", x.props.class);
          x = React.cloneElement(x, {
            ...x,
            class: "reverse-question-entry"
          });

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
  };
  render() {
    const completion = this.handleCompletion();
    // const returnQuestions =this.handleQuestion();
    return (
      <>
        {this.state.startPage === true ? (
          <Start handleStartSurvey={this.handleStartSurvey} />
        ) : (
          <>
            <div className="question-container">
              {this.handleQuestion().map((question, key) => {
                return question;
              })}
            </div>
            <QuestionGroup
              header={this.state.header}
              currentNum={this.state.currentQuestion}
              show={this.state.showGroup}
            />
            {React.cloneElement(<ProgressBar />, { completion: completion })}
            <Arrow
              previousQuestion={this.handlePreviousQuestion}
              nextQuestion={this.handleNextQuestion}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
