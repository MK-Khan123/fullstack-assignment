import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import './Home.css';

const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://fathomless-sea-62804.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div style={backgroundStyle}>
            <div style={{ padding: '100px' }} className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search products" aria-label="Search products" aria-describedby="button-addon2" />
                <button className="btn btn-success" type="button" id="button-addon2">Search</button>
            </div>

            {/* SPINNER ADDED */}
            {
                products.length === 0 &&
                <div className="text-center mt-5">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }

            <div className="row" style={{ paddingBottom: '300px' }}>
                {
                    products.map(product => {
                        const { productName, productWeight, productPrice, productImage, _id } = product;
                        return (
                            <div key={_id} className="col-sm-12 col-md-4 d-flex justify-content-center mb-3">
                                <div className="card cardStyle" style={{ width: "18rem", borderRadius: "15px" }}>
                                    <img src={productImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{productName} - {productWeight}</h5>
                                        <div className='d-flex justify-content-around'>
                                            <h3 style={{ margin: '0px' }} className="card-text">৳ {productPrice}</h3>
                                            <Link to={"/checkout/" + _id} className="btn btn-primary">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;