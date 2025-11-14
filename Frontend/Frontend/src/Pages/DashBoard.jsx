// DashBoard.jsx
import React from "react";
import HeaderDashboard from "../Components/Header/HeaderDashboard";
import SidePanel from "../Components/Side Panel/SidePanel";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="bg-light">
      <HeaderDashboard />
      <SidePanel />
      
      <Outlet />
    </div>
  );
}

export default DashBoard;
