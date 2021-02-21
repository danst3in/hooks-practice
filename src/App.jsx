import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
// import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import useFetch from "./useFetch";

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
  const [count, setCount] = useState(0);
  // useFetch("https://randomuser.me/api/");
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="logo-react" className="App-logo" /> */}
        <p>hey!</p>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
        {showHello && <Hello />} */}
        <button onClick={() => setCount((s) => s + 1)}>Increment</button>
        <div>{!data ? `loading...` : data}</div>
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
