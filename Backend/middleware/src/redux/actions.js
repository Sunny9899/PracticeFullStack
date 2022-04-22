import {
    ADD_TO_DO,
    GET_TO_DO,
} from "./actionTypes";

export const addToDo = (payload)=>({
    type:ADD_TO_DO,
    payload,
})

export const getToDo = (payload)=>({
    type:GET_TO_DO,
    payload,
})
