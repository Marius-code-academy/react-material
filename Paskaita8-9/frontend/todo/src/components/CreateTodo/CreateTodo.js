import React, { useState } from "react";
import axios from "axios";

const HOST = "http://localhost:3001/todos";

export default function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(HOST, { title, body });
      setTodos((prev) => [...prev, data]);
      setTitle("");
      setBody("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="titleInput">Title</label>
      <input type="text" id="titleInput" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label htmlFor="bodyInput">Body</label>
      <input type="text" id="bodyInput" onChange={(e) => setBody(e.target.value)} value={body} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
