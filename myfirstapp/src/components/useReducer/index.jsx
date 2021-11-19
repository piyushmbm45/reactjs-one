import React, { useState, useReducer } from "react";

import Modal from "./modal";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
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
    console.log("id" + id);
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
            <button onClick={() => handleDelete(ele.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
