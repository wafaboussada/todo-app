import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./constants";

export const initialState = {
  todos: []
};

const addTodo = (todos, todo) => {
  const ids = todos.map((item) => item.id);
  const maxId = ids.reduce((item, max) => {
    console.log('item', item);
    return Math.max(item, max);
  }, 0);
  const newTodo = {
    id: maxId + 1,
    name: todo,
    completed: false,
  }
  const nTodos = [...todos, newTodo];
  return nTodos;
}

const deleteTodo = (todos, id) => {
  const nTodos = todos.filter(t => t.id !== id);
  return nTodos;
}
const setCompleteTodos = (todos, id) => {
  const nTodos = todos.map((t) => {
    const nItem = { ...t };
    if (t.id === id) {
      nItem.completed = true;
    }
    return nItem
  })
  return nTodos;
}
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, action.payload),
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todos: setCompleteTodos(state.todos, action.payload),
      }
    default:
      return state;
  }
};
