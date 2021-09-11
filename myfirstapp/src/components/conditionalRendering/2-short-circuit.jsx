import React, { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "And Hello World";
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "Hello World From OR"}</h1>
      {text && <h1>Hello World From &&</h1>}
    </>
  );
}

export default ShortCircuit;
