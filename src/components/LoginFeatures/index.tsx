import React from "react";
import { auth } from "../AuthFeatures";

import FirebaseUIReact from "firebaseui-react";
import "firebase/compat/auth";

import "./styles.css";

// Configure FirebaseUI.
export const uiConfig = {
  signInOptions: ["emailpassword"],
  language: "en"
};

export function LoginFeatures() {
  return (
    <div className="auth-wrapper">
      <FirebaseUIReact auth={auth} config={uiConfig} />
    </div>
  );
}