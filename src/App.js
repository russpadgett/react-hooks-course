import "./App.css";

//STATE
// UseState: single variable state management
import StateTutorial from "./1-a-UseState/StateTutorial";
// UseReducer: many variable state management
import ReducerTutorial from "./1-b-UseReducer/ReducerTutorial";
// UseContext: global state.  Dependency on UseState
import ContextTutorial from "./1-c-UseContext/ContextTutorial";

//POST STATE CHANGE - RENDER
// UseEffect: post render event
import EffectTutorial from "./2-a-UseEffect/EffectTutorial";
// UseLayoutEffect: pre render event
import LayoutEffectTutorial from "./2-b-UseLayoutEffect/LayoutEffectTutorial";

//CACHE
// useRef: dom elements
import RefTutorial from "./3-a-UseRef/RefTutorial";
// useImperativeHandle: ref elements
import ImperativeHandle from "./3-b-UseImperativeHandle/ImperativeHandle";
// useMemo: cache result
import MemoTutorial from "./3-c-UseMemo/MemoTutorial";
// useCallback: cache function call
import CallBackTutorial from "./3-d-UseCallback/CallbackTutorial";

//https://www.youtube.com/watch?v=LlvBzyy-558

function App() {
  return (
    <div className="App">
      <StateTutorial/>
      <br/><hr/><br/>
      <ReducerTutorial/>
      <br/><hr/><br/>
      <ContextTutorial />
      <br/><hr/><br/>
      <EffectTutorial/>
      <br/><hr/><br/>
      <LayoutEffectTutorial/>
      <br/><hr/><br/>
      <RefTutorial/>
      <br/><hr/><br/>
      <ImperativeHandle/>
      <br/><hr/><br/>
      <MemoTutorial/>
      <br/><hr/><br/>
      <CallBackTutorial/>
    </div>
  );
}

export default App;
