import React, { useRef } from "react";
import ChildButton from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>Dom elements</h1>
      <h2>useRef</h2>
      <button onClick={() => buttonRef.current.alterToggle()}>Parent Button</button>
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
