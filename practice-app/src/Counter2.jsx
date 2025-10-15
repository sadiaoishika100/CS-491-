import React, {useState} from 'react';
import './App.css'

const Counter2 = (props) => {
    const [count, setCount]=useState(0);

    return(
        <div>
            <div>My Counter 2</div>
            <button onClick={() => {if (count !==0) setCount(count-1)}}>
                -
                </button>
                {count}
        <button onClick={() => setCount((count) => count + 1)}>
            +
        </button>
        </div>
    );
    
}
export default Counter2;