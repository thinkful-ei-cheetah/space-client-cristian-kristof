import React, { Component } from 'react'
import './Dashboard.css';
import LanguageContext from '../../contexts/languageContext';
import LanguageService from '../../services/language-service'
import { Link } from 'react-router-dom'

class DashboardRoute extends Component {

  static contextType = LanguageContext;
  componentDidMount = () =>{
    this.grabData()
  }
  

  grabData = () =>{
    console.log(this.context.name)
    if (!this.context.name){
      console.log('yes i need to get data')
     LanguageService.getData()
     .then(this.context.setData)
     .catch(
       console.log
    )
    }
  }
  
  static contextType = LanguageContext;
  static defaultProps = {
    style: {width: '100%'},
    language: 'Spanish',
    words: [{
      value: 'hola',
      wrongCount: 3,
      rightCount: 32,
    },{
      value: 'queso',
      wrongCount: 1,
      rightCount: 2,
    }],
    currentScore: 122
  }

  wordList = (words) => {
    return words.map(word => {
          return (
          <li key={word.id}>
            <div><h4>{word.original}</h4></div>
            <div>correct answer count: {word.correct_count}</div>
            <div>incorrect answer count: {word.incorrect_count}</div>
          </li>
        )})
  
  }

  render() {
    const {name, total_score, words} = this.context;
    
    return (
      <section>
        {/* <div className="meter">
          <span style={this.props.style}>99%</span>
        </div> */}
        <span className="current-score">Total correct answers: {total_score} </span>
        <h2 className="current-language">{name}</h2> 
        <ul className="word-list">
        <h3>Words to practice</h3>
         {this.wordList(words || [])}
        </ul>
        <Link to="/learn"  className="start-learn-btn" >Start practicing</Link>
      </section>
    );
  }
}

export default DashboardRoute
