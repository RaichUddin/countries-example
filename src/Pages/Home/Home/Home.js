import React, { useEffect, useState } from 'react';
import Homes from '../Homes/Homes';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    // console.log(users);


    useEffect(() => {

        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, []);

    return (
        <div>
            <h1>Random Users</h1>
            <div className='home-art'>
                {
                    users.map(f => <Homes f={f}></Homes>)
                }
            </div>
        </div>
    );
};

export default Home;