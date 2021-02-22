import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const About = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h2>About</h2>
      <div>{value}</div>
      <button onClick={() => setValue("WOW")}>set value</button>
    </div>
  );
};
