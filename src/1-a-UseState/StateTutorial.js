import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>State - single page, single state item</h1>
      <h2>useState</h2>   
      <input placeholder="type..." onChange={({target:{value}}) => setInputValue(value)} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
