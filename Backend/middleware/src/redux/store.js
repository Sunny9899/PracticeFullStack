import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

function middleware() {
  return (next) => (action) => {
    if (action.type == "ADD_TODO_SUCCESS") {
      console.log("Middleware Triggered after data addition");
    }
    if (action.type == "GET_TODO_SUCCESS") {
      console.log("Middleware Triggered after data fetched");
    }
    const val = next(action);
    return val;
  };
}

export const store = createStore(reducer, applyMiddleware(middleware));
