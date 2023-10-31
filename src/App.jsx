import "./App.css";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <h2 className="title">Todo App</h2>
      <Navbar />
      <TodoApp />
    </div>
  );
}

export default App;
