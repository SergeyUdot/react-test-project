import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/SessionActions'
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToProfile: false,
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  onBtnClickHandler = (e) => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToProfile: true })
      }
    )
  }

  validate = () => {
    const { username, password } = this.state
    if (username.trim() && password.trim()) {
      return true
    }
    return false
  }

  render() {
    const { errorMsg } = this.props
    const profileUrl = '/profile'
    const { username, password, redirectToProfile } = this.state

    if (redirectToProfile) {
      return <Redirect to={profileUrl} />
    }

    return (
      <div className="loginForm">
        <h1>Login</h1>
        <form>
          {
            errorMsg && <p className="errorMessage">{errorMsg}</p>
          }
          <input
            type='text'
            id="username"
            onChange={this.handleChange}
            className='login'
            placeholder='Your LogIn'
            value={username}
          />
          <input
            type='password'
            id="password"
            onChange={this.handleChange}
            className='password'
            placeholder='Your password'
            value={password}
          />
          <button
            className='login__btn'
            disabled={!this.validate()}
            onClick={this.onBtnClickHandler}>
              LogIn
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)