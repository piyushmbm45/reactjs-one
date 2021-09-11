import React, { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false)
  // const firstValue = text || "hello world";
  // const secondValue = text && "And Hello World";
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "Piyush Jain"}</h1>
      <button onClick={()=>{setError(!isError)}}>Toggle Error</button>
      {isError && <h1>Error...</h1>}
      {/* using ternary operator */}
      {isError ? <p>there is an error</p>: <p>no error</p>}
    </>
  );
}

export default ShortCircuit;
