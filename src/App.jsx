import React, { useReducer } from "react";

/**
 * TODO:
 *
 *
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      count: {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
}

export default App;
