import React, { useState, useEffect, useCallback, useRef } from "react";
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

  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="logo-react" className="App-logo" /> */}
        <p>hey!</p>
        <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
        {showHello && <Hello />}

        <p>
          A custom hook with useState is managing these three inputs in this
          form.
        </p>
        <form action="">
          <input
            ref={inputRef}
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
        <button
          onClick={() => {
            // console.log(inputRef.current);
            inputRef.current.focus();
          }}
        >
          focus on email input
        </button>
      </header>
    </div>
  );
}

export default App;
