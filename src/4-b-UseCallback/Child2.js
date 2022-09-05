import React, { useEffect } from "react";

const Child2 = ({ returnComment2 }) => {
  useEffect(() => {
    console.debug("FUNCTION 2 WAS CALLED");
  }, [returnComment2]);

  return <div><h2>useEffect</h2>{returnComment2("Child Comment 2")}</div>;
}

export default Child2