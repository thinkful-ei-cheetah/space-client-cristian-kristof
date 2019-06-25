import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import LanguageContext from '../../contexts/languageContext'

class LoginRoute extends Component {

  static contextType = LanguageContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/' 
    history.push(destination)
  }

  handleGetData = data => {
    this.context.setData(data);
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <LoginForm
          handleGetData={this.handleGetData}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute
