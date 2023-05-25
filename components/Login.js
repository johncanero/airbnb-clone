/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = ({}) => {
  const { data: session } = useSession();
  return React.createElement(
    "div",
    null,
    session
      ? React.createElement(
          "div",
          { className: "flex" },
          React.createElement("img", {
            onClick: () => signOut(),
            src: session.user && session.user.image,
            alt: "user-avatar",
            className:
              "mx-auto rounded-full cursor-pointer w-7 mr-2 w-5 md:w-9 md:mr-2 lg:w-9 lg:mt-2 lg:mb-2 lg:mr-3 2xl:h-12 2xl:w-12 hover:opacity-50",
          }),
          React.createElement(
            "p",
            { className: "hidden md:block lg:mt-4 lg:mr-4 md:mr-3 md:mt-2 text-neutral-500" },
            session.user && session.user.name
          )
        )
      : React.createElement(
          "button",
          {
            onClick: (e) => {
              e.preventDefault();
              signIn("google");
            },
          },
          React.createElement(
            "div",
            {
              className:
                "font-medium mr-2 md:text-base md:mr-4 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 font-Poppins",
            },
            <CgProfile size={28} className="mt-2" />
          )
        )
  );
};

export default Login;
