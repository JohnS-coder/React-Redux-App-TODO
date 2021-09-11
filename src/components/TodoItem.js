import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions/actions";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "20px",
  };

  return (
    <div style={styled} className="todoList">
      <h2
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text}
      </h2>
      <div>
        <span>
          <img
            src={okLogo}
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
