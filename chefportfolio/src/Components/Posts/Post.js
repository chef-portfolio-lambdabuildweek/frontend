import React from 'react';


class Post extends React.Component {
    render(){
        return (
            <div className='post-wrapper'>
               <div className='post-header'>
                    <img src='' /> Profile Img, and Username of Poster, Also serves as clickable link to profiles page
               </div> 
               <div className='post-name'>
                   name of the dish/item on display
               </div>
               <div className='post-img'>
                   <img src='' />
               </div>
               <div className='post-description'>
                    description of dish/item on display
               </div>
               <div className='post-location'>
                   will tell location of poster
               </div>
            </div>
        )
    }
}

export default Post