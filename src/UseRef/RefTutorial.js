import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    const c = inputRef.current;
    console.log(`type:${c.type} placeholder:${c.placeholder} value:${c.value}`)
    c.value = "POW";
    c.focus();
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Log</button>
      <button onClick={()=>{inputRef.current.value = "";}}>Clear</button>
    </div>
  );
}

export default RefTutorial;
