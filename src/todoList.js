import './App.css';
import { useContext } from "react";
import { todoContext } from "./context";
import { COMPLETE_TODO, DELETE_TODO } from "./constants";
function TodoList () {
    const { state } = useContext(todoContext);
    const { dispatch } = useContext(todoContext);
    console.log(state.todos);
    const deleteTodo = (id) => {
        dispatch({ type: DELETE_TODO, payload: id})
    }
    const setCompleteTodo = (id) => {
        dispatch({ type: COMPLETE_TODO, payload: id})
    }
    return (
        <div>
            <h1>Todo List</h1>
            {state.todos.map((todo) => (
                <div key={todo.id} style={{display: 'flex', marginLeft: '50%'}}>
                    <p className={todo.completed ? 'complete' : ''}>{todo.name}</p>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => setCompleteTodo(todo.id)}>Complete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;