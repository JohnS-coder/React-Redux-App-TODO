import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LİST,
} from "../types/types";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LİST,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
