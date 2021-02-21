import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// React fast refresh enabled via installed plugin + added to config
//  @snowpack/plugin-react-refresh
if (import.meta.hot) {
  import.meta.hot.accept();
}

console.log("Hello World! You did! Welcome to Snowpack :D");
