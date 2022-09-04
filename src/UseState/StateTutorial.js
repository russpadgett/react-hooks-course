import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input placeholder="type..." onChange={({target:{value}}) => setInputValue(value)} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
