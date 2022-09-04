import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const childButtonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          childButtonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={childButtonRef} />
    </div>
  );
}

export default ImperativeHandle;
