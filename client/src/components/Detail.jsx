import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    })

    return (
        product&&
        <div>
            <h2>{ product.title }</h2>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
        </div>
    )
}

export default Detail;