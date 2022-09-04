import "./App.css";

// local state management
// - single variable
//import StateTutorial from "./UseState/StateTutorial";
// - many variable
//import ReducerTutorial from "./UseReducer/ReducerTutorial";

// behaviours
// - post render
//import EffectTutorial from "./UseEffect/EffectTutorial";
// - pre render
//import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";

// dom elements
//import RefTutorial from "./UseRef/RefTutorial";
// - ref elements
//import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
// - parent controlling child events via refs 

// global state
import ContextTutorial from "./UseContext/ContextTutorial";

// performance
// - cache results
//import MemoTutorial from "./UseMemo/MemoTutorial";
// - cache functions

//import CallBackTutorial from "./UseCallback/CallbackTutorial";

//https://www.youtube.com/watch?v=LlvBzyy-558

function App() {
  return (
    <div className="App">
      <ContextTutorial />
    </div>
  );
}

export default App;
