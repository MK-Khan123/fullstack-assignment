import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    
    const [loggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Grocery House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav align-items-center">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link" to="/orders">Orders</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            <Link className="nav-link" to="/deals">Deals</Link>
                            {loggedInUser.signedInUser && <Link className="nav-link" to='/home'>{loggedInUser.displayName}</Link>}
                            {loggedInUser.signedInUser || <Link className="nav-link" to="/login"><button className="btn btn-outline-danger">Login</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;