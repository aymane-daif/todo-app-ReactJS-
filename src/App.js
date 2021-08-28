import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks")) !== null) {
      setTodos([...JSON.parse(localStorage.getItem("tasks"))]);
      setFilteredTodos([...JSON.parse(localStorage.getItem("tasks"))]);
    }
  }, []);
  return (
    <div className="App">
      <Header
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todos={todos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  );
}

export default App;
