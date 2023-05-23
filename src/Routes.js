import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import EditToDo from "./Pages/EditToDo/EditToDo";
import ToDoDetails from "./Pages/ToDoDetails/ToDoDetails";
import AddToDo from "./Pages/AddToDo/AddToDo";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/edit-todo/:id",
    element: (
      <>
        <NavBar />
        <EditToDo />
      </>
    ),
  },
  {
    path: "/add-todo",
    element: (
      <>
        <NavBar />
        <AddToDo />
      </>
    ),
  },
  {
    path: "/todo-details/:id",
    element: (
      <>
        <NavBar />
        <ToDoDetails />
      </>
    ),
  },
]);

export default Routes;
