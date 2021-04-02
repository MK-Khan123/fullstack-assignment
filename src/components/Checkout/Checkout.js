import React from 'react';

const Checkout = () => {
    return (
        <div>
            <h1 style={{ paddingTop: '70px', paddingBottom: '20px' }}>Checkout</h1>
            <div style={{ border: "1px solid lightgray", borderRadius: "10px" }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>৳ @mdo</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="table-secondary">
                            <td><strong>Total</strong></td>
                            <td></td>
                            <td>৳ Some Price</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'end' }}>
                <button style={{borderRadius:'7px'}} className='btn btn-success'>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;