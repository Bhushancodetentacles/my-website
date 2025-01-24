import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
    {/* Sidebar Section */}
    <SidebarMenu  collapsed={collapsed} setCollapsed={setCollapsed} className="w-64 bg-gray-800 text-white" />

    {/* Main Content Section */}
    <div className="flex-1 overflow-auto bg-gray-100">
      <Header setCollapsed={setCollapsed} />
      {children}
    </div>
  </div>
  );
}

export default DashboardLayout;
