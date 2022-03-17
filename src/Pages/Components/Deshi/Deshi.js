import React from 'react';
import './Deshi.css';

const Deshi = (props) => {
    const { name, capital, population, flag } = props.r;
    return (
        <div className='country'>
            <h4>Country Name: {name}</h4>
            <h5> Population: {population} </h5>
            <p>Capital: {capital}</p>
            <img src={flag} alt="" />
        </div>
    );
};

export default Deshi;