import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions/actions";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };
  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        onClick={handleClearList}
        style={{
          height: "50px",
          width: "100px",
          marginTop: "25px",
          fontSize: "1rem",
          backgroundColor: "#ac0d0d",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Todolist;
