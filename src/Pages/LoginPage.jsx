import React from 'react'
import "../index.scss";
const Login = () => {
    return (
        <div className='form-background'>
            <div className='Form-holder'>
                <h4>Sign up</h4>
                <form >
                    <input type="text" placeholder='User name' />
                    {/* <input type="email" placeholder='Email' /> */}
                    <input type="password" placeholder='Password' />
                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;