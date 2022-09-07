import React from "react";

export default function MemoTutorial() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [t, setT] = React.useState(true);
  
  const computeExpensiveValue = ((n)=> {console.log(`${Date.now()} input computed: ${n}`); return n+n;});
  const memoizedValue = React.useMemo(() => computeExpensiveValue(a), [a]);//only run when a changes
  const regularValue = computeExpensiveValue(b);//runs on re-render

  return (
    <div className="context-scope-red">
      <h1>useMemo</h1>
      <h2>Cache a Function Result</h2>
      <div>input a: {a} </div>
      <div>memoizedValue: {memoizedValue} </div>
      <button onClick={() => { setA(a+1); }}> Increment a </button>
      <hr/>
      <div>input b: {b} </div>
      <div>regularValue: {regularValue} </div>
      <button onClick={() => { setB(b+1); }}> Increment b </button>
      <hr/>
      <button onClick={() => { setT(!t); }}> Toggle </button>
    </div>
  );
}
