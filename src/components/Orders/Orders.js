import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'http://localhost:5000/orders?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email]);

    return (
        <div>
            <h1 style={{ paddingTop: '70px' }}>Order Summary</h1>
            <h5 className="text-center pt-3">Greetings {loggedInUser.displayName}!</h5>

            {/* SPINNER ADDED */}
            {
                orders.length === 0 &&
                <div className="text-center mt-5">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }

            <table className="table table-dark table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Weight</th>
                        <th className="text-center" scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {
                            const { productName, productWeight, productPrice, productQuantity, orderTime, _id } = order;
                            return (
                                <tr key={_id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{productName}</td>
                                    <td>{productWeight}</td>
                                    <td className="text-center">{productQuantity}</td>
                                    <td>৳ {productPrice}</td>
                                    <td>{new Date(orderTime).toDateString('dd/MM/yyyy')}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;