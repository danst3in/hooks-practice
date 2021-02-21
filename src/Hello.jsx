import React, { useEffect, useRef } from "react";

export const Hello = () => {
  const renders = useRef(0);
  console.log("hello renders: ", renders.current++);

  // useEffect(() => {
  //   console.log("render");

  //   // add cleanup function
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  return <div>Hello</div>;
};
