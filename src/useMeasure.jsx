import React, { useRef, useState, useLayoutEffect } from "react";

const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();
  useLayoutEffect(() => {
    // console.log(myRef.current.getBoundingClientRect());
    setRect(myRef.current.getBoundingClientRect());
  }, deps);
  return [rect, myRef];
};

export default useMeasure;
