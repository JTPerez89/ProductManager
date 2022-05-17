import React from 'react';
import { Link } from 'react-router-dom';


const List = (props) => {
    return (
        <div>
            {props.product.map( (product) =>
                <p>
                <Link to={`${product._id}`}>{product.title}</Link>
                </p>
            )}
        </div>
    )
}

export default List;