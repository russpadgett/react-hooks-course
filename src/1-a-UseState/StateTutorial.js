import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="context-scope-red">
      <h1>useState</h1>
      <h2>State - single component, single state item</h2>
      <input placeholder="type..." onChange={({target:{value}}) => setInputValue(value)} />
      <h2>{inputValue}</h2>
    </div>
  );
};

export default StateTutorial;
