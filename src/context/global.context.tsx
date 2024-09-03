import React, { createContext, ReactNode, useState } from "react";

interface GlobalContextType {
  content: string;
  showAlert: (message: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content] = useState<string>("");

  const showAlert = (message: string) => {
    alert(message);
  };

  return (
    <GlobalContext.Provider value={{ content, showAlert }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
