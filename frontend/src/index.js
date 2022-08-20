import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import ContextProvider from "./Context/ContextProvider";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: "us-east-1_0cjDyS2jJ",
    identityPoolId: "us-east-1:1c6c3156-94ad-47c4-b3f5-59b2c7da1a81",
    userPoolWebClientId: "29eskqsl1sliu28fjdo6852hqb",
  },
  API: {
    endpoints: [
      {
        name: "any",
        endpoint: "https://x2m5uo1i68.execute-api.us-east-1.amazonaws.com",
        region: "us-east-1",
      },
      {
        name: "user",
        endpoint: "https://pppy3ebfx7.execute-api.us-east-1.amazonaws.com",
        region: "us-east-1",
      },
    ],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
