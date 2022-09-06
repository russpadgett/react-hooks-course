import React, { } from "react";
import { User } from "./UserInfo"; //import context User

const Input = () => {
  const { u, setU } = React.useContext(User); //useContext of User [get, set]
  return <div className="context-scope-none"><h2><input onChange={({ target: { value } }) => {setU(value); }} /></h2></div>;
};

export default Input;
