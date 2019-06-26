import React from 'react'
import LearningForm from './LearningForm'

const Question = ({handleSubmit, handleInput, props}) => {
  
  const {totalScore, nextWord, correctCount, incorrectCount} = props;

  return (
  <section>
    <p className="current-score">Your total score is: {totalScore}</p>
    <br/>
    <br/>
    <h2 className="current-word">Translate the word:</h2> 
    <span className="word-to-translate">{nextWord}</span>
    <LearningForm handleSubmit={handleSubmit} handleInput={handleInput}/>

    <div className="guess-count">
      <p className="correct-counts">{`You have answered this word correctly ${correctCount} times.`}</p>
      <p className="correct-counts">{`You have answered this word incorrectly ${incorrectCount} times.`}</p>
    </div>
  </section>
  )
}

export default Question;