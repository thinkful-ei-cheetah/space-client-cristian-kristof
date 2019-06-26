import React from 'react'


const Answer = ({props}) => {


  const {totalScore, nextWord, handleGetNextQuestion, correctCount, incorrectCount, isCorrect, guess} = props;
  
  const correctView = isCorrect ? <h2>Good job, you did it! :(</h2> : <h2>Good try, but not quite right :(</h2>

    const followUp = isCorrect ?  <p>Good job </p> : <p>The correct translation for {nextWord} was changeME! and you chose {guess}</p>

  return (
  <section>
    <div className="DisplayScore">
    <p className="current-score">Your total score is: {totalScore}</p>
    </div>
    <br/>
    <br/>
    {correctView}
    {followUp}
    <span className="word-to-translate">{nextWord}</span>
 
    <button type="button">onClick={handleGetNextQuestion}>Try Another Question</button>
    <div className="guess-count">
      <p className="correct-counts">{`You have answered this word correctly ${correctCount} times.`}</p>
      <p className="correct-counts">{`You have answered this word incorrectly ${incorrectCount} times.`}</p>
    </div>
  </section>
  )
}

export default Answer;