import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Routes from "./Routes";

export const TodosContext = createContext([]);

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, deleteTodo, editTodo }}>
      <div className="App">
        <RouterProvider router={Routes} />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
