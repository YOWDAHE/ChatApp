import React from 'react'
import "../index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
const SignUp = () => {
    return (
        <div className='form-background'>
            <div className='Form-holder'>
                <h4 style={{padding: '5px'}}>Sign up</h4>
                <form >
                    <input type="text" placeholder='Display name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <div>
                        <label htmlFor="file">
                            <FontAwesomeIcon icon={faImage} />
                        </label>
                        <input type="file" id='userIcon'/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;