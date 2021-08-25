import React, {useState,useEffect} from 'react'

function UseEffectCleanUp(){
    const [size, setSize] = useState(window.innerWidth);

    function checkSize() {
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",checkSize)
    })
    console.log(size);

    return (
    <>
    <h1>Window</h1>
    <h2>{size} px</h2>
    </>
    );
}



export default UseEffectCleanUp;