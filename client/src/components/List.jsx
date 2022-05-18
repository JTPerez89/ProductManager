import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


const List = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/${id}/delete`)
        .then(res => {
            removeFromDom(id)
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            {props.product.map( (product) =>
                <p>
                <Link to={`${product._id}`}>{product.title}</Link>
                <Link to={`${product._id}/edit`}> Update</Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </p>
            )}
        </div>
    )
}

export default List;