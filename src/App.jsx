import React, { useState, useEffect, useCallback, useRef } from "react";
// import "./App.css";
// import logo from "./logo.svg";

import { Hello } from "./Hello";

/**
 * TODO:
 *
 *
 */

function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
}

export default App;
