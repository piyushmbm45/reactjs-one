import React, { useState , useEffect } from 'react';

const UseEffectsBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `new Message ${value}`;
    });
    return (
        <>
        <h1>{value}</h1>
    <button onClick={()=>{setValue(value+1)}}>Click Me</button>
    </>
    );
}

export default UseEffectsBasics;