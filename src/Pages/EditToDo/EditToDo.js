import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodosContext } from "../../App";

const Edit = () => {
  const { todos, editTodo } = useContext(TodosContext);
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(id));
  const [content, setContent] = useState(todo.content);
  const [error, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    const errors = {};

    if (!content.trim()) {
      errors.content = "Todo content is required.";
    } else if (content.length < 5) {
      errors.content = "Todo content must be at least 5 characters.";
    } else if (content.length > 100) {
      errors.content = "Todo content must be at most 100 characters.";
    }

    // If there are errors, set them into state and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const updatedTodo = {
      id: todo.id,
      content,
      createdAt: todo.createdAt,
      updatedAt: new Date().toLocaleDateString(),
    };
    editTodo(updatedTodo);
    navigate("/");
  };

  return (
    <div className="create-todo container mt-5 border border-3 p-5 ">
      <h3 className="text-decoration-underline">Edit ToDo</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="content">Enter your todo:</label>
          <textarea
            id="content"
            className={`form-control ${error.content && "is-invalid"}`}
            value={content}
            required
            minLength={5}
            maxLength={100}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {error.content && (
            <div className="invalid-feedback">{error.content}</div>
          )}
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
