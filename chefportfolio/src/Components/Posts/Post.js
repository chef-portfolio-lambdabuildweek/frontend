import React from 'react';

const Post = props => {
  return (
    <div className={`post${props.post.seen ? " seen" : ""}`}>
      <h3>{props.post && props.post.title}</h3>
      <p>Category: {props.post.category}</p>
      <img src={props.post.imgURL} alt= 'img' />
      <p>{props.post.description}</p>

    </div>
  );
};

export default Post;