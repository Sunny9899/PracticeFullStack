import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo,getToDo } from "../redux/actions";
const axios=require("axios");

export const Todos=()=>{
    const [inputtext,setInputtext] = useState("");
    const dispatch = useDispatch();

const {todosData}=useSelector((state)=>state.todosData);

const fetchTodos=()=>{
    axios.get("http://localhost:3001/todos").then((data)=>{
           dispatch(getToDo());
    })
}

useEffect(()=>{
    fetchTodos();
},[])

    return(<div>
        <input placeholder="Enter Todo" onChange={(e)=>{setInputtext(e.target.value)}}/>
        <button onClick={()=>{
            axios.post("http://localhost:3001/todos",{
                title: inputtext,
            }).then(()=>{
                dispatch(addToDo());
            })
        }}>Submit</button>

        <div id="showTodos">
            {todosData.map((d)=>{
                return(<div key={Math.floor(Math.random*10)}>
                   {d.name}
                </div>);
            })}
        </div>
    </div>);
}


