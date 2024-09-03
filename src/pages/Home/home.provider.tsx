import { HomeProvider } from "@Pages/Home/home.context";
import Home from "@Pages/Home/home.page";
import React from "react";

const HomeProviderWrapper: React.FC = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};

export default HomeProviderWrapper;
