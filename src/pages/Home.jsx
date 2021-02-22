import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{value}</div>
      <button onClick={() => setValue("hey")}>set value</button>
    </div>
  );
};
