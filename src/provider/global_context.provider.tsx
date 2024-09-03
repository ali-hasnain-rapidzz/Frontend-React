import { GlobalProvider } from "@App/context/global.context";
import React, { ReactNode } from "react";

const GlobalProviderWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default GlobalProviderWrapper;
