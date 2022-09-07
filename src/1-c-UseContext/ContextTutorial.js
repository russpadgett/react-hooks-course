import React, { } from "react";
import { UserInfo } from "./UserInfo/UserInfo";

export const App = React.createContext();//create a AppContext for the App

const ContextTutorial = () => {
  const [a] = React.useState("ADMIN");//useState 

  return (
    <div className="context-scope-red">
      <App.Provider value={{ a }}>{/* AppProvider - All children components now has access to this useState {get} */}
        <h1>useContext and createContext and useState</h1>
        <h2>State -  multi page, multi state items</h2> 
        <UserInfo />
      </App.Provider>
    </div>
  );
}
export default ContextTutorial;


/*
  x export const Context = React.createContext();//create/export a Context 
    import {C} from './C'
    {
  x   const [x, setX] = React.useState();//useState 
  x   <Component.Provider value={{ x, setX }}> //Wrap child components to give access to useState 
        <C/>
    }   

    ------------------------------
  x import { Context } from "./Context";//import the Context
    export const C = () => {
      const { x, setX } = React.useContext(Context);//useContext - provide access to Context {get, set}
      return <div>{u}</div>
    }
*/