import { useContext } from "react";
import {
  MdDeleteForever,
  MdCheckCircle,
  MdSettingsBackupRestore,
  MdEdit,
} from "react-icons/md";
import TodoContext from "../context/todos";
import EditTodo from "./EditTodo";
import PropTypes from "prop-types";

function Todo({ todo }) {
  const { deleteTodo, toggleTodo, toggleEdit } = useContext(TodoContext);

  const onChange = (id) => toggleTodo(id);
  const onDestroy = (id) => deleteTodo(id);
  const onEdit = (id) => toggleEdit(id);

  return (
    <div className="todo">
      <div className="atodo">
        <div className="todoText">
          {todo.completed ? (
            <MdSettingsBackupRestore
              className="icon"
              id="backupIcon"
              onClick={() => onChange(todo.id)}
            />
          ) : (
            <MdCheckCircle id="checkIcon" className="icon" onClick={() => onChange(todo.id)} />
          )}
          <p className={todo.completed ? "completed" : "incompleted"}>{todo.text}</p>
        </div>
        <div className="todoSettings">
          <MdEdit id="editIcon" className="icon" onClick={() => onEdit(todo.id)} />
          <MdDeleteForever
            className="icon"
            id="deleteIcon"
            onClick={() => onDestroy(todo.id)}
          />
        </div>
      </div>
      {todo.isEditing ? <EditTodo todo={todo} /> : ""}
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object,
};
