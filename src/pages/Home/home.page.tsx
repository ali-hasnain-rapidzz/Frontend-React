import { HomeContext } from "@Pages/Home/home.context";
import React, { useContext } from "react";

const Home: React.FC = () => {
  const { content } = useContext(HomeContext)!;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="bg-blue-500 text-white rounded-lg p-6 shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-2">{content}</h3>
        <h3 className="text-2xl font-semibold">Welcome</h3>
      </header>
    </div>
  );
};

export default Home;
