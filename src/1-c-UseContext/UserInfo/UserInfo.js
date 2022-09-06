import React, { } from "react";
import { App } from "../ContextTutorial";//import Context App
import I from "./Input";
import O from "./Output";

export const User = React.createContext(null);//export Context User

const UserInfo = () => {
  const {a, setA} = React.useContext(App);//useContext of AppContext {get, set}
  const [u, setU] = React.useState("");//useState [get,set]

  return (
    <div className="context-scope-orange">
      <User.Provider value={{ u, setU }}>{/* User.Provider - set value to local useState */}
        <h2>{a}</h2>
        <I />
        <O />
        <div className="cl"></div>
      </User.Provider>
    </div>
  );
};
export default UserInfo; 