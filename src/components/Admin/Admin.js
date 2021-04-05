import React, { useState } from 'react';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {

    const [isAddProduct, setIsAddProduct] = useState(true);

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-start">
                    <button onClick={() => setIsAddProduct(true)} className="btn btn-sm btn-outline-success me-2" type="button"><FontAwesomeIcon icon={faPlusSquare} /> Add Products</button>
                    <button onClick={() => setIsAddProduct(false)} className="btn btn-sm btn-outline-danger" type="button"><FontAwesomeIcon icon={faThLarge} /> Manage Products</button>
                </form>
            </nav>
            {
                isAddProduct ? <AddProduct /> : <ManageProducts />
            }
        </div>
    );
};

export default Admin;