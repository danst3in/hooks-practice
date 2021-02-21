import React, { useEffect } from "react";

const useFetch = (url) => {
  useEffect(
    /* async */ () => {
      /* await fetch(url); */ // sometimes complains about this syntax?
      // better to use .then or place a separate async function inside of the useEffect
      /* const f = async () => {
        await fetch(url);
      };
      f(); */

      fetch(url)
        .then((x) => x.text())
        .then((y) => {
          console.log(y);
        });
      return () => {
        console.log("cleanup");
      };
    },
    [url]
  );
};

export default useFetch;
