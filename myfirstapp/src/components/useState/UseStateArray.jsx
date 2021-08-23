import React, { useState } from "react";
import Data from "../../data";

function UseStateArray() {
  const [people, setPeople] = useState(Data);
  function handleClick(id){
      console.log(id);
      const newPeople = people.filter((person)=>{return person.id !== id})
        setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
          let {id,name} = person;
        return <div key={id}>
        <h2>{name}</h2>
        <button type="button" onClick={()=> handleClick(id)}>remove</button>
        </div>
      })}
      <button onClick={()=>setPeople([])}>delete items</button>
    </>
  );
}

export default UseStateArray;
