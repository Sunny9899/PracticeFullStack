import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoSuccess, getTodoSuccess } from "../redux/actions";
import axios from "axios";
import { useEffect } from "react";

export const Todos = () => {
  const { listedData } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [inputtext, setInputtext] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:3001/todos").then(({ data }) => {
      dispatch(getTodoSuccess(data));
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3001/todos", {
              title: inputtext,
              status: false,
            })
            .then(() => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Add todo
      </button>
      <div>
        {listedData.map((data) => (
          <div key={data.id}>{data.title}</div>
        ))}
      </div>
    </div>
  );
};
