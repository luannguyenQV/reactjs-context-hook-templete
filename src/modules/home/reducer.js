export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          { data: action.payload, id: Date.now(), status: 'ACTIVE' }
        ]
      };
    case 'UPDATE_TODO':
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case 'TOGGLE_TODO':
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        todos: state.todos.map(todo =>
          action.payload.includes(todo)
            ? Object.assign({}, todo, {
                status: todo.status === 'ACTIVE' ? 'DONE' : 'ACTIVE'
              })
            : todo
        )
      };
    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: { status: action.payload }
      };

    default:
      return state;
  }
}
