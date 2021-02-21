import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import useFetch from "./useFetch";

export const Hello = () => {
  // const renders = useRef(0);
  // toggle Hello to create error - Can't perform a React state update on an unmounted component.
  // remove error by updating useFetch to include ref for conditional state update
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", renders.current++);

  // useEffect(() => {
  //   console.log("render");

  //   // add cleanup function
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  const [rect, setRect] = useState({});
  const divRef = useRef();
  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? `loading...` : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((s) => s + 1)}>Increment</button>
    </div>
  );
};
