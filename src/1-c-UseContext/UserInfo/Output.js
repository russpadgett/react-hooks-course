import React, { } from "react";
import { User } from "./UserInfo";//import context User

const Output = () => {
  const { u, setU } = React.useContext(User);//useContext of UserContext [get, set]
  return <div className="context-scope-none"><h2 style={{color:'red'}}>User: {u}</h2></div>
}
  
export default Output;
