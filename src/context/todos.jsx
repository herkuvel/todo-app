import { createContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const TodoContext = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedItem = localStorage.getItem("todos");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  const [filteredCategory, setFilteredCategory] = useState();
  const [category, setCategory] = useState();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: todo, completed: false, category: category },
    ]);
    setTodo("");
    setCategory("");
    console.log("Todo added.");
    console.log(todos);
  };

  const deleteTodo = (id) => {
    console.log("Todo has been deleted.");
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    cloned_todos.splice(itemIndex, 1);

    setTodos(cloned_todos);
  };

  const [editedTodo, setEditedTodo] = useState("");
  const [editedCategory, setEditedCategory] = useState("");

  const handleEditChange = (e) => {
    setEditedTodo(e.target.value);
  };
  const handleEditCategoryChange = (e) => {
    setEditedCategory(e.target.value);
  };

  const updateTodo = (id) => {
    const cloned_todos = [...todos];
    console.log("Todo updated.");

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.text = editedTodo;
    item.category = editedCategory;
    item.isEditing = !item.isEditing;

    setTodos(cloned_todos);
  };

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];
    console.log("Todo status changed.");

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;

    setTodos(cloned_todos);
  };

  const toggleEdit = (id) => {
    const cloned_todos = [...todos];
    console.log("Todo status changed.");

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.isEditing = !item.isEditing;

    setTodos(cloned_todos);
  };

  const getFilteredList = () => {
    if (!filteredCategory) {
      return todos;
    }
    return todos.filter((item) => item.category === filteredCategory);
  };

  const toggleCategory = (category) => {
    setFilteredCategory(category);
  };

  var filteredTodos = useMemo(getFilteredList, [filteredCategory, todos]);

  const values = {
    todo,
    todos,
    filteredTodos,
    category,
    editedTodo,
    setTodo,
    setTodos,
    handleChange,
    handleCategoryChange,
    handleEditCategoryChange,
    handleEditChange,
    setEditedTodo,
    setEditedCategory,
    toggleCategory,
    handleSubmit,
    deleteTodo,
    updateTodo,
    toggleTodo,
    toggleEdit,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

export { Provider };

export default TodoContext;

Provider.propTypes = {
  children: PropTypes.any,
};



  // [
  //   {
  //     id: 1,
  //     text: "Example Work Todo",
  //     completed: true,
  //     category: "Work",
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     text: "Example Daily Todo",
  //     completed: false,
  //     category: "Daily",
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     text: "Example School Todo",
  //     completed: false,
  //     category: "School",
  //     isEditing: false,
  //   },
  // ]