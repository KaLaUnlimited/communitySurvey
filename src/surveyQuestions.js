import React from "react";
import Question from "./components/Question/question";
// module.exports = [
//   "Have you ever thought about investing in a business in your area?",
//   "... what about opening your own business close by?",
//   "Nice! So let's hear your thoughts about your city...",
//   "Which city do you call home?",
//   " If _____ was a person, which of the following adjectives do you feel would best describe their personality?",
//   "What appeals to you most about _____?",
//   "And what puts you off it?",
//   "What types of establishments would you like to bring to _____?",
//   "How satisfied are you with the shopping/entertainment/wellness options currently in _____",
//   "You're doing great; we're about halfway through now.",
//   "What benefits could you see with an application to help build the community",
//   "Would you be interested in monetary reward for your input towards building your community?",
//   "Thank you. We're almost there—just some questions about you",
//   "Information you provide will be kept confidential.",
//   "Mobile Phone Provider",
//   "What social media platform do you use ?",
//   "Roughly how long do you spend on social media per week?",
//   "What's your age range?",
//   "...and your yearly income?",
//   "What country were you born in?",
//   "What's your current employment status?",
//   "Whats the highest level of education you've completed?",
//   "Marital Status"
// ];

const questionsArray = [
  <Question
    id="header-trigger-1"
    key={0}
    className="question-entry question-group"
    question="1. Let's start by finding how involved you are within your community"
  />,
  <Question id={1} key={1} className="question-hidden" question="Question 1a" />,

  <Question id={2} key={2} className="question-hidden" question="Question 1b" />,
  <Question id="header-trigger-2" key={3} className="question-hidden" question="Question 1c" />,
  <Question id={4} key={4} className="question-hidden  question-group" question="2.Nice! So let's hear your thoughts about your city... " />,
  <Question id={5} key={5} className="question-hidden" question="2a" />
];
export default questionsArray;
