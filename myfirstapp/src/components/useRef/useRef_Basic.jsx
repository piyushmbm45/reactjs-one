import React, { useEffect, useRef } from "react";

const UseRefBasic = () => {
    const refInput = useRef(null)

    function handleSubmit(e){
        e.preventDefault();
        console.log(refInput.current);
    }
    useEffect(()=>{
        refInput.current.focus();
    })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text" ref={refInput}/>
        <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasic;
