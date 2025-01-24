import { DollarSign, LayoutDashboard, Megaphone, TicketX, Users } from "lucide-react"; // Import additional icons
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

function SidebarMenu({ collapsed, setCollapsed }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Sidebar
      collapsed={collapsed}
      breakPoint="md"
      onBackdropClick={() => setCollapsed(true)} // Close sidebar on mobile backdrop click
    >
      <div className="p-4 flex justify-center">
        <img
          src={`${collapsed ? `${import.meta.env.VITE_BASE_PATH}images/mobile-logo.png` : `${import.meta.env.VITE_BASE_PATH}images/logo.png`}`}
          alt="logo"
          className="w-auto max-h-10 mb-4"
        />
      </div>
      <Menu>
        <NavLink
          to="/protected/dashboard"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <MenuItem icon={<LayoutDashboard size={20} />}>Dashboard</MenuItem>
        </NavLink>
        <NavLink
          to="/protected/users"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <MenuItem icon={<Users size={20} />}>Member Insights</MenuItem>
        </NavLink>
        <NavLink
          to="/protected/community-stats"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <MenuItem icon={<Megaphone size={20} />}>Community Stats</MenuItem>
        </NavLink>
        <NavLink
          to="/protected/member-activity-tracker"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <MenuItem icon={<TicketX size={20} />}>Error and Dispute Management</MenuItem>
        </NavLink>
        <NavLink
          to="/protected/pay-it-forward"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <MenuItem icon={<DollarSign size={20} />}>Pay It Forward History</MenuItem>
        </NavLink>
      </Menu>
    </Sidebar>
  );
}

export default SidebarMenu;
