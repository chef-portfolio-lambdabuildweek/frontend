import React from 'react';
import Post from './Post';


const PostList = props => {
  return (
    <div className="posts-container">
          {props.posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default PostList;