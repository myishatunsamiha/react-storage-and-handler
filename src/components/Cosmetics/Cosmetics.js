import React, { useEffect, useState } from 'react';
import { removeEntireCart } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';




const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    return (
        <div>
            <h1>Welcome to cosmetic store</h1>
            <button onClick={() => removeEntireCart()}>Remove entire cart</button>
            {cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)}
        </div>
    );
};

export default Cosmetics;