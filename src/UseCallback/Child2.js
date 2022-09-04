import React, { useEffect } from "react";

function Child2({ returnComment2 }) {
  useEffect(() => {
    console.log("FUNCTION 2 WAS CALLED");
  }, [returnComment2]);

  return <div>{returnComment2("Pedro")}</div>;
}

export default Child2;
