import React from 'react';
import './App.css';

import PostsContainer from './Components/Posts/PostsContainer'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      activeItem: null
    }
  }

  render(){
    return(
      <div>
       <PostsContainer />
      </div>
    )
      
  }
}

export default App;
