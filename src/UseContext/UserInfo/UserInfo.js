import React, { createContext,useContext, useState } from "react";//import createContext, useContext
import { AppContext } from "../ContextTutorial";//import AppContext
import I from "./Input";
import O from "./Output";

export const UserContext = createContext(null);//export UserContext

const UserInfo = () => {
  const { a } = useContext(AppContext);//AppContext {get, set}
  const [u, setU] = useState("");//UserContext state store

  return (
    <UserContext.Provider value={{ u, setU }}>{/* UserContext.Provider - add {get,set} to state */}
      <p><b>{a}</b></p>
      <I />
      <O />
    </UserContext.Provider>
  );
};
export default UserInfo;