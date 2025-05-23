import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        {/* <main className="bg-gray-50 min-h-screen"> */}
        {/* <main className="flex flex-1 items-center justify-center min-h-[calc(100vh-140px)]"> */}
        <main className="bg-gray-50 flex-grow flex items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
