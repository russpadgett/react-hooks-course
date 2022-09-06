import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log('LayoutEffect Tutorial: useLayoutEffect: ' + inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log('LayoutEffect Tutorial: useEffect: updating inputRef.current.value');
    inputRef.current.value = "Goodbye";
  }, []);

  useEffect(() => {
    console.log('LayoutEffect Tutorial: useEffect: '+ inputRef.current.value);
  }, []);
  
  return (
    <div className="context-scope-red">
      <h1>useLayourEffect with useEffect and useRef</h1>
      <h2>Re-Render</h2>
      <input ref={inputRef} value="Hello" onChange={()=>{}} style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
