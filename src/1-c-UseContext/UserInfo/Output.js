import React, { } from "react";
import { User } from "./UserInfo";//import the UserContext
import { App } from "../ContextTutorial";//import the AppContext

export const Output = () => {
  return (
    <div className="context-scope-none">
    <App.Consumer>
        {({a}) => (
          <h2>a:{a}</h2>
        )}  
      </App.Consumer>
      <User.Consumer>  
        {({u}) => (
          <h2 style={{color:'red'}}>User: {u}</h2>
        )}
      </User.Consumer>
    </div>
  )
}
  
