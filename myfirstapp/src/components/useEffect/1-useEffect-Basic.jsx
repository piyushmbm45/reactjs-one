import React, { useState , useEffect } from 'react';

const UseEffectsBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value > 0) {
        document.title = `New Message ${value}`;
        } else {
            document.title = `New Message`;            
        }
    });
    return (
        <>
        <h1>{value}</h1>
    <button onClick={()=>{setValue(value+1)}}>Click Me</button>
    </>
    );
}

export default UseEffectsBasics;