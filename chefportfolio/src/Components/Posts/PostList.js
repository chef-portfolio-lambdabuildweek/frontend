import React from 'react';
import Post from './Posts';


const PostList = props => {
  return (
    <div className="cards-container">
          {props.cards.map(post => <Post key={post.id} post={post} togglePost={props.togglePost}/>)}
    </div>
  )
}

export default PostList;