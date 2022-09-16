import React from "react";
import Image from "next/image";
import Link from "next/link";
import AirbnbLogo from "../public/images/airbnbLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 sm:p-6 bg-darkGrayAir md:p-12">
        {/* Footer Upper Section */}
        <div className="md:flex md:justify-between lg:container lg:mx-auto">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="https://www.airbnb.com/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 flex items-center md:w-28"
              >
                <Image src={AirbnbLogo} alt="" />
              </a>
            </Link>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-2 md:gap-20 lg:gap-32">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>

              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="https://nextjs.org/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Next Js
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>

              <ul className=" text-gray-400">
                <li className="mb-4">
                  <Link href="https://github.com/johncanero">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/johncanero/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Break */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8 lg:container lg:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between md:justify-between lg:container mx-auto">
          <span className="text-sm text-white sm:text-center">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Scrimba
            </a>
            . All Rights Reserved.
          </span>

          {/* Icons */}
          <div className="flex mt-6 space-x-6 sm:justify-center sm:mt-0 md:gap-4 lg:gap-8">
            <Link href="https://www.facebook.com/canerojohn/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-5 text-gray-400 hover:text-pinkRauschAir"
                ></FontAwesomeIcon>
              </a>
            </Link>

            <Link href="https://www.instagram.com/johncanero/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 ml-4 text-gray-400 mt-2 hover:text-pinkRauschAir"
                ></FontAwesomeIcon>
              </a>
            </Link>

            <Link href="https://twitter.com/johncaneroo">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-5 ml-4 text-gray-400 mt-2 hover:text-pinkRauschAir"
                ></FontAwesomeIcon>
              </a>
            </Link>

            <Link href="https://github.com/johncanero">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-5 ml-4 text-gray-400 mt-2 hover:text-pinkRauschAir"
                ></FontAwesomeIcon>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
