import React, { useState, createContext } from "react";//import createContext
import UI from "./UserInfo/UserInfo";

export const AppContext = createContext({ b:'B' });//export AppContext

const ContextTutorial = () => {
  const [a, setA] = useState("ADMIN");//local state

  return (
    <AppContext.Provider value={{ a, setA }}>{/* AppContext.Provider value */}
      <UI />
    </AppContext.Provider>
  );
}
export default ContextTutorial;