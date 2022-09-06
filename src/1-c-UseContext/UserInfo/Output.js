import React, { useContext } from "react";//useContext required
import { UserContext } from "./UserInfo";//ref UserContext

const Output = () => {
  const { u } = useContext(UserContext);//UserContext {get, set}
  return <div className="double fl"><h2 style={{color:'red'}}>User: {u}</h2></div>
}
  
export default Output;
