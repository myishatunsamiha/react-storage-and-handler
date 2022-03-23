import React from 'react';
import { addToCart, removeFromCart } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { price, name, id } = props.cosmetic;

    return (
        <div className='cosmetic-div'>
            <h3>Product Name: {name}</h3>
            <p>Product Price: {price}</p>
            <p>Product Id: {id}</p>

            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;