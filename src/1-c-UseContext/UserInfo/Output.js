import React, { useContext } from "react";//useContext required
import { UserContext } from "./UserInfo";//ref UserContext

const Output = () => {
  const { u } = useContext(UserContext);//UserContext {get, set}
  return <h1 style={{color:'red'}}>User: {u}</h1>
}
  
export default Output;
