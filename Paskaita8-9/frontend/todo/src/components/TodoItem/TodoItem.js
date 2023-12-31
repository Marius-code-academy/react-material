import axios from "axios";
import React, { useState } from "react";

const HOST = "http://localhost:3001/todos";

export default function TodoItem({ title, body, id, isFinished = false, setTodos }) {
  const [isChecked, setIsChecked] = useState(isFinished);

  async function deleteButtonHandler() {
    try {
      await axios.delete(`${HOST}/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      alert(error);
    }
  }

  async function checkboxChange(e) {
    try {
      await axios.put(`${HOST}/${id}`);

      setTodos((prev) => {
        const index = prev.findIndex((todo) => todo._id === id);
        prev[index].isFinished = !e.target.checked;
        setIsChecked(!e.target.checked);
        return prev;
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <input type="checkbox" onChange={checkboxChange} checked={isChecked} />
      <button onClick={deleteButtonHandler}>Delete</button>
    </div>
  );
}
