import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = (props) => {
    const first = 55;
    const second = 66;
    const result = multiply(first, second);
    return (
        <div>
            <h1>This is shoes component</h1>
            <p>result: {result}</p>
            <p>result: {props.hero}</p>
        </div>
    );
};

export default Shoes;