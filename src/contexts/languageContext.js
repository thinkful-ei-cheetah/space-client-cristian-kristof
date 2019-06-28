import React, { Component } from 'react'

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
      setLanguage: this.setLanguage,
      head: this.state.head
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
