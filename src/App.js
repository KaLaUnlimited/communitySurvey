import React from "react";
import Question from "./components/question";
import surveyQuestions from './surveyQuestions';
import Button from "@material-ui/core/Button";
import Start from "./components/start";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      increment: 0,
      currentQuestion: 0,
      startPage:true,
      rolldownClass:false,
      currentNoAnimation: "current-question-noanimate",
      currentAnimation: "current-question-animate",
      nextAnimation:"next-question-animate",
      nextNoAnimation: "current-question-noanimate"
    };
  }
  handleNextQuestion = (cb) => {
    if(this.state.currentQuestion<=surveyQuestions.length-1){

  
    this.setState(
      {
        increment: +1,
        currentQuestion: this.state.currentQuestion + 1,
        rolldownClass:true,
        nextAnimation:'current-question-noanimate'
      },
      console.log("currentquestion >>>>", this.state.currentQuestion)
    ,this.handleReset); 
      // 
  }
  };
  handleReset =() =>{
    this.setState({
      rolldownClass:false,
    })
  }

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

  handleStartSurvey =() =>{
    this.setState({
      startPage:false,
      
    })
  }



  render() {
    const beg=  this.state.startPage ===true?<Start 
    handleStartSurvey={this.handleStartSurvey }/>
    
    : 
    <Question
    handleNextQuestion={this.handleNextQuestion}
    surveyQuestion={surveyQuestions[this.state.currentQuestion]}
    nextQuestion ={surveyQuestions[this.state.currentQuestion+1]}
    rolldownClass ={this.state.rolldownClass}
    currentAnimation={this.state.currentAnimation}
    currentNoAnimation={this.state.currentNoAnimation}
    nextAnimation={this.state.nextAnimation}
    nextNoAnimation={this.state.currentNoAnimation}
  />;

    return (
      <>
     
      <div className="question-container">
       {beg}
        <div className= "question-controllers"> Developer <Button variant="contained" color="primary" onClick={this.handlePreviousQuestion}> up</Button> <Button variant="contained" color="primary" onClick={this.handleNextQuestion}>down</Button>  </div>
      </div>
      </>
    );
  }
}

export default App;
