import React, { useState, useReducer } from "react";

import Modal from "./modal";

import data from "../../data";
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payLoad];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item ADDED",
    };
  }
  if (action.type === "NO_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "No item present",
    };
  }
  if (action.type === "DELETE_ITEM") {
      console.log(action.payLoad);
    const newPeople = state.people.filter((ele) => ele.id !== action.payLoad);
    console.log(newPeople);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item Deleted",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  return state;
};
export default function Index() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({
        type: "ADD_ITEM",
        payLoad: { id: new Date().getTime().toString(), name },
      });
      setName("");
    } else {
      dispatch({ type: "NO_ITEM" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleDelete = (id) => {
      console.log("id"+ id);
    dispatch({ type: "DELETE_ITEM", payLoad: id });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModalTime={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {state.people.map((ele) => {
        return (
          <div key={ele.id}>
            <p>
              {ele.name} {ele.id}
            </p>
            <button onClick={()=>handleDelete(ele.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
