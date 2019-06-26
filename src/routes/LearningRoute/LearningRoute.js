import React, { Component } from 'react'
import './Learning.css';
import LanguageService from '../../services/language-service'
import Question from './Question';
import Answer from './Answer'

// "nextWord": "Testnextword",
//   "wordCorrectCount": 222,
//   "wordIncorrectCount": 333,
//   "totalScore": 999

class LearningRoute extends Component {
  state = {
    guess: '',
    showQuestion: true,
    nextWord: '',
    totalScore: null,
    correctCount: null,
    incorrectCount: null,
    isCorrect: false,

  }

componentDidMount(){
    this.grabWord();
  }

  grabWord = async () =>{
    const wordData = await LanguageService.getWord(this.context.head);
    console.log(wordData)
    this.setState({
      nextWord: wordData.nextWord,
      totalScore: wordData.totalScore,
      correctCount: wordData.wordCorrectCount,
      incorrectCount: wordData.wordIncorrectCount,
    })
  }

  handleInput = (e)=> {
    const{ value } = e.target
    this.setState({guess: value.toLowerCase()})
  }

  handleNextQuestion = (e) => {
    e.preventDefault();
    this.setState({
      showQuestion: true,
      guess: ''
    }) 
  }

   handleShowAnswer = async (e) => {
    e.preventDefault();
    try{
      const data = await LanguageService.postGuess({guess: this.state.guess})
      console.log(data)
      this.setState({
      showQuestion: false,
    
      })
    } catch(e){
      this.setState({
        error: e.message
      })
      console.log(e);
    }
  }
  
  render() {
    return (
      this.state.showQuestion ? 
        <Question  
          handleSubmit={this.handleShowAnswer}
          props={this.state} handleInput={this.handleInput}
          />
      : <Answer 
          handleNextQuestion={this.handleNextQuestion}
          props={this.state}
        />
    );
  }
}

export default LearningRoute
