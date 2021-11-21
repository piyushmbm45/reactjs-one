import React, { useState } from "react";

import Data from "../../data";
function PropDriling() {
  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
      console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(newPeople);
  };
  return (
    <>
      <section>
        <h2>Hello</h2>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            person={person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ person, removePerson }) => {
  // console.log(name);
  return (
    <>
      <div style={{ color: "white", backgroundColor: "grey", margin: "10px" }}>
        <div>{person.name}</div>
        <button onClick={() => removePerson(person.id)}>Delete</button>
      </div>
    </>
  );
};
export default PropDriling;
