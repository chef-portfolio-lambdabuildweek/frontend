import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PostsContainer from './Components/Posts/PostsContainer'
import PostForm from './Components/Posts/PostForm'
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

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
  
  render(){
    return(
      <div className='App'>

       <div className='home-link'>
          <NavLink to = '/'> Home </NavLink>
       </div>
      <div className='add-post-link'>
        <NavLink to = 'post-form'> Add New Post </NavLink>
      </div>
      <Route
      exact path = '/post-form'
      render = {props => <PostForm {...props} addNewPost = {this.addNewPost}  />} />
      <Route
      exact path = '/'
      render = {props => <PostsContainer posts ={this.state.posts} />} />
      </div>
    )
      
  }
}

export default App;
