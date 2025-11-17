import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      {isMenuOpen && (
        <div className="hidden md:block fixed top-[4.5rem] left-0 h-[calc(100vh-4.5rem)] w-56 z-40 bg-white">
          <SideBar />
        </div>
      )}
      <div
        className={`${
          isMenuOpen ? "md:ml-56" : "ml-0"
        } mt-16 md:mt-24 h-[calc(100vh-6rem)] overflow-y-auto transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
