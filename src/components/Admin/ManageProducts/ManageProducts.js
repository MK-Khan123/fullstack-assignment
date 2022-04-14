import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://frozen-scrubland-31623.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        const url = `https://frozen-scrubland-31623.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert("Product removed successfully! Please go to Home page to see the update.");
    };

    return (
        <div>
            {/* SPINNER ADDED */}
            {
                products.length === 0 &&
                <div className="text-center mt-5">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            {/* A TABULAR DISPLAY OF PRODUCTS ALONG WITH THEIR RESPECTIVE DELETE BUTTON */}
            <table className="table table-striped table-hover border mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            const { productName, productWeight, productPrice, _id } = product;
                            return (
                                <tr key={_id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{productName}</td>
                                    <td>{productWeight}</td>
                                    <td>৳ {productPrice}</td>
                                    <td><button className="btn btn-sm btn-success"><FontAwesomeIcon icon={faEdit} /></button> <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;