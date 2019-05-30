import React, { Component } from 'react';
import Content from '../Content/Content';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      description: '',
      imgURL: ''
    };
  }

  addPost = event => {
    event.preventDefault();
    this.props.addNewPost(this.state)


    this.setState({
      ...this.state,
      title: '',
      category: '',
      description: '',
      imgURL: ''
    });

    axios
    .get(
      "https://chef-portfolio.herokuapp.com/api/post"
)
    .then(res => {
      if (res.status === 200 && res.data) {
        console.log(res.data);
        this.setState({ loggedIn: true, posts: res.data });
      } else {
        throw new Error();
      }
    })
    .catch(err => {
      this.props.history.push("/login");
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.addPost}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name of Dish"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Category"
            value={this.state.category}
            name="category"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Description of Food"
            value={this.state.description}
            name="description"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Image Link"
            value={this.state.imgURL}
            name="imgURL"
          />
          <button type="submit">Add My Creation!</button>
        </form>
      </div>
    );
  }
}

export default PostForm;