import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.error(err))
    }, [])

    const submitUpdateHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${id}/update`, {
            title,
            price,
            description
        })
        .then(res => console.log('Response: ', res))
        .catch(err => console.log('Error: ', err))
        navigate(`/${id}`);
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitUpdateHandler}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Update;