import { useContext } from "react";
import TodoContext from "../context/todos";

function Navbar() {
  const { toggleCategory } = useContext(TodoContext);
  return (
    <nav>
      <button onClick={() => toggleCategory("")}>All Todos</button>
      <button onClick={() => toggleCategory("Daily")}>Daily</button>
      <button onClick={() => toggleCategory("Work")}>Work</button>
      <button onClick={() => toggleCategory("School")}>School</button>
    </nav>
  );
}

export default Navbar;
