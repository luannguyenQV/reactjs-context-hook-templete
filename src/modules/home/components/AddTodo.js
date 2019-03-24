import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm({ todoRendering }) {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleToggleTodos() {
    dispatch({ type: "TOGGLE_TODO", payload: todoRendering })
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div className="header">
      <input
        className="new-todo"
        value={todo}
        autoFocus={true}
        placeholder="Enter todo name here"
        onKeyUp={handleSubmitForm}
        onChange={handleTodoChange}
      />
      <button
        id="toggle-all"
        className="toggle-all"
        onClick={handleToggleTodos}
        checked
      />
      <label htmlFor="toggle-all"/>
    </div>
  );
}
