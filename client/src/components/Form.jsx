import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new', {
        title,
        price,
        description
    })
    .then(res => console.log('Response: ', res))
    .catch(err => console.log('Error: ', err))
    clearForm();
}

const clearForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
}

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
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

export default Form;