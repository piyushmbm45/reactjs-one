import React, { useState } from "react";
import { FaEdit, FaDelete } from "react-icons/fa";
import { Button } from "@mui/material";
import List from "./List";
import Alert from "./alert";

function Index() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return (
    <>
      <section className="main-container">
        <div className="grocery-container">
          <List />
          <Button variant="contained">Clear Items</Button>
        </div>
      </section>
    </>
  );
}

export default Index;
