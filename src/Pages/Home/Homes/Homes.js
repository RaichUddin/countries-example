import React from 'react';
import './Homes.css';

const Homes = (props) => {
    const { email, gender, cell } = props.f;
    const { first, last } = props.f.name;
    const { large } = props.f.picture;
    return (
        <div className='random'>

            <h4>Name: {first} {last}</h4>
            <h3>Email: {email}</h3>
            <p>Gender: {gender}</p>
            <h2>Phone: {cell}</h2>
            <img src={large} alt="" />
        </div>
    );
};

export default Homes;