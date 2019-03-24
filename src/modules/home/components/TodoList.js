import React from "react";
import TodoItem from "./TodoItem"

export default function TodoList({ todoRendering }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todoRendering.map(todo => (
          <TodoItem key={todo.id} data={todo} />
        ))}
      </ul>
    </section>
  );
}
