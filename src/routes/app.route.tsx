import HomeProviderWrapper from "@Pages/Home/home.provider";
import LoginProviderWrapper from "@Pages/Login/login.provider";
import RegisterProviderWrapper from "@Pages/Register/register.provider";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeProviderWrapper />} />
      <Route path="/home" element={<HomeProviderWrapper />} />
      <Route path="/login" element={<LoginProviderWrapper />} />
      <Route path="/register" element={<RegisterProviderWrapper />} />
    </Routes>
  );
};

export default AppRoutes;
