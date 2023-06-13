import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import TodoList from './todoList';
import Provider  from './context';

function App() {
  return (
    <div className="App">
      <Provider>
        <Todo />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
