import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));
    }, [id]);

    const {productName, productPrice, productWeight} = product;

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
                <button style={{ borderRadius: '7px' }} className='btn btn-success'>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;