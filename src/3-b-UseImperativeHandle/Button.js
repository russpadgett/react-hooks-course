import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [state, setState] = useState(false);//local state

  useImperativeHandle(ref, () => ({
    alterToggle() {
      console.log('alterToggle');
      setState(!state);//change local state
    },
  }));
  return (
    <div className="context-scope-red">
      <h2>forwardRef, useImperativeHandle, useState</h2>
      <button onClick={()=>setState(!state)}>Child Toggle Button</button>
      <h2>state is {state ? 'true' : 'false'}</h2>
    </div>
  );
});

export default ChildButton;
