import {
    ADD_TO_DO,
    GET_TO_DO,
} from "./actionTypes";

const initialState={
    todosData:[],
}

export const reducer=(store=initialState, {type, payload})=>{
    switch(type){

        case ADD_TO_DO:
            return{...store,...store.payload};

        case GET_TO_DO:
            return{...store};
           
        default:
            return{store};    
    }
}