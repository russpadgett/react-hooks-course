export default function CounterButton({count, increment}){
console.log("Counter Button rendered");
return(
    <div className="context-scope-none">
        Count: {count}
        <button onClick={increment}>+</button>
    </div>
);
}