import React, { } from "react";
import { User } from "./UserInfo";//import the UserContext
import { App } from "../ContextTutorial";//import the AppContext

export const Input = () => {
  const { setU } = React.useContext(User); //useContext - provide access to UserContext {set}
  return (
    <div className="context-scope-none">
      <App.Consumer>
        {({a}) => (
          <h2>a:{a}</h2>
        )}  
      </App.Consumer>
      <h2><input onChange={({ target: { value } }) => {setU(value); }} /></h2>
    </div>
  );
};
