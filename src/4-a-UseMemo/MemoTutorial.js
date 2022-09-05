import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  useEffect(() => {
    console.log('comments api was called');
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if(!comments)
      return '';
    else{
      console.log(comments[0])
      const nameObj = comments.reduce((o={},v,i) => {
        if(v?.name?.length > o?.name?.length)
          o.name = v.name;  
        return o;
      },{})
      console.log(nameObj)
      return nameObj.name
    }
  };

  // const findLongestName = (comments) => {
  //   if (!comments) return null;

  //   let longestName = "";
  //   for (let i = 0; i < comments.length; i++) {
  //     let currentName = comments[i].name;
  //     if (currentName.length > longestName.length) {
  //       longestName = currentName;
  //     }
  //   }

  //   console.log("THIS WAS COMPUTED");

  //   return longestName;
  // };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <h1>axios, useEffect, useState, useMemo</h1>
      <h2>Cache result</h2>
      <div> {getLongestName} </div>
      <button onClick={() => { setToggle(!toggle); }}> Toggle </button>
      {toggle && <h1> toggle </h1>}
      <button onClick={() => { setToggle2(!toggle2); }}> Toggle 2 </button>
      {toggle2 && <h1> toggle 2 </h1>}
    </div>
  );
}
