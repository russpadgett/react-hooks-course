import React, { useReducer } from "react";

const multiStateReducer = (state, action) => {
  //console.log(`Reducer Tutorial: ${JSON.stringify(state)} ${JSON.stringify(action)}`)
  let newState = {...state};
  switch( action.type){
    case "TOGGLE": newState["toggled"] = !state.toggled ; break; 
    case "ADMIN": newState["isAdmin"] = !state.isAdmin ; break; 
    case "COUNT": newState["count"] = state.count ? state.count + 1: 2; break; 
    case "ISEVEN": newState["isEven"] = !state.isEven; break; 
    default: 
      break;
  }
  //console.log(`Reducer Tutorial: ${JSON.stringify(newState)}`)
  return newState;
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(multiStateReducer, { toggled: false, isAdmin: true, count: 0, isEven: false });

  return (
    <div className="context-scope-red">
      <h1>useReducer</h1>
      <h2>State - single component, multiple state items</h2>
      <button onClick={() => { dispatch({ type: "ADMIN", data: true });}}> Toggle Is Admin </button>
      <button onClick={() => { dispatch({ type: "COUNT" }); dispatch({ type: "ISEVEN", data: !!state.count % 2 }); }}> Increase Count </button>
      <h2>Is Admin? {state.isAdmin ? 'Yes' : 'No'}</h2>
      <h2>{state.count}</h2>
      {state.isEven !== undefined && ( <h2>Count is {state.isEven ? "Even": "Odd" }</h2> )}
    </div>
  );
};

export default ReducerTutorial;