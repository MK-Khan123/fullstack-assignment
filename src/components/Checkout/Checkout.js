import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    const { productName, productPrice, productWeight } = product;

    const handleCheckout = () => {
        const orderData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            orderTime: new Date(),
            productName: productName,
            productPrice: productPrice,
            productWeight: productWeight,
            productQuantity: '1'
        }

        const url = "http://localhost:5000/addOrder";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Order placed successfully! Please check Orders page');
                }
            });
    }

    return (
        <div>
            <h1 style={{ paddingTop: '70px', paddingBottom: '20px' }}>Checkout</h1>
            <div style={{ border: "1px solid lightgray", borderRadius: "10px" }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{productName} - {productWeight}</td>
                            <td>1</td>
                            <td>৳ {productPrice}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="table-secondary">
                            <td><strong>Total</strong></td>
                            <td></td>
                            <td>৳ {productPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'end' }}>
                <button onClick={handleCheckout} style={{ borderRadius: '7px' }} className='btn btn-success'>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;