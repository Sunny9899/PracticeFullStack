import {createStore,applyMiddleware} from "redux";
import { reducer } from "./reducer";

function middleware({getState}){
    return next => action =>{
        const val=next(action);
        console.log("Action Dispatched");
        return val;
    }
}

export const store= createStore(reducer,applyMiddleware(middleware));