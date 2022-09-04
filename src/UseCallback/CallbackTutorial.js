//import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = () => { return data;};
  const returnComment2 = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <Child2 returnComment2={returnComment2} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}

      <button
        onClick={() => {
          setToggle2(!toggle2);
        }}
      >
        {" "}
        Toggle 2
      </button>
      {toggle2 && <h1> toggle 2</h1>}
    </div>
  );
}
