import React from 'react';
import { AuthCheckFeatures } from "../components/AuthFeatures";

export default function Root({ children }) {
  return <>{children}</>;
  //return <AuthCheckFeatures children={children} />;
}