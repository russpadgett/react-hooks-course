import "./App.css";

// UseState: single variable state management
import StateTutorial from "./1-a-UseState/StateTutorial";
// UseReducer: many variable state management
import ReducerTutorial from "./1-b-UseReducer/ReducerTutorial";
// UseContext: global state.  Dependency on UseState
import ContextTutorial from "./1-c-UseContext/ContextTutorial";

// UseEffect: post render event
import EffectTutorial from "./2-a-UseEffect/EffectTutorial";
// UseLayoutEffect: pre render event
import LayoutEffectTutorial from "./2-b-UseLayoutEffect/LayoutEffectTutorial";

// useRef: dom elements
import RefTutorial from "./3-a-UseRef/RefTutorial";
// useImperativeHandle: ref elements
import ImperativeHandle from "./3-b-UseImperativeHandle/ImperativeHandle";

// useMemo: cache result
import MemoTutorial from "./4-a-UseMemo/MemoTutorial";
// useCallback: cache function call
import CallBackTutorial from "./4-b-UseCallback/CallbackTutorial";

//https://www.youtube.com/watch?v=LlvBzyy-558

function App() {
  return (
    <div className="App">
      <StateTutorial/>
      <hr/>
      <ReducerTutorial/>
      <hr/>
      <ContextTutorial />
      <hr/>
      <EffectTutorial/>
      <hr/>
      <LayoutEffectTutorial/>
      <hr/>
      <RefTutorial/>
      <hr/>
      <ImperativeHandle/>
      <hr/>
      <MemoTutorial/>
      <hr/>
      <CallBackTutorial />
    </div>
  );
}

export default App;
