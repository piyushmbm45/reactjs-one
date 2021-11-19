import React, { useState, useReducer } from "react";

import Modal from "./modal";

import data from "../../data";
export default function Index() {
  const [name, setName] = useState("");
  const [showModal, setShoeMOdal] = useState(false);
  const [people, setPeople] = useState(data);
    console.log(data);
  const handleSubmit =(e)=>{
      e.preventDefault();
      if(name){
        setShoeMOdal(true)
        setPeople([...people,{id: new Date().getTime().toString(),name}])
        setName(name)
      }
  }


  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
          <button type="submit">Submit</button>
        </div>
      </form>
      {people.map(ele=>{
          return <div key={ele.id}>
              {ele.name}
          </div>
      })}
    </>
  );
}
