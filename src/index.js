import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// toastify css
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { CONFIG } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider
    serverUrl={`${CONFIG.moralis_Server_URL}`}
    appId={`${CONFIG.moralis_app_ID}`}
    // serverUrl={`https://0xzjwzdbbkel.usemoralis.com:2053/server`}
    // appId={`TyeNFHSscgGgPcO2e0oDxuzDWo72tLF80MboERhI`}
  >
    <App />
  </MoralisProvider>
);

reportWebVitals();
