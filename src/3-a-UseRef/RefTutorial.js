import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    const c = inputRef.current;
    console.log(`Ref Tutorial: type:${c.type} placeholder:${c.placeholder} value:${c.value}`)
    c.value = "SUBMITTED";
    c.focus();
  };
  return (
    <div className="context-scope-red">
      <h1>useRef</h1>
      <h2>Create a Ref to DOM Component</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Log</button>
      <button onClick={()=>{inputRef.current.value = "";}}>Clear</button>
    </div>
  );
}

export default RefTutorial;
