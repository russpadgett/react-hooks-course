import React, { useRef } from "react";
import ChildButton from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>Parent Button</button>
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
