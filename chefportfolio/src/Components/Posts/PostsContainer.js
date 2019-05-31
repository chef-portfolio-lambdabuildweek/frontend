import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm'

class PostsContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        activeItem: null
      }
    }
  
    componentDidMount(){
      axios
      .get('https://chef-portfolio.herokuapp.com/api/post')
      .then(res =>
        this.setState({ posts: res.data}))
      .catch(error => console.log(error))
    }
  
    render(){
      return(
        <div>
         <PostList posts={this.state.posts} />
         {/* <PostForm addNewPost = {this.addNewPost}  />  */}
        </div>
      )
        
    }
  }

  export default PostsContainer;