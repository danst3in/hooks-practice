import React, { useReducer, useState } from "react";

/**
 * TODO:
 *
 *
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
};

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD-TODO", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          style={{ textDecoration: t.completed ? "line-through" : "none" }}
          onClick={() => dispatch({ type: "TOGGLE-TODO", idx })}
        >
          {t.text}{" "}
        </div>
      ))}
    </div>
  );
}

export default App;
