import React, { useState, createContext } from "react";//import createContext
import UI from "./UserInfo/UserInfo";

export const AppContext = createContext({ b:'B' });//export AppContext

const ContextTutorial = () => {
  const [a, setA] = useState("ADMIN");//AppContext state store

  return (
    <AppContext.Provider value={{ a, setA }}>{/* AppContext.Provider - add {get,set} to state */}
      <UI />
    </AppContext.Provider>
  );
}
export default ContextTutorial;