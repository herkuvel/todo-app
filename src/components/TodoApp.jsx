import { useContext, useEffect } from "react";
import TodoContext from "../context/todos";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoApp() {
  const { filteredTodos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setTodos(items);
    }
  }, []);
  return (
    <div className="TodoApp">
      <CreateTodo />
      <div className="todos">
        {filteredTodos.map((newTodo, i) => (
          <Todo key={i} todo={newTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
