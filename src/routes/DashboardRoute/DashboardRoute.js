import React, { Component } from 'react'
import './Dashboard.css';

class DashboardRoute extends Component {
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
    return (
      <ul>
        {words.map(word => {
          return (
          <li>
            {`${word.value} |  ${word.rightCount} ${word.wrongCount}`}
          </li>
        )})}
      </ul>
    )
  }

  render() {
    return (
      <section>
        <div className="meter">
          <span style={this.props.style}>99%</span>
        </div>
        <span className="current-score">Current Score: {this.props.currentScore} </span>
        <h2 className="current-language">{this.props.language}</h2> 
        {this.wordList(this.props.words)}
        <input className="start-learn-btn" type="button" value="Start Learning >"/>
      </section>
    );
  }
}

export default DashboardRoute
