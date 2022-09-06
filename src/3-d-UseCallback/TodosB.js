
const TodosB = ({ todosB, addTodoB }) => {
  console.log("Todos B calculated and rendered");
  return (
    <div className="context-scope-none">
      <h2>Todos B</h2>
      {todosB.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodoB}>Add Todo B</button>
    </div>
  );
};

export default TodosB;