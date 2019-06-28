import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext'


class RegistrationRoute extends Component {
  static contextType = UserContext

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }


  handleRegistrationSuccess = (username, password) => {
    return AuthApiService.postLogin({
      username,
      password
    })
       .then(res => {
        this.context.processLogin(res.authToken)

        const { location, history } = this.props
        const destination = (location.state || {}).from || '/' 
        history.push(destination)
      })
      .catch(res => alert(res.error))
  }

  render() {
    return (
      <section>
        <p>
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
