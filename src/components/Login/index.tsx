import React from "react";
import { auth } from "../Auth";

import FirebaseUIReact from "firebaseui-react";
import "firebase/compat/auth";

import "./styles.css";

// Configure FirebaseUI.
export const uiConfig = {
  signInOptions: ["emailpassword"],
  language: "en"
};

export function Login() {
  return (
    <div className="auth-wrapper">
      <FirebaseUIReact auth={auth} config={uiConfig} />
    </div>
  );
}