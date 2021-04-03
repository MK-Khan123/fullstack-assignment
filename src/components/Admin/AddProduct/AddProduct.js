import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState();

    const handleImageUpload = event => {
        console.log(event.target.files[0]);

        const imageData = new FormData();
        console.log(imageData);
        imageData.set('key', 'b352dbf4911ad9cff5dc774e2d6c1446');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(error => console.log(error));

        const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which is sent to MongoDB database.
        while (currentTime + 4000 >= new Date().getTime());
    };

    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1 style={{ paddingBottom: "30px" }}>Add your products here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="form-label">
                        <h4>Product Name</h4>
                    </label>
                    <input className="form-control" type="text" {...register('productName', { required: true })} />
                    {errors.productName && <span style={{ color: 'red' }}>Product name is required</span>}
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        <h4>Upload Product Image</h4>
                    </label>
                    <input className="form-control" type="file" {...register('productImage', 'handleImageUpload', { required: true })} />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        <h4>Product Weight</h4>
                    </label>
                    <input className="form-control" type="text" placeholder="for e.g. in gm/kg/ltr" {...register('productWeight', { required: true })} />
                    {errors.productWeight && <span style={{ color: 'red' }}>Product weight is required</span>}
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        <h4>Product Price</h4>
                    </label>
                    <input className="form-control" type="number" placeholder="in Taka" {...register('productPrice', { required: true })} />
                    {errors.productPrice && <span style={{ color: 'red' }}>Product price is required</span>}
                </div>

                <div style={{ textAlign: "end" }}>
                    <button className="btn btn-success" type="submit">Save</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;