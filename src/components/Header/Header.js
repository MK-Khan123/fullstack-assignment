import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Grocery House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            <a className="nav-link" href="/orders">Orders</a>
                            <a className="nav-link" href="/admin">Admin</a>
                            <a className="nav-link" href="deals">Deals</a>
                            <a className="nav-link" href="login">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;