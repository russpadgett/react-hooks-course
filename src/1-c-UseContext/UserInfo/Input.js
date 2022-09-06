import React, { useContext } from "react"; //useContext required
import { UserContext } from "./UserInfo"; //ref UserContext

const Input = () => {
  const { setU } = useContext(UserContext); //UserContext {get, set}
  return <div className="double fl"><h2><input onChange={({ target: { value } }) => {setU(value); }} /></h2></div>;
};

export default Input;
