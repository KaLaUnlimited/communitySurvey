import React from "react";
import Question from "./components/question";
import surveyQuestions from "./surveyQuestions";
import Button from "@material-ui/core/Button";
import Start from "./components/start";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import Arrow from "./components/arrows";
import QuestionGroup from "./components/questiongroup";

// import styled, { css } from "styled-components";

// const Carousel = makeCarousel(CarouselUI);

// const questionsArray = [
// <Question id={'1'} class={this.state.questionEntry} next={this.handleNextQuestion} question="Have you ever thought about investing in a business in your area?" />,
// <Question id={'2'} class={this.state.questionHidden} question="... what about opening your own business close by?" />,

// <Question id={'3'} class='question-hidden' next={this.handleNextQuestion} question="Have you ever thought about investing in a business in your area?" />
// ]

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
      increment:true
    });
  };

  render() {
    const questionsArray = [
      <Question
        key={0}
        class={this.state.questionEntry}
        question="Question 0"
      />,
      <Question
        key={1}
        class="question-hidden"
        question="Question 1"
      />,

      <Question
        key={2}
        class="question-hidden"
        question="Question 2"
      />
    ];
    const f = questionsArray.map(x => {
      // console.log(x.key,">>>", x.props.class)
      // console.log("no zero?",this.state.currentQuestion, x.key)
      if(this.state.increment ){
        console.log("increment")
        if(this.state.currentQuestion > x.key){
          x= React.cloneElement(x, {...x,class: this.state.questionExit });
          console.log(x.key,"Previous Question",x.props.class)
         return x;
        }
        if (this.state.currentQuestion == x.key) {
          console.log(x.key, "Current Question",x.props.class);
         x= React.cloneElement(x, {...x,class: this.state.questionEntry });
         
          // console.log("x>>>??",x.props.class )
          return x;
        }
        if (this.state.currentQuestion != x.key) {
          console.log(x.key, "Next Question",x.props.class);
          x= React.cloneElement(x, {...x,class:this.state.questionHidden});
          // x.class=this.state.questionHidden
          // return x
        }
      }
     
      // else{
      //   x.class="question-hidden"
      //   return x
      // }
      // if(x.key>this.state.currentQuestion){
      //   return {...x.props, class:'question-hidden'}
      // }
    });
    return (
      <>
        <div className="question-container">
          {this.state.startPage === true ? (
            <Start handleStartSurvey={this.handleStartSurvey} />
          ) : (
            <>
              {f}
              {this.state.currentQuestion}
              {/* <Question id={'1'} class={this.state.questionEntry} next={this.handleNextQuestion} question="Have you ever thought about investing in a business in your area?" />
              <Question id={'2'} class={this.state.questionHidden} question="... what about opening your own business close by?" />
              {/* <QuestionGroup questionGroup="Nice! So let's hear your thoughts about your city..." /> */}
              {/* <Question id={'3'} class='question-hidden' next={this.handleNextQuestion} question="Have you ever thought about investing in a business in your area?" /> */}{" "}
              <Arrow
                // length={questionsArray.length}
                previousQuestion={this.handlePreviousQuestion}
                nextQuestion={this.handleNextQuestion}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
