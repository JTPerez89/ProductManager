import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    , []})

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/${id}/delete`)
        .then(res => console.log('Response: ', res))
        .catch(err => console.error(err));
        navigate("/");
    }

    return (
        product&&
        <div>
            <h2>{ product.title }</h2>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default Detail;