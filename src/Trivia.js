import React, { useState } from 'react'
import Option from './Option'

const HTMLDecoderEncoder = require("html-encoder-decoder");

export default function Trivia( {triviaQ}) {

  console.log(triviaQ)
  
  const options = triviaQ.incorrect_answers;
  const correct = triviaQ.correct_answer;
  if (!options.includes(correct)){
    options.splice((Math.floor(Math.random()*3)), 0, correct)
  }
  
  const isCorrect = ( name ) => {
    if (name === correct) {
      setAnswer("correct");
      return true;
    }
    else {
      setAnswer("incorrect");
      return false;
    }
  }
  const [style, setStyle] = useState("button");
  const [answer, setAnswer] = useState("unanswered");

  return (
    <>
    
        <div className="category"> Category: {HTMLDecoderEncoder.decode(triviaQ.category)} </div> 
        <div className="question-text"> {HTMLDecoderEncoder.decode(triviaQ.question)} </div>  
        {/* in order to randomize options, I was going to add them to an array and randomly pop items out of it? */}
        <div className="options">
        {options.map((option) => <button onClick={() => {isCorrect(option)}}> {HTMLDecoderEncoder.decode(option)} </button>)}

        {answer === "correct" && <p> Correct! </p>}
        {answer === "incorrect" && <p> Incorrect! </p>}
        </div>    
  </>
  );
}
