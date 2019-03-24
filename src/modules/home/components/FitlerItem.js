import React, { useContext } from "react";
import Store from "../context";

export default function FilterItem({ totalItem }) {
  const { state, dispatch } = useContext(Store);

  function setFilter(filter) {
    dispatch({ type: "CHANGE_FILTER", payload: filter });
  }

  return (
    <footer className="footer">
      <span className='todo-count'>total: <strong>{totalItem}</strong></span>
      <ul className='filters'>
        {['ALL', 'ACTIVE', 'DONE'].map(filter =>
          <li key={filter}
            onClick={() => setFilter(filter)}>
            <a className={state.filter.status === filter ? 'selected' : 'false'} href="#">{filter}</a>
          </li>
        )}
      </ul>
    </footer>
  );
}
