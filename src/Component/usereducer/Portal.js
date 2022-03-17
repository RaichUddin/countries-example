import React, { useReducer, useState } from 'react';
import { PortalReducer } from '../../portalReducr/PortalReducer';
import { PortalStore } from '../../Store/PortalStore';
import './Portal.css';

const Portal = () => {
    const [state, dispatch] = useReducer(PortalReducer, PortalStore);
    const [name, setName] = useState('');
    return (
        <div className='add_doctor'>
            <h1>...My Doctors Portal...</h1>
            <h3>ADD Doctors: {state.doctors.length}</h3>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'ADD_DOCTOR', name: name })}>ADD</button>
            <br />
            <h3>.................Doctors Name................</h3>
            {
                state.doctors.map(doctor => <p key={doctor.id}>
                    {doctor.name} {doctor.id}
                    <button onClick={() => dispatch({ type: 'REMOVE_DOCTOR', id: doctor.id })}>X</button>
                </p>)
            }


        </div>
    );
};

export default Portal;