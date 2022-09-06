import { memo } from "react";

const TodosA = ({ todosA, addTodoA }) => {
  console.log("Todos A calculated and rendered");
  return (
    <div className="context-scope-none">
      <h2>My Todos A</h2>
      {todosA.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodoA}>Add Todo A</button>
    </div>
  );
};

export default memo(TodosA);