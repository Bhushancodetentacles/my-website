import React, { useState } from "react";
// =========== Images ================
import Logo from "../../public/soil-grey-white.png";

// =========== Icons ================
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  // Function to handle hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white p-4 navbar z-10">
      <div className="containerfluid flex justify-between items-center">
        {/*====== Logo ========*/}
        <div className="text-2xl font-bold">
          <img src={Logo} alt="Logo" />
        </div>

        {/*======== Menus ===========*/}
        <div className="hidden md:flex space-x-6 items-center font-navbarfont">
          <a href="#about" className="text-primary hover:text-secondary transition transition-all duration-300">about</a>
          <a href="#team" className="text-primary hover:text-secondary transition transition-all duration-300">team</a>
          <a href="#token" className="text-primary hover:text-secondary transition transition-all duration-300">$soil token</a>
          <a href="#roadmap" className="text-primary hover:text-secondary transition transition-all duration-300">roadmap</a>
          <a href="#faq" className="text-primary hover:text-secondary transition transition-all duration-300">faq</a>
          <a href="#docs" className="text-primary hover:text-secondary transition transition-all duration-300">docs</a>
          <a href="#contact" className="text-primary hover:text-secondary transition transition-all duration-300">contact</a>

          {/*==== Launch App Button =====*/}
          <div className="flex">
            <button className="bg-secondary text-white font-bold py-2 px-4 rounded">
              Launch App
            </button>
          </div>

          {/*==== Social Icons =====*/}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-primary text-2xl">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="text-primary text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-primary text-2xl">
              <PiTelegramLogoDuotone />
            </a>
            <a href="#" className="text-primary text-2xl">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-1 transform mobile-nav ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col items-end justify-center h-full gap-3 pe-5 font-navbarfont text-primary ">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none z-10"
          >
            &times;
          </button>

          {/* Menu Links */}
          <a href="#about" className="text-primary text-xl hover:underline z-10">
            about
          </a>
          <a href="#team" className="text-primary text-xl hover:underline z-10">
            team
          </a>
          <a href="#token" className="text-primary text-xl hover:underline z-10">
            $soil token
          </a>
          <a href="#roadmap" className="text-primary text-xl hover:underline z-10">
            roadmap
          </a>
          <a href="#faq" className="text-primary text-xl hover:underline z-10">
            faq
          </a>
          <a href="#docs" className="text-primary text-xl hover:underline z-10">
            docs
          </a>
          <a href="#contact" className="text-primary text-xl hover:underline z-10">
            contact
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4 text-primary text-2xl mt-5 z-10">
            <a href="#" className="hover:text-gray-400 text-3xl">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 text-3xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gray-400 text-3xl">
              <PiTelegramLogoDuotone />
            </a>
            <a href="#" className="hover:text-gray-400 text-3xl">
              <FaDiscord />
            </a>
          </div>

          {/* External Links */}
          <div className="flex space-x-4 items-center mt-4 z-10">
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg"
              alt="CoinMarketCap"
              className="h-6"
            />
            <img
              src="https://static.coingecko.com/s/coingecko-logo-2x.png"
              alt="CoinGecko"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
