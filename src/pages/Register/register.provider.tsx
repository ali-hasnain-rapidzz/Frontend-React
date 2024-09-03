import { RegisterProvider } from "@Pages/Register/register.context";
import Register from "@Pages/Register/register.page";
import React from "react";

const RegisterProviderWrapper: React.FC = () => {
  return (
    <RegisterProvider>
      <Register />
    </RegisterProvider>
  );
};

export default RegisterProviderWrapper;
