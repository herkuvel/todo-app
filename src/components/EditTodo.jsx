import { useContext } from "react";
import TodoContext from "../context/todos";
import PropTypes from "prop-types";

function EditTodo({ todo }) {
  const {
    editedTodo,
    category,
    handleEditCategoryChange,
    handleEditChange,
    updateTodo,
    setEditedTodo,
    setEditedCategory,
  } = useContext(TodoContext);

  const onUpdate = (id) => updateTodo(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo.id);
    setEditedTodo("");
    setEditedCategory("");
  };

  return (
    <form className="editForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit Todo"
        id="editInput"
        onChange={handleEditChange}
        value={editedTodo}
        required
      />
      <select id="editSelect" required value={category} onChange={handleEditCategoryChange}>
        <option label="Category"></option>
        <option>Daily</option>
        <option>Work</option>
        <option>School</option>
      </select>
      <button id="editButton">Update</button>
    </form>
  );
}

export default EditTodo;

EditTodo.propTypes = {
  todo: PropTypes.object,
};
