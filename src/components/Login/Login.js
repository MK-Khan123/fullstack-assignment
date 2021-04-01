import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <div>
            <h1>This is Login</h1>
            <button className='btn btn-outline-danger btn-lg'><FontAwesomeIcon icon={faGoogle} /> Sign in using Google account</button>
            <br/>
            <button className='btn btn-outline-primary btn-lg'><FontAwesomeIcon icon={faFacebookF} /> Sign in using Facebook account</button>
        </div>
    );
};

export default Login;