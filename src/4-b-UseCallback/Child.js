import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.debug("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div><h2>useEffect</h2>{returnComment("Child Comment 1")}</div>;
}

export default Child;
