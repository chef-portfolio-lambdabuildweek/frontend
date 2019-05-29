import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Post from './Components/Posts/Post';
import Login from './Components/Login/Login';
import ProfileSidebar from './Components/Profile/ProfileSidebar';
import Content from './Components/Posts/Content';
import Axios from 'axios';
import PostList from './Components/Posts/PostList';
import NavBar from './Components/Navigation/NavBar'



// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      activeItem: null
    }
  }

  componentDidMount(){
    Axios
    .get('https://chef-portfolio.herokuapp.com/api/post')
    .then(res => this.setState({ items: res.data}))
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div>
       <Post />
      </div>
    )
      
  }
}

export default App;
