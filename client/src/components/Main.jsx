import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

const Main = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    })

    return (
        <div>
            <Form />
            <List product= {product}/>
        </div>
    )
}

export default Main