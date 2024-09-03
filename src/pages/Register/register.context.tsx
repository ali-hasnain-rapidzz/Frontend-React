import AuthService from "@Services/auth.service";
import React, { createContext, ReactNode, useState } from "react";

interface RegisterContextType {
  register: (formValue: {
    name: string;
    email: string;
    password: string;
  }) => void;
  message: string;
  successful: boolean;
}

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined,
);

const RegisterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>("");
  const [successful, setSuccessful] = useState<boolean>(false);

  const register = (formValue: {
    name: string;
    email: string;
    password: string;
  }) => {
    const { name, email, password } = formValue;

    setMessage("");
    setSuccessful(false);

    AuthService.register(name, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      },
    );
  };

  return (
    <RegisterContext.Provider value={{ register, message, successful }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
