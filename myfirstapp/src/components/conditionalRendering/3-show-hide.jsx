import React, { useState, useEffect } from "react";

function Showhide() {
  const [show, setShow] = useState(true);
  return <>
      <button onClick={()=>{setShow(!show)}}>show/hide</button>
      {show && <Item/>}
  </>
}

function Item(){
    const [size,setSize] = useState(window.innerWidth);
    function checkSize(){
        setSize(window.innerWidth)
    }
useEffect(()=>{
    window.addEventListener("resize",checkSize)
    // if we click on button every time use effect will render yes we running one time but our component
    // rendering every time so the useEffect will also run to remove this we need to use cleanup function
    // many events in event listener
    return(()=>{
        window.removeEventListener("resize",checkSize)
    })
},[])
    return<>
        <h1>Windows</h1>
        <p>size : {size} px</p>
    </>
}

export default Showhide;
