import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
        console.log("Effect Tutorial: API WAS CALLED");
      });
  }, [count]);

  return (
    <div className="context-scope-red">
    <h1>useEffect with useState</h1>
    <h2>Re-Render</h2>
    <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default EffectTutorial;
