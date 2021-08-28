import { v4 as uuidv4 } from "uuid";
import currentDay from "../helpers";
import addIcon from "../images/add.svg";

const Header = ({ todo, setTodo, setTodos, todos, setFilteredTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //prevent adding empty tasks and existed ones
    if (
      todo.trim() !== "" &&
      !todos.some((item) => item.task === todo.trim().toLowerCase())
    ) {
      const newTodos = [
        ...todos,
        {
          task: todo.trim().toLowerCase(),
          completed: false,
          id: uuidv4(),
          day: currentDay(),
        },
      ];
      setTodos([...newTodos]);
      setFilteredTodos([...newTodos]);
      localStorage.setItem("tasks", JSON.stringify(newTodos));
    }

    setTodo("");
  };

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setFilteredTodos([...todos]);
    } else if (e.target.value.toLowerCase() === "completed") {
      const completedTodos = todos.filter((task) => {
        if (task.completed) return true;
        else return false;
      });
      setFilteredTodos([...completedTodos]);
    } else if (e.target.value.toLowerCase() === "uncompleted") {
      const uncompletedTodos = todos.filter((task) => {
        if (!task.completed) return true;
        else return false;
      });
      setFilteredTodos([...uncompletedTodos]);
    }
  };
  return (
    <header>
      <h1>TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            placeholder="Add a task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            autoFocus
          />
          <button type="submit">
            <img src={addIcon} alt="add-icon" />
          </button>
        </div>
      </form>
      <div className="filter select">
        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
