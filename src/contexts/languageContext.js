import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service' // language api
import TokenService from '../services/token-service'


const LanguageContext = React.createContext({
    name: "Spanish",
    head: 21,  //head is current word ID
    total_score: 0,
    words: [],
    setWords: () => {},
    error: null,
    setError: () => {}, 
    setData: ()=> {console.log('problem')}

})

export default LanguageContext

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    const state = { error: null }
    this.state = state;
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }


  setData = (data) => {
    console.log(data)
    this.setState({
      name: data.language.name,
      head: data.language.head,  //head is current word ID
      total_score: data.language.total_score,
      words: data.words,
    })
  }


  render() {
    const value = {
      setData: this.setData,
      name: this.state.name,
      total_score: this.state.total_score,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLanguage: this.setLanguage
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
