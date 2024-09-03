import { HomeProvider } from "@Pages/Home/home.context";
import { LoginProvider } from "@Pages/Login/login.context";
import { RegisterProvider } from "@Pages/Register/register.context";
import React, { ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <HomeProvider>{children}</HomeProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default ContextProvider;
