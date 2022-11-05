import React from "react";
import Link from "next/link";
import Image from "next/image";
import AirbnbLogo from "../public/images/airbnbLogo.png";

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "" : "dark"}>
      <div className="px-8 py-6 md:px-10">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="https://www.airbnb.com/">
            <a
              target="_blank"
              rel="noopener noreferrer"
              x
              className="w-32 flex items-center"
            >
              <Image src={AirbnbLogo} alt="airbnbLogo.png" className="" />
              <span></span>
            </a>
          </Link>

          {/* Toggle Feature = Dark Mode */}
          <div className="toggler">
            <p className="toggler--light">Light</p>
            <div className="toggler--slider" onClick={props.toggleDarkMode}>
              <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
