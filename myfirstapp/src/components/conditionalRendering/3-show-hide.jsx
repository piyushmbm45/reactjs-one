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
},[])
    return<>
        <h1>Windows</h1>
        <p>size : {size} px</p>
    </>
}

export default Showhide;
