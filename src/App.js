import React from "react";
import Question from "./components/question";
import surveyQuestions from "./surveyQuestions";
import questionsArray from "./surveyQuestions";
import Button from "@material-ui/core/Button";
import Start from "./components/start";
import Arrow from "./components/arrows";
import QuestionGroup from "./components/questiongroup";
import ProgressBar from './components/progressBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      increment: 0,
      currentQuestion: 0,
      startPage: true,
      rolldownClass: false,
      currentNoAnimation: "current-question-noanimate",
      currentAnimation: "current-question-animate",
      nextAnimation: "next-question-animate",
      nextNoAnimation: "current-question-noanimate",
      questionExit: "question-exit",
      questionEntry: "question-entry",
      questionHidden: "question-hidden"
    };
  }
  handleNextQuestion = cb => {
    if (this.state.currentQuestion < 3 - 1) {
      this.setState(
        {
          increment: true,
          currentQuestion: this.state.currentQuestion + 1,
          rolldownClass: true,
          nextAnimation: "current-question-noanimate"
        },
        this.handleReset
      );
    }
  };
  handleReset = () => {
    this.setState({
      rolldownClass: false
      // decrement:true,
      // increment:false
    });
  };

  handlePreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState(
        {
          increment: false,
          currentQuestion: this.state.currentQuestion - 1
        }
        // console.log("currentquestion >>>>", this.state.currentQuestion)
      );
    }
  };

  handleStartSurvey = () => {
    this.setState({
      startPage: false,
      increment: true
    });
  };

  handleCompletion = () =>{
    const answer = Math.floor(( this.state.currentQuestion /3) * 100);

  return answer
  }

  render() {
    const completion = this.handleCompletion();
    const returnQuestions = questionsArray.map(x => {
      // console.log(x.key,">>>", x.props.class)
      // console.log("no zero?",this.state.currentQuestion, x.key)
      if (this.state.increment) {
        console.log("increment");
        if (this.state.currentQuestion > x.key) {
          x = React.cloneElement(x, { ...x, class: this.state.questionExit });
          console.log(x.key, "Previous Question", x.props.class);
          return x;
        }
        if (this.state.currentQuestion == x.key) {
          console.log(x.key, "Current Question", x.props.class);
          x = React.cloneElement(x, {
            ...x,
            class: this.state.questionEntry,
            nextQuestion: this.handleNextQuestion
          });

          // console.log("x>>>??",x.props.class )
          return x;
        }
        if (this.state.currentQuestion != x.key) {
          console.log(x.key, "Next Question", x.props.class);
          x = React.cloneElement(x, { ...x, class: this.state.questionHidden });
          // x.class=this.state.questionHidden
          // return x
        }
      } else {
        console.log("decrement");
        if (this.state.currentQuestion != x.key) {
          x = React.cloneElement(x, { ...x, class: this.state.questionExit });
          console.log(x.key, "Previous Question", x.props.class);
          return x;
        }
        if (this.state.currentQuestion == x.key) {
          console.log(x.key, "Current Question", x.props.class);
          x = React.cloneElement(x, { ...x, class: this.state.questionEntry });

          // console.log("x>>>??",x.props.class )
          return x;
        }
        if (this.state.currentQuestion < x.key) {
          console.log(x.key, "Next Question", x.props.class);
          x = React.cloneElement(x, {
            ...x,
            class: this.state.questionHidden,
            nextQuestion: this.handleNextQuestion
          });
          // x.class=this.state.questionHidden
          // return x
        }
      }
    });
    return (
      <>
        {this.state.startPage === true ? (
          <Start handleStartSurvey={this.handleStartSurvey} />
        ) : (
          <>
            <div className="question-container">{returnQuestions}</div>
           { React.cloneElement(<ProgressBar/>, {completion:completion} )}
            {/* <ProgressBar completion={completion}/> */}
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
