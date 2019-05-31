import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PostsContainer from './Components/Posts/PostsContainer'
import PostForm from './Components/Posts/PostForm'
import {Route, NavLink, Switch, withRouter} from 'react-router-dom';
import { Redirect } from "react-router";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Profile from "./Authentication/Profile";
import Content from "./Components/Content/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1><i class="fas fa-pizza-slice"></i> Chef Portfolio!</h1>
        <nav>
        <NavLink className="nav-home" to="/content">
            Home
          </NavLink>
        <NavLink className="nav-post" to ='/post-form'>
            Add New Post
        </NavLink>
        <NavLink className='nav-reg' to="/register">
            Register
          </NavLink>
        <NavLink className='nav-login' to="/login">
              Login
            </NavLink>
        </nav>
        
        <section>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" render={props => <Profile {...props} />} />
            <Route path="/content" component={PostsContainer} />
            <Route exact path="/" render={() => <Redirect to="/content" />} />
            <Route exact path = '/post-form' component={Content} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);