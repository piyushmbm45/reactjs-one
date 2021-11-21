import React, { useState, useContext } from "react";

import Data from "../../data";

const PersonContext = React.createContext();

function ContextApi() {
  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
      console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(newPeople);
  };
  return (
    <>
      <PersonContext.Provider value={{removePerson, people}}>
        <h2>Context Api</h2>
        <List />
      </PersonContext.Provider>
    </>
  );
}

const List = () => {
    const {people} = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            person={person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ person }) => {
    const {removePerson} = useContext(PersonContext)
//   console.log(varg);
  return (
    <>
      <div style={{ color: "white", backgroundColor: "grey", margin: "10px" }}>
        <div>{person.name}</div>
        <button onClick={() => removePerson(person.id)}>Delete</button>
      </div>
    </>
  );
};
export default ContextApi;
