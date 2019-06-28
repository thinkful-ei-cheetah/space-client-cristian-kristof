import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  state = {
    showMenuButton: true,
    showMenu: false
  }
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  toggleMenu(e){
    console.log(e.currentTarget)
    e.currentTarget.classList.toggle("change");
  }
  renderLogoutLink() {
    return (
      <div className="logged-in-view">
        <span className="welcome-user-text">
          {this.context.user.name}
        </span>
        <nav className="logout-section">
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className="login-text">
        <Link to='/login'>Login</Link>
        {' | '}
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className="header-brand">
          <Link to='/'>
            Spaced repetition
          </Link>
        </h1>
        <div className="container" onClick={this.toggleMenu}>
          <div className="bar b1"></div>
          <div className="bar b2"></div>
          <div className="bar b3"></div>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
