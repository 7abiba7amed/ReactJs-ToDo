import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TodosContext } from "../../App";

const TodoDetails = () => {
  const { todos } = useContext(TodosContext);
  const { id } = useParams();

  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <div className="todo-details container mt-5 border border-3 p-5">
      {todo ? (
        <>
          <h3 className="mb-3 text-decoration-underline">Todo Details</h3>
          <p className="mb-1">{todo.content}</p>
          <p className="mb-3">Created At: {todo.createdAt}</p>
          {todo.updatedAt && (
            <p className="mb-1">Updated At: {todo.updatedAt}</p>
          )}
          <Link to={`/edit-todo/${todo.id}`}>
            <button className="btn btn-success me-3">Edit</button>
          </Link>
        </>
      ) : (
        <p>Todo not found.</p>
      )}
      <Link to="/" className="btn btn-secondary">
        Back to List
      </Link>
    </div>
  );
};

export default TodoDetails;
