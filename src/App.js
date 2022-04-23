import React, { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./Trivia";
import Button from "@mui/material/Button";

function App() {
  const [trivia, setTrivia] = useState(null);

  const generateQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => setTrivia(data))
      .catch((error) => {
        console.error("Error" + error);
      });
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  console.log(trivia);

  return (
    <>
      <h1 className="title"> Trivia! </h1>
      <Button onClick={generateQuestions}> 10 New Questions </Button>
      <div>
        {" "}
        {trivia &&
          trivia.results.map((question, index) => (
            <>
              <h1 className="category"> Question {index + 1} </h1>
              <Trivia triviaQ={question} />
            </>
          ))}{" "}
      </div>
    </>
  );
}

export default App;
