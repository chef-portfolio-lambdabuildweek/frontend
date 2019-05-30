import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div className='logo'>
                <i class="fas fa-pizza-slice"></i>
                </div>
                <div className='upload-btn'>
                    <button>Upload</button>
                </div>
            </div>
        )
    }
}

export default NavBar