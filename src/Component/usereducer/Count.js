import React, { useReducer } from 'react';
import './Count.css';
import Portal from './Portal';

const nodi = {
    count: 0
}


const raich = (state = nodi, action) => {
    switch (action.type) {
        case 'INCRIMENT':
            return {
                ...state,
                count: state.count + 1
            };

        case 'DECRIMENT':
            return { count: state.count - 1 };

        default:
            return state;

    }
}

const Count = () => {
    const [state, dispatch] = useReducer(raich, nodi);

    return (
        <div className='count__bg'>
            <h1> Count: {state.count}</h1>
            <br />
            <span className='button-1'><button onClick={() => dispatch({ type: 'INCRIMENT' })}>+</button></span>

            <button className='button-2' onClick={() => dispatch({ type: 'DECRIMENT' })}>-</button>
            <Portal></Portal>
        </div>


    );

};
export default Count;