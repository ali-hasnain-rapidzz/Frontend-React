import React, { createContext, ReactNode, useState } from "react";

interface HomeContextType {
  content: string;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

const HomeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content] = useState<string>("");

  return (
    <HomeContext.Provider value={{ content }}>{children}</HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
