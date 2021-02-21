import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  //  didn't end up using loading?
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setTimeout(() => {
          setState({ data: y, loading: false });
        }, 2000);
      });

    /* async () => {*/
    /* await fetch(url); */ // sometimes complains about this syntax?
    // better to use .then or place a separate async function inside of the useEffect
    /* const f = async () => {
        await fetch(url);
      };
      f(); */
  }, [url, setState]);
  return state;
};

export default useFetch;
