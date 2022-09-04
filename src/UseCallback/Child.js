import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.debug("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Child Comment 1")}</div>;
}

export default Child;
