import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("render");

    // add cleanup function
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>Hello</div>;
};
