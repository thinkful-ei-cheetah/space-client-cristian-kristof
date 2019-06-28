import React from 'react'


const Answer = ({props, handleNextQuestion}) => {


  const {answer, totalScore, nextWord, isCorrect, guess} = props;
  
  const correctView = isCorrect ? <h2>You were correct! :D</h2> : <h2>Good try, but not quite right :(</h2>

    const followUp = <p>The correct translation for {nextWord} was {answer} and you chose {guess}!</p>

  return (
  <section>
    <div className="DisplayScore">
      <p className="current-score">Your total score is: {totalScore}</p>
    </div>
    <br/>
    <br/>
    <div className="DisplayFeedback">
      {correctView}
      {followUp}
    </div> 
    <button type="button" onClick={handleNextQuestion}>Try another word!</button>
  </section>
  )
}

export default Answer;