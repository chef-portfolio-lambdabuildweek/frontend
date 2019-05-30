import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      description: '',
      imgURL: ''
    };
  }

  addPost = event => {
    event.preventDefault();
    this.props.addNewPost(this.state)
    this.props.history.push('/')

    this.setState({
      name: '',
      category: '',
      description: '',
      imgURL: ''
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
            value={this.state.name}
            name="name"
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