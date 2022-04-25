import { ADD_TODO_SUCCESS, GET_TODO_SUCCESS } from "./actionTypes";

const initialData = {
  todos: {
    listedData: [],
  },
};

export const reducer = (store = initialData, { type, payload }) => {
  switch (type) {
    case ADD_TODO_SUCCESS:
      return { ...store, todos: { ...store.todos, loading: false } };

    case GET_TODO_SUCCESS:
      return {
        ...store,
        todos: { ...store.todos, loading: false, listedData: payload },
      };

    default:
      return { ...store };
  }
};
