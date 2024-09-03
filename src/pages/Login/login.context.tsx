import AuthService from "@Services/auth.service";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginContextType {
  redirect: string | null;
  email: string;
  password: string;
  loading: boolean;
  message: string;
  handleLogin: (values: { email: string; password: string }) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [redirect, setRedirect] = useState<string | null>(null);
  const [email] = useState<string>("");
  const [password] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setRedirect("/profile");
    }
  }, []);

  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;

    setMessage("");
    setLoading(true);

    AuthService.login(email, password)
      .then(() => {
        setRedirect("/profile");
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [redirect, navigate]);

  return (
    <LoginContext.Provider
      value={{ redirect, email, password, loading, message, handleLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
