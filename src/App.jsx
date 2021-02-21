import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
// import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

/**
 * TODO:
 *
 *
 */

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   // console.log("render");
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   // add cleanup function
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     console.log("unmount/cleanup");
  //   };
  // }, []);

  useEffect(() => {
    console.log("mount1");
  }, []);
  useEffect(() => {
    console.log("mount2");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="logo-react" className="App-logo" /> */}
        <p>hey!</p>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
        {showHello && <Hello />} */}
        <p>A custom hook with useState is managing these two forms.</p>
        <form action="">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
