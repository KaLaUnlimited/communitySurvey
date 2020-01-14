import React from "react";
import Question from "./components/question";
import surveyQuestions from './surveyQuestions';
import Button from "@material-ui/core/Button";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      increment: 0,
      currentQuestion: 0,
      rolldownClass:false,
    };
  }
  handleNextQuestion = () => {
    if(this.state.currentQuestion<=surveyQuestions.length-1){

  
    this.setState(
      {
        increment: +1,
        currentQuestion: this.state.currentQuestion + 1,
        rolldownClass:true,
      },
      console.log("currentquestion >>>>", this.state.currentQuestion)
    ); 
  }
  };

  handlePreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState(
        {
          increment: +1,
          currentQuestion: this.state.currentQuestion - 1
        },
        console.log("currentquestion >>>>", this.state.currentQuestion)
      );
    }
  };

  render() {
    return (
      <div className="question-container">
        <Question
          handleNextQuestion={this.handleNextQuestion}
          surveyQuestion={surveyQuestions[this.state.currentQuestion]}
          nextQuestion ={surveyQuestions[this.state.currentQuestion+1]}
          rolldownClass ={this.state.rolldownClass}
        />
        <div className= "question-controllers"> Developer <Button variant="contained" color="primary" onClick={this.handlePreviousQuestion}> up</Button> <Button variant="contained" color="primary" onClick={this.handleNextQuestion}>down</Button>  </div>
      </div>
    );
  }
}

export default App;
