import React, { Component } from 'react'
import './Learning.css';
import LanguageService from '../../services/language-service'
import LanguageContext from '../../contexts/languageContext';
import LearningForm from './LearningForm'

// "nextWord": "Testnextword",
//   "wordCorrectCount": 222,
//   "wordIncorrectCount": 333,
//   "totalScore": 999

class LearningRoute extends Component {
  state = {
    nextWord: '',
    totalScore: null,
    correctCount: null,
    incorrectCount: null,


  }
   static defaultProps ={
     word: 'Hello',
     wrongCount: 3,
     rightCount: 5,
     total_score: 17
   }
  static contextType = LanguageContext;

  async componentDidMount(){
    await this.grabWord();
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
  }

  render() {
    const {total_score, words} = this.context
    return (
      <section>
        <p className="current-score">Your total score is: {this.state.totalScore}</p>
        <br/>
        <br/>
        <h2 className="current-word">Translate the word:</h2> 
        <span className="word-to-translate">{this.state.nextWord}</span>
        <LearningForm handleSubmit={this.handleSubmit}/>

        <div className="guess-count">
          <p className="correct-counts">{`You have answered this word correctly ${this.state.correctCount} times.`}</p>
          <p className="correct-counts">{`You have answered this word incorrectly ${this.state.incorrectCount} times.`}</p>
        </div>
      </section>
    );
  }
}

export default LearningRoute
