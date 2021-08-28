import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, filteredTodos, setFilteredTodos }) => {
  return (
    <main>
      {filteredTodos.length > 0 ? <h3>Tasks - {filteredTodos.length}</h3> : ""}

      <ul>
        {filteredTodos.map((item, idx) => (
          <TodoItem
            todo={item}
            setTodos={setTodos}
            todos={todos}
            idx={idx}
            key={filteredTodos[idx].id}
            uuid={filteredTodos[idx].id}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
          />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
