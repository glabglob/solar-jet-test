import { useState } from 'react';

import './counter.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='counter'>
            <button className='counter__button' onClick={decrement}>-</button>
            <p className='count'>{count}</p>
            <button className='counter__button' onClick={increment}>+</button>
        </div>
    );
}

export default Counter;