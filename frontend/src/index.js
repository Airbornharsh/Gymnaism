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
    region: "ap-south-1",
    userPoolId: "ap-south-1_W89RAerot",
    identityPoolId: "ap-south-1:68cc0fa6-065b-4bff-b41b-07751bb8609b",
    userPoolWebClientId: "6dv4r4ftb68hvgpo0nhialp105",
    oauth: {
      domain: `${"gymnaism-harshnew-auth-domain.auth.ap-south-1.amazoncognito.com"}`,
      scope: ["email", "profile", "openid"],
      // redirectSignIn: "http://localhost:3000",
      // redirectSignOut: "http://localhost:3000",
      redirectSignIn: "https://gymnaism.netlify.app",
      redirectSignOut: "https://gymnaism.netlify.app",
      responseType: "token",
    },
  },
  Storage: [
    {
      region: "ap-south-1",
      bucket: "harshairborn-gymnaism-me-useraccessbucketc6094d94-jlf4r2t4q6wz",
      identityPoolId: "ap-south-1:68cc0fa6-065b-4bff-b41b-07751bb8609b",
    },
  ],
  API: {
    endpoints: [
      {
        name: "any",
        endpoint: "https://3lc3tm1h9h.execute-api.ap-south-1.amazonaws.com",
        region: "ap-south-1",
      },
      {
        name: "user",
        endpoint: "https://3nfih8ymme.execute-api.ap-south-1.amazonaws.com",
        region: "ap-south-1",
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
