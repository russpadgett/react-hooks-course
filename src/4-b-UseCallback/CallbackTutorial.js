//import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [data, setData] = useState("Hello...");

  const returnComment = useCallback(n => data + n, [data]);//() => data;
  const returnComment2 = useCallback(n => data + n, [data]);

  return (
    <div className="App">
      <h1>Cache function call</h1>
      <h2>useCallback, UseState</h2>
      <Child returnComment={returnComment} />
      <Child2 returnComment2={returnComment2} />

      <button onClick={() => { setToggle(!toggle);}}>Toggle</button>
      {toggle && <h1> toggle </h1>}

      <button onClick={() => {setToggle2(!toggle2); }}>Toggle 2</button>
      {toggle2 && <h1> toggle 2</h1>}
    </div>
  );
}
