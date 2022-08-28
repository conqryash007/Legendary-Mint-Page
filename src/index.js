import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// toastify css
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider
    serverUrl={`https://snavu03jrcte.usemoralis.com:2053/server`}
    appId={`rlJh20MP66AQeucpV6L2vZoyZgeVwtHir7n1v88e`}
  >
    <App />
  </MoralisProvider>
);

reportWebVitals();
