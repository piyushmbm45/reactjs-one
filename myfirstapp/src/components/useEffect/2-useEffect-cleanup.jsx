import React, {useState,useEffect} from 'react'

function UseEffectCleanUp(){
    const [size, setSize] = useState(window.innerWidth);

    function checkSize() {
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        console.log("hello world");
        window.addEventListener("resize",checkSize)
        return ()=>{
            console.log("cleanup");
            window.removeEventListener("resize",checkSize)
        }
    })
    console.log("render");

    return (
    <>
    <h1>Window</h1>
    <h2>{size} px</h2>
    </>
    );
}



export default UseEffectCleanUp;