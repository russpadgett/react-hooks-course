import React, { useRef } from "react";
import ChildButton from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div className="context-scope-none">
      <h1>useImperativeHandle and useRef and useState</h1>
      <h2>Create a Ref to a DOM Component and Forward it to another component</h2>
      <button onClick={() => buttonRef.current.alterToggle()}>Parent Toggle Button using ref to Child Button</button>
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
