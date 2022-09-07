import React, { } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export const User = React.createContext(null);//create a UserContext for the User

export const UserInfo = () => {
  const [u, setU] = React.useState("");//useState 

  return (
    <div className="context-scope-orange">
      <User.Provider value={{ u, setU }}>{/* UserProvider - All children components now has access to this useState {get,set} */}
          <Input />
          <Output />
        <div className="cl"></div>
      </User.Provider>
    </div>
  );
}; 