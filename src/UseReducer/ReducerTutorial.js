import React, { useReducer } from "react";

const reducer = (state, action) => {
  let newState = {};
  newState['count'] = action.type === "INCREMENT" ? state.count + 1 : state.count;
  newState['showText'] = action.type === "TOGGLE" ? !state.showText : state.showText;
  return newState;
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
