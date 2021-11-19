export const reducer = (state, action) => {
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