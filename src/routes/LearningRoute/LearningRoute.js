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
    upcoming:'',
    answer: ''

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


  rotate90(){
    this.props.main.current.classList.add('rotatez')
  }

  removeRotate90(){
    this.props.main.current.classList.remove('rotatez')
  }

  handleInput = (e)=> {
    const{ value } = e.target
    this.setState({guess: value.toLowerCase()})
  }

  handleNextQuestion = async (e) => {
   console.log('remove')
    e.preventDefault();
    // this.removeRotate90();
    await this.grabWord();
    this.setState({
      showQuestion: true,
      guess: '',
      // nextQuestion: this.state.upcoming
    }) 
  }

   handleShowAnswer = async (e) => {
    e.preventDefault();
    try{
      const data = await LanguageService.postGuess({guess: this.state.guess})
      console.log(data)
      this.rotate90();
      setTimeout(() => this.setState({
      showQuestion: false,
      answer: data.answer,
      isCorrect: data.isCorrect,
      upcoming: data.nextWord,
      totalScore: data.totalScore,
      correctCount: data.wordCorrectCount,
      incorrectCount: data.wordIncorrectCount
      }),500)
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
