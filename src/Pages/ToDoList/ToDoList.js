import React from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { TodosContext } from "../../App";
import { Link } from "react-router-dom";
const ToDoList = () => {
  const { todos, deleteTodo } = React.useContext(TodosContext);
  const sortedTodos = todos.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  console.log(sortedTodos.length);
  return (
    <div className="container">
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Content</th>
            <th scope="col">Date</th>
            <th scope="col" colSpan={3}>
              Actions
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {sortedTodos.length > 0 ? (
            sortedTodos.map((todo) => (
              <tr key={todo.id}>
                <td>
                  <p className="fw-normal mb-1">{todo.id}</p>
                </td>
                <td>{todo.content}</td>
                <td>{todo.createdAt}</td>
                <td>
                  <MDBBtn color="success" rounded size="sm">
                    <Link to={`/Todo-details/${todo.id}`}>Details</Link>
                  </MDBBtn>
                </td>
                <td>
                  <MDBBtn color="primary" rounded size="sm">
                    <Link to={`/edit-todo/${todo.id}`}>Edit</Link>
                  </MDBBtn>
                </td>
                <td>
                  <MDBBtn
                    onClick={() => deleteTodo(todo.id)}
                    color="danger"
                    rounded
                    size="sm"
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No todos</td>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
export default ToDoList;
