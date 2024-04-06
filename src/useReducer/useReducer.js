import React, {useReducer, useRef} from 'react';

function countReducer (state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error()
    }
}

export default function App () {
    const [state,  dispatch] = useReducer(countReducer, 0)
    const handleIncrement = () => dispatch({type: 'increment'})
    const handleDecrement =() => dispatch({type: 'decrement'})

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}