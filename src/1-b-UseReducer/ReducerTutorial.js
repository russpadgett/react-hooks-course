import React, { useReducer } from "react";

const multiStateReducer = (state, action) => {
  let newState = {};
  newState["isAdmin"] = action.type === "ADMIN" ? state.isAdmin ? !action.data : action.data : state.isAdmin;
  newState["count"] = action.type === "COUNT" ? state.count + 1 : state.count;
  newState["toggled"] = action.type === "TOGGLE" ? !state.toggled : state.toggled;
  return newState;
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(multiStateReducer, { isAdmin: true, count: 0, toggled: undefined, });

  return (
    <div>
      <h1>State - single page, multiple state items</h1>
      <h2>useReducer</h2>
      <button onClick={() => { dispatch({ type: "ADMIN", data: true });}}> Is Admin </button>
      <h1>{state.count}</h1>
      <button onClick={() => { dispatch({ type: "COUNT" }); dispatch({ type: "TOGGLE" }); }}> Click Here </button>
      {state.toggled !== undefined && ( <p>Count is {state.toggled ? "Odd" : "Even"}</p> )}
    </div>
  );
};

export default ReducerTutorial;