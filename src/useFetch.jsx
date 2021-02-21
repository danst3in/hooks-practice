import React, { useEffect, useState, useRef } from "react";

const useFetch = (url) => {
  //  didn't end up using loading?
  const [state, setState] = useState({ data: null, loading: true });
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      // called when component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);
  return state;
};

export default useFetch;
