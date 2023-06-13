import { useContext, useState } from 'react';
import { todoContext } from './context';
import { ADD_TODO } from './constants';
function Todo () {
    const [todo, setTodo] = useState('');
    const { dispatch } = useContext(todoContext);
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const addTodo = (e) => {
        e.preventDefault();
        dispatch({type: ADD_TODO, payload: todo});
        setTodo('');
    }
    return (
        <form>
        <input type="text" onChange={handleChange} value={todo}/>
        <button onClick={addTodo}>Add Todo</button>
        </form>
    )
}

export default Todo;