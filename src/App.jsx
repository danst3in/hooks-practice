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
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo-react" className="App-logo" />
        <p>hey!</p>
        <p>A custom hook with useState is managing these two forms.</p>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </header>
    </div>
  );
}

export default App;
