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
    }, []);

    return (
        <div>
            <h1 style={{ paddingTop: '70px' }}>Order Summary</h1>
            <h5 style={{textAlign:"center"}}>Greetings {loggedInUser.displayName}!</h5>
            <h6 style={{paddingBottom: '20px'}}>{orders.length} orders found</h6>
            
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            const { productName, productWeight, productPrice, productQuantity, orderTime } = order;
                            return (
                                <tr>
                                    <td>{productName}</td>
                                    <td>{productWeight}</td>
                                    <td>{productQuantity}</td>
                                    <td>{productPrice}</td>
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