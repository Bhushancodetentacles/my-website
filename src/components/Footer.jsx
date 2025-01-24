import React from "react";
// ==== images=============
import footerlogo from "../../public/SoilLogo-footer.png";
// =========== Icons ================
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center h-screen overflow-hidden bg-background relative">
      <div className="absolute top-50 left-0 flex flex-col items-center justify-center m-auto w-full">
        <img src={footerlogo} className="w-[17%] py-[50px]" alt="Footer Logo" />
        <div className="text-primary flex items-center gap-4">
            <FaSquareXTwitter size={50}/>
            <FaLinkedin size={50}/>
            <PiTelegramLogoDuotone size={50}/>
            <FaDiscord size={50}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
