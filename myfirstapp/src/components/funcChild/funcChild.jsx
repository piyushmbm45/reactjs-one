import React, { useState } from "react";

function FuncChild() {
  return (
    <div>
      <h1>Function as a child</h1>
      <MyChild>
        {(count) => {
          return <h2>{count}</h2>;
        }}
      </MyChild>
    </div>
  );
}
const MyChild = ({ children }) => {
  const [num, setNum] = useState(0);
  // console.log(children(8));
  return (
    <div>
      {children(num)}
      <button on onClick={() => setNum(num+1)}>Increment</button>
    </div>
  );
};

export default FuncChild;
