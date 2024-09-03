import { GlobalContext } from "@Context/global.context";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface HomeContextType {
  content: string;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

const HomeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<string>("");

  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    if (globalContext) {
      globalContext.showAlert("Global Context!!!! Home context is calling you");

      setContent(globalContext.content);
    }
  }, [globalContext]);

  return (
    <HomeContext.Provider value={{ content }}>{children}</HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
