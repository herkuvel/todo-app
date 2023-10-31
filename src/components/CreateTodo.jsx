import { useContext, useEffect } from "react";
import TodoContext from "../context/todos";

function CreateTodo() {
  const {
    todo,
    todos,
    category,
    handleChange,
    handleCategoryChange,
    handleSubmit,
  } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        id="todoInput"
        onChange={handleChange}
        value={todo}
        required
      />
      <select id="todoInput" required value={category} onChange={handleCategoryChange}>
        <option label="Category"></option>
        <option>Daily</option>
        <option>Work</option>
        <option>School</option>
      </select>
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
