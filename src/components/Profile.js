import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/SessionActions'

class Profile extends React.Component {
  state = {
    redirectToLogin: false,
  }

  handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem('isAuth', '')
    this.props.logOut()
    this.setState({redirectToLogin: true})
  }

  renderMyProfile = () => {
    const isAuth = localStorage.getItem('isAuth')
    let profileTemplate = null;
    if(isAuth) {
      const { user } = this.props
      profileTemplate = (
        <div>
          <h1>My Profile</h1>
          {user && <p>Hi, {user.name}!</p>}
          <p><button onClick={this.handleClick}>LogOut</button></p>
        </div>  
      )
    } else {
      return <Redirect to={'/login'} />
    }

    return profileTemplate
  }

  render() {
    const { redirectToLogin } = this.state
    if(redirectToLogin) {
      return <Redirect to={'/login'} />
    }
    return <>{this.renderMyProfile()}</>
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)