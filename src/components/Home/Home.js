import React from 'react';

const Home = () => {
    return (
        <div>
            <div style={{padding:'100px'}} class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search products" aria-label="Search products" aria-describedby="button-addon2" />
                <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Home;