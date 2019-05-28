import React from 'react';

class Login extends React.Component {
    render(){
        return(
            <div className='login-wrapper'>
                <form className='login-form'>
                    <div>Username</div>
                    <div>Password</div>
                </form>
                <button>Login</button>
            </div>
        )
    }
}

export default Login