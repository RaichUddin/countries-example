import React, { useEffect, useState } from 'react';
import Deshi from '../Deshi/Deshi';
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (

        <div className='countries'>
            {
                countries.map(r => <Deshi
                    r={r}
                    key={r.capital}
                ></Deshi>)
            }
        </div>
    );
};


export default Countries;