import './Counter.css';
import React, { useState } from 'react';
import ButtonCounter from './ButtonCounter';

export default function Counter({ Amount }) {
    const [count, setCount] = useState(0);

    function increment(Amount) {
        setCount(count + Amount);
    }
    function decrement(Amount) {
        setCount(count - Amount);
    }

    

    return (
        <div className="ButtonCounter">
            <span className="count" >{count}</span>
            <ButtonCounter Amount={1} incrementMethod={increment} decrementMethod={decrement} />
            <ButtonCounter Amount={2} incrementMethod={increment} decrementMethod={decrement} />
            <ButtonCounter Amount={5} incrementMethod={increment} decrementMethod={decrement} />
            <button className='reset-button'
                                onClick={() => {
                                    setCount(0);
                                    
                                }}
                        >Reset</button>
        </div>
    );
}
