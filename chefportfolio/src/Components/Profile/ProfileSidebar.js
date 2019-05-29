import React from 'react';

class ProfileSidebar extends React.Component {
    render(){
        return(
            <div className='ProfileSidebar'>
            <div className='nav-profile-img'>
            <i class="fas fa-user"></i>
            </div>
            <div className='nav-profile-name'>
                Name
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