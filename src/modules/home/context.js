import React from "react";

const Store = React.createContext({
  todos: [
    {
      id: 1,
      data: 'Code info page',
      status: 'DONE'
    },
    {
      id: 2,
      data: 'Multiple language',
      status: 'ACTIVE'
    },
    {
      id: 3,
      data: 'Dark mode',
      status: 'ACTIVE'
    }
  ],
  filter: {
    status: 'ALL' // DONE / ACTIVE
  }
});

export default Store;
