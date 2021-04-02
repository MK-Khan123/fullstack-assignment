import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import image from '../../images/coca-cola-225-ltr.png';

const products = [
    {
        productName: 'Danish Premium Ghee',
        weight: '400 gm',
        price: 485,
        quantity: 1
    },
    {
        productName: 'Fresh Soyabean Oil',
        weight: '5 litre',
        price: 660,
        quantity: 1
    },
    {
        productName: 'Fresh Refined Sugar',
        weight: '1 kg',
        price: 75,
        quantity: 1
    },
    {
        productName: 'ACI Pure Salt',
        weight: '1 kg',
        price: 32,
        quantity: 1
    },
    {
        productName: "Hershey's Chocolate Syrup",
        weight: '680 gm',
        price: 479,
        quantity: 1
    },
    {
        productName: 'Heinz Apple Cider Vinegar',
        weight: '473 ml',
        price: 200,
        quantity: 1
    },
    {
        productName: 'Nestlé Nescafé Classic Instant Coffee Jar',
        weight: '100 gm',
        price: 300,
        quantity: 1
    }
];

const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Home = () => {
    return (
        <div style={backgroundStyle}>
            <div style={{ padding: '100px' }} className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search products" aria-label="Search products" aria-describedby="button-addon2" />
                <button className="btn btn-success" type="button" id="button-addon2">Search</button>
            </div>
            <div className="row" style={{ paddingBottom: '300px' }}>

                {
                    products.map(product => {
                        const { productName, weight, price } = product;
                        return (
                            <div className="col-sm-12 col-md-4 d-flex justify-content-center mb-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{productName} - {weight}</h5>
                                        <div className='d-flex justify-content-around'>
                                            <h3 style={{ margin:'0px' }} className="card-text">৳ {price}</h3>
                                            <Link to="/checkout" className="btn btn-primary">Buy Now</Link>
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