import React from 'react';
import background from '../../images/background.jpg';

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
            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: '300px', paddingBottom: '300px' }}>
                
            </div>
        </div>
    );
};

export default Home;