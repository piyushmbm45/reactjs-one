import React, { useState , useEffect } from 'react';

const UseEffectsBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call effect");
        if (value > 0) {
        document.title = `New Message ${value}`;
        } else {
            document.title = `New Message`;            
        }
    },[]);
    console.log("component render");
    return (
        <>
        <h1>{value}</h1>
    <button onClick={()=>{setValue(value+1)}}>Click Me</button>
    </>
    );
}

export default UseEffectsBasics;