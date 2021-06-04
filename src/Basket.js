// import { createContext } from "react";

import React,{ useReducer, createContext,useContext} from "react";
export const StateContext=createContext();
export const StateProvider=({initialState,reducer,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)

export const useStateVale=()=>useContext(StateContext);