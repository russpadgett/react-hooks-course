import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    console.log("comments api was called");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName1 = (comments) => {
    console.log('findLongestName1 calculated')
    return comments?.reduce((o, v, i) => {
      if (o.name.length < v.name.length) o.name = v.name;
      return o;
    }).name;
  };

  const findLongestName2 = (comments) => {
    console.log('findLongestName2 calculated')
    return comments?.reduce((o, v, i) => {
      if (o.name === undefined) o.name = "";
      if (o.name.length < v.name.length) o.name = v.name;
      return o;
    }, {}).name;
  };

  const getLongestName1 = useMemo(() => findLongestName1(data), [data]);
  const getLongestName2 = findLongestName2(data);

  return (
    <div className="App">
      <h1>axios, useEffect, useState, useMemo</h1>
      <h2>Cache result</h2>
      <div> {getLongestName1} </div>
      <div> {getLongestName2} </div>
      <button onClick={() => { setToggle(!toggle); }}> Toggle </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
