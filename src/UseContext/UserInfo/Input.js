import React, { useContext } from "react";//useContext required
import { UserContext } from "./UserInfo";//ref UserContext

const Input = () => {
  const { setU } = useContext(UserContext);//UserContext {get, set}
  return <input onChange={({target:{value}}) => { setU(value) }}/>
}

export default Input;
