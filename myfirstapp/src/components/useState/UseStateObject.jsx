import React, { useState } from 'react'

function UseStateObject(){

    const [person, setPerson] = useState({
        name : "Peter",
        age : 24,
        message : "This is Peter From Canada"
    })
    function handleClick(){
        setPerson({...person, message : "hello world"})
    }
    return <div>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button type="button" onClick={handleClick}>Change Message</button>
    </div>

}


export default UseStateObject;