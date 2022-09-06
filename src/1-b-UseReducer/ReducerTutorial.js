import React, { useReducer } from "react";

const multiStateReducer = (state, action) => {
  console.log(`Reducer Tutorial: ${JSON.stringify(state)} ${JSON.stringify(action)}`)
  let newState = {};
  newState["toggled"] = action.type === "TOGGLE" ? !state.toggled : state.toggled;
  newState["isAdmin"] = action.type === "ADMIN" ? state.isAdmin ? !action.data : action.data : state.isAdmin;
  newState["count"] = action.type === "COUNT" ? state.count + 1 : state.count;
  newState["isEven"] = action.type === "ISEVEN" ? state.isEven ? !action.data : action.data : state.isEven;
  console.log(`Reducer Tutorial: ${JSON.stringify(newState)}`)
  return newState;
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(multiStateReducer, { isAdmin: true, count: 0, toggled: undefined, });

  return (
    <div className="context-scope-red">
      <h1>useReducer</h1>
      <h2>State - single component, multiple state items</h2>
      <button onClick={() => { dispatch({ type: "ADMIN", data: true });}}> Is Admin </button>
      <button onClick={() => { dispatch({ type: "COUNT" }); dispatch({ type: "ISEVEN", data: !!state.count % 2 }); }}> Click Here </button>
      <h2>Is Admin? {state.isAdmin ? 'Yes' : 'No'}</h2>
      <h2>{state.count}</h2>
      {state.isEven !== undefined && ( <h2>Count is {state.isEven ? "Even": "Odd" }</h2> )}
    </div>
  );
};

export default ReducerTutorial;