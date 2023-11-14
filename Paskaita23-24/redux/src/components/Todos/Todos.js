import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTodo, addTodoAsync } from "../../redux/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function Todos() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addTodoAsync({
        title: input,
      })
    );

    setInput("");
  }

  return (
    <div>
      <h3>Todos</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
