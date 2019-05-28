import React from 'react';

class ProfileSidebar extends React.Component {
    render(){
        return(
            <div className='ProfileSidebar'>
            <div className='nav-profile-img'>
                <img src='' />
            </div>
            <div className='nav-profile-name'>
                
            </div>
            <div className='nav-sidebar'>
                <nav>
                    <a href=''>Home</a>
                    <a href=''>Categories</a>
                    <a href=''>About</a>
                    <a href=''>Contact</a>
                </nav>
            </div>
            </div>
        )
    }
}

export default ProfileSidebar