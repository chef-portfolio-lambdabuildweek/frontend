import React from 'react';


class Post extends React.Component {
    render(){
        return (
            <div className='post-wrapper'>
               <div className='post-header'>
                    <img src='' /> <i class="fas fa-user"></i> Username
               </div> 
               <div className='post-name'>
                   Name of Dish
               </div>
               <div className='post-img'>
                   <img src='' /> <i class="fas fa-pizza-slice"></i>
               </div>
               <div className='post-description'>
                    description of dish
               </div>
               <div className='post-location'>
                   San Antonio, Tx
               </div>
            </div>
        )
    }
}

// const Post = props => {
//   return (
//     <div className={`card${props.post.seen ? " seen" : ""}`}>
//       <h3>{props.post.title}</h3>
//       <p>{props.post.category.toUpperCase()}</p>
//       <a href={`${props.post.link}`}>READ NOW</a>
//       <button
//         type="submit"
//         onClick={() => props.togglePost(props.post)}
//       >
//         completed
//       </button>
//     </div>
//   );
// };

export default Post