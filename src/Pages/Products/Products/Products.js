import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Product.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    return (
        <div className='nodi'>
            {
                products.map(p => <Product
                    p={p}

                ></Product>)
            }
        </div>

    );
};

export default Products;