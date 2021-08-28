import calendarIcon from "../images/calendar.svg";
import trashIcon from "../images/trash.svg";

const TodoItem = ({
  todo,
  setTodos,
  todos,
  idx,
  uuid,
  filteredTodos,
  setFilteredTodos,
}) => {
  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1, {
      ...getCurrentTask()[0],
      completed: !getCurrentTask()[0].completed,
    });
    setTodos(newTodos);
    localStorage.setItem("tasks", JSON.stringify(newTodos));
  };

  const deleteTask = () => {
    const undeletedTodosFromTodos = todos.filter((task) => {
      return task.id !== uuid;
    });
    const undeletedTodosFromFiltered = filteredTodos.filter((task) => {
      return task.id !== uuid;
    });
    setTodos([...undeletedTodosFromTodos]);
    setFilteredTodos([...undeletedTodosFromFiltered]);
    localStorage.setItem("tasks", JSON.stringify(undeletedTodosFromTodos));
  };
  const getCurrentTask = () => {
    const currentTask = todos.filter((task) => {
      return task.id === uuid;
    });
    return currentTask;
  };

  return (
    <li>
      <div className="left">
        <input
          type="checkbox"
          id={`todo-${uuid}`}
          onChange={toggleComplete}
          className={getCurrentTask()[0].completed ? "completed" : ""}
        />

        <label
          htmlFor={`todo-${uuid}`}
          className={getCurrentTask()[0].completed ? "completed" : ""}
        >
          {todo.task}
        </label>
      </div>
      <div className="right">
        <div className="calendar">
          <img src={calendarIcon} alt="calendar-icon" />
          <small>{todos[idx].day}</small>
        </div>
        <div className="delete">
          <img src={trashIcon} alt="trash-icon" onClick={deleteTask} />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
