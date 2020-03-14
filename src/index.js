import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import App from './App';
import App from "./AppCopyHooks";
import { GlobalProvider } from "./context/GlobalState";

// import App from "./AppTroubleshoot";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
