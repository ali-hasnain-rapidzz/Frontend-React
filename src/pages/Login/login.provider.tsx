import { LoginProvider } from "@Pages/Login/login.context";
import Login from "@Pages/Login/login.page";
import React from "react";

const LoginProviderWrapper: React.FC = () => {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
};

export default LoginProviderWrapper;
