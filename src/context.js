import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export let todoContext = createContext({});

export default function Provider ({ children }) {
    console.log('hello');
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state', state);
    const values = {
        state,
        dispatch,
    };
    console.log('todoContext0', children);
    return (
        <todoContext.Provider value={values}>
            {children}
        </todoContext.Provider>
    )
}