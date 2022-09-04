import React, { forwardRef, Fragment, useImperativeHandle, useState } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <Fragment> 
      <button onClick={()=>setToggle(!toggle)}>Child Button</button>
      {toggle && <span>Toggle</span>}
    </Fragment>
  );
});

export default ChildButton;
