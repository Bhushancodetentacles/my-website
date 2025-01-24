import { Menu as MenuIcon, LogOut } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setCollapsed }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        navigate("/")
        localStorage.removeItem('access_token')
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="px-4 py-2 bg-white border-b border-gray-200 flex justify-between items-center relative">
            <MenuIcon
                className="cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
            />
            <div className="flex items-center gap-1 relative cursor-pointer" onClick={toggleDropdown}>
                <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="user-logo"
                    className="w-10 h-10 rounded-full cursor-pointer"
                />
                <h2 className="font-medium text-gray-800 hidden md:block">Admin</h2>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                    <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <LogOut className="mr-2" /> Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
