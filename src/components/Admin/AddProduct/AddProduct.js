import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Add your products here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="productName" type="text" ref={register({ required: true })} />
                {errors.productName && <span style={{ color: 'red' }}>Product name is required</span>}

                <input name="productImage" type="file" placeholder="upload png files" ref={register({ required: true })} />
                {errors.productImage && <span style={{ color: 'red' }}>Product image is required</span>}

                <input name="productWeight" type="text" placeholder="for e.g. in gm/kg/litre" ref={register({ required: true })} />
                {errors.productWeight && <span style={{ color: 'red' }}>Product weight is required</span>}

                <input name="productPrice" type="number" placeholder="in Taka" ref={register({ required: true })} />
                {errors.productPrice && <span style={{ color: 'red' }}>Product price is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;