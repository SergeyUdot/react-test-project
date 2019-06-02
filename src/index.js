import React from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import News from './components/News'
import Article from './components/Article'
import TestForm from './components/TestForm'
import Profile from './components/Profile'
import Login from './components/Login'
import Notfound from './components/Notfound'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import * as serviceWorker from './serviceWorker'

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

const routing = (
  <Provider store={store}>
    <Router>
      <div className="wrap">
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/test-form">
                Test Form
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/news" component={News} />
          <Route path="/news/:article" component={Article} />
          <Route path="/test-form" component={TestForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
