import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import useFetch from "./useFetch";
import useMeasure from "./useMeasure";

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
  const hello = useRef(() => console.log("hello from ref"));
  const [showHello, setShowHello] = useState(true);

  //  get the dimensions of a DOM element
  const [rect, inputRef2] = useMeasure([]);

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
            ref={inputRef2}
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
            // call function stored in ref
            hello.current();
          }}
        >
          focus on email input
        </button>
      </header>
    </div>
  );
}

export default App;
