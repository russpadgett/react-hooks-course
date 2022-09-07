import React from "react";
import TodosA from "./TodosA";
import TodosB from "./TodosB";
import CounterButton from "./CounterButton"

export default function MemoTutorial() {
    const [count, setCount] = React.useState(0);
    const [todosA, setTodosA] = React.useState([]);
    const [todosB, setTodosB] = React.useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    
    const addTodoA = React.useCallback(() => {
      console.log('addTodoA callback ran');
      setTodosA((t) => [...t, "New Todo A"]);
    }, []);
    
    const addTodoB = () => {
      console.log('addTodoB ran');
      setTodosB((t) => [...t, "New Todo B"]);
    };
  
    return (
      <div className="context-scope-red">
      <h1>useCallback and memo</h1>
      <h2>Cache a Component</h2>
      <CounterButton count={count} increment ={increment} />
        <TodosA todosA={todosA} addTodoA={addTodoA} />
        <TodosB todosB={todosB} addTodoB={addTodoB} />        
      </div>
    );
}
