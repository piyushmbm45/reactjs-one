import React, { useState } from 'react'

function Simplecounter(){

const [value, setValue] = useState(0);

function handleClick(){
    setTimeout(() => {
        setValue(value+1)
        // if press button more than one time(in 2 sec) then still it will increase by one
    }, 2000);
}

    return(
        <div>
        <h1>Simple Counter</h1>
        <h2>{value}</h2>
        <button onClick={()=>{setValue(value+1)}}>Increase</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
        <button onClick={()=>{setValue(value-1)}}>Decrease</button>
        <hr></hr>
        <h1>Complex Counter</h1>
        <h2>{value}</h2>
        <button onClick={handleClick}>Increase Later</button>
        </div>
    )
}





export default Simplecounter;