import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "./useForm";

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

  useEffect(() => {
    console.log("render");
  }, [values.password, values.firstName]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo-react" className="App-logo" />
        <p>hey!</p>
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
