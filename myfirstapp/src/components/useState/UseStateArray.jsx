import React, { useState } from "react";
import Data from "../../data";

function UseStateArray() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      {people.map((people) => {
        return <h2 key={people.id}>{people.name}</h2>;
      })}
      <button onClick={()=>setPeople([])}>delete items</button>
    </>
  );
}

export default UseStateArray;
