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

  componentDidMount(){
    axios.get('https://chef-portfolio.herokuapp.com/api/post')
    .then(res => {
      this.setState({ posts: res.data })
    })
    .catch(err =>{
      console.log(err)
    })
  }
  addNewPost = post => {
    axios
    .post('https://chef-portfolio.herokuapp.com/api/post/create', post)
    .then( res => {
      this.setState({ posts: res.data })
    })
    .catch( err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <nav className="top-nav">
          <div className="reg-login">
          <NavLink className="top-nav-tab sign-in reg" to="/register">
            Register
          </NavLink>
            <NavLink className="top-nav-tab sign-in" to="/login">
              Login
            </NavLink>
          </div>
          <div className="logo">
          <NavLink to="/content">
           
          </NavLink>
        </div>
          <NavLink className="top-nav-tab main" to="/content">
            Home
          </NavLink>
          <NavLink to ='/post-form'>
            Add New Post
          </NavLink>
          <NavLink
              className="top-nav-tab main"
              to="/login"
              onClick={() => localStorage.removeItem("jwt")}
            >
              Log Out
            </NavLink>
        </nav>
        

        <section>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" render={props => <Profile {...props} />} />
            <Route path="/content" component={PostsContainer} />
            <Route exact path="/" render={() => <Redirect to="/content" />} />
            <Route
      exact path = '/post-form'
       />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);