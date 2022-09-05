import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
    <h1>Render</h1>
    <h2>useLayoutEffect, useEffect, useRef </h2>
      <input ref={inputRef} value="PEDRO" onChange={()=>{}} style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
