import React, { } from "react";
import UI from "./UserInfo/UserInfo";

export const App = React.createContext({ b:'B' });//export created context "App"

const ContextTutorial = () => {
  const [a, setA] = React.useState("ADMIN");//useState [get, set]

  return (
    <div className="context-scope-red">
      <App.Provider value={{ a, setA }}>{/* App.Provider - set value to local useState */}
        <h1>useContext and createContext and useState</h1>
        <h2>State -  multi page, multi state items</h2> 
        <UI />
      </App.Provider>
    </div>
  );
}
export default ContextTutorial;