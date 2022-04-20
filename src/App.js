import React, { useState, useEffect } from 'react';
import './App.css';
import Trivia from './Trivia';

function App() {
  const [trivia, setTrivia] = useState(null);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => setTrivia(data))
    .catch(error => {
      console.error("Error" + error)
    })
  }, [])

  console.log(trivia)

  return (<>
    <h1> Trivia! </h1>
    <div> {trivia && trivia.results.map((question) => <Trivia triviaQ={question} /> )} </div>
    </>
  );
}

export default App;
