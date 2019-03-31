import React, { useContext, useMemo } from 'react';
import Page from '../common/hocs/Page';
import AddTodo from '../modules/home/components/AddTodo';
import TodoList from '../modules/home/components/TodoList';
import FilterItem from '../modules/home/components/FitlerItem';
import Store from '../modules/home/context';

export default function Home() {
  const { state } = useContext(Store);
  const { status } = state.filter;
  const { todos } = state;
  const todoRendering = useMemo(() => {
    let newtodos = todos;
    if (status === 'ACTIVE') {
      newtodos = newtodos.filter(todo => todo.status === 'ACTIVE');
    } else if (status === 'DONE') {
      newtodos = newtodos.filter(todo => todo.status === 'DONE');
    }
    return newtodos;
  }, [todos, status]);

  return (
    <Page title="todos">
      <AddTodo todoRendering={todoRendering} />
      <TodoList todoRendering={todoRendering} />
      <FilterItem totalItem={todoRendering.length} />
    </Page>
  );
}
