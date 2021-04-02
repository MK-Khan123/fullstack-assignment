import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

//To handle [DEFAULT] error.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                user.signedInUser = true;
                setLoggedInUser(user);
                history.replace(from);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const facebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                user.signedInUser = true;
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div style={{ padding: '40px', border: '1px solid black' }}>
            <h1>Login</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input name="email" type="email" placeholder='Your Email' className="form-control" />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input name="password" type="password" placeholder='Your Password' className="form-control" />
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
                <button style={{ borderRadius: '25px' }} className='btn btn-outline-danger btn-lg' onClick={googleSignIn} type="button"><FontAwesomeIcon icon={faGoogle} /> Sign in using Google account</button>
                <button style={{ borderRadius: '25px' }} className='btn btn-outline-primary btn-lg' onClick={facebookSignIn} type="button"><FontAwesomeIcon icon={faFacebookF} /> Sign in using Facebook account</button>
            </div>
        </div>
    );
};

export default Login;