import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

const HTMLDecoderEncoder = require("html-encoder-decoder");

export default function Trivia( {triviaQ}, {index} ) {  
  const options = triviaQ.incorrect_answers;
  const correct = triviaQ.correct_answer;
  if (!options.includes(correct)){
    options.splice((Math.floor(Math.random()*3)), 0, correct)
  }
  
  const isCorrect = ( name ) => {
    if (name === correct) {
      setCls("success");
      setAnswer("correct");
      return true;
    }
    else {
      setCls("error");
      setAnswer("incorrect");
      return false;
    }
  }
  const [answer, setAnswer] = useState("unanswered");
  const [cls, setCls] = useState("primary");
   
  return (
    <Card sx={{py: 3, mx: "auto", width: 800}}>
    <>
        <div className="category"> 
        <h3> Category: {HTMLDecoderEncoder.decode(triviaQ.category)}</h3> 
        </div> 
        <div className="question-text"> {HTMLDecoderEncoder.decode(triviaQ.question)} </div>  

        <div className="options">
        {options.map((option) => <Button variant="contained" color={cls} id={options.indexOf(option)} onClick={() => isCorrect(option)}> {HTMLDecoderEncoder.decode(option)} </Button>)}
        {answer === "correct" && <h2 color="green"> Correct! </h2>}
        {answer === "incorrect" && <h2 color="red"> Incorrect </h2>}
        </div>
      </>
    </Card>   
  );
}
