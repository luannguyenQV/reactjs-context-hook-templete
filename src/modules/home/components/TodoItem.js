import React, { useContext } from "react";
import Store from "../context";

export default function TodoItem({ data }) {
  const { dispatch } = useContext(Store);

  function onToggleTodo() {
    dispatch({ type: "UPDATE_TODO", payload: Object.assign({}, data, { status: data.status === 'ACTIVE' ? 'DONE' : 'ACTIVE' }) });
  }

  function onDeleteItem() {
    dispatch({ type: "DELETE", payload: data.id });
  }

  return (
    <li className="">
      <input 
        type="checkbox"
        className="toggle"
        onChange={onToggleTodo}
        checked={data.status === 'DONE'}
      />
      <label>{data.data}</label>
      <button className="destroy" onClick={onDeleteItem} />
    </li>
  );
}
