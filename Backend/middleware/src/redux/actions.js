import { ADD_TODO_SUCCESS, GET_TODO_SUCCESS } from "./actionTypes";

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});
