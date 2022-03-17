import React from 'react';
import './Product.css';


const Product = (props) => {
    const { strMeal, strMealThumb } = props.p;
    console.log(props);
    return (
        <div className='meal'>
            <h4>Meals: {strMeal} </h4>
            <img src={strMealThumb} alt="" />

        </div>
    );
};

export default Product;