import React from 'react';

const Post = props => {
  return (
    <div className={`post${props.post.seen ? " seen" : ""}`}>
      <h3>{props.post.title}</h3>
      <p>Category: {props.post.category.toUpperCase()}</p>
      <img src={props.post.imgURL} />
      <p>{props.post.description}</p>

    </div>
  );
};

export default Post;