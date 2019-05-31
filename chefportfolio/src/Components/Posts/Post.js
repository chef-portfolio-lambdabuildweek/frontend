import React from 'react';
import './Post.css';

const Post = props => {
  return (
    <div className={`post${props.post.seen ? " seen" : ""}`}>
    <div className='post'>
      <h3 className='title'>{props.post && props.post.title}</h3>
      <p className='description'>{props.post.description}</p>
      {/* <img src={props.post.imgURL} alt= 'img' /> */}
      <div className='img-link'>
      <a  href={props.post.imgURL}>An image of this creation is just one click away!</a>
      </div>
      <p className='category'>Category: {props.post.category} </p>
      <p className='edit'> Edit </p>
      <p className='delete'> Delete </p>
    </div>
    </div>
  );
};

export default Post;