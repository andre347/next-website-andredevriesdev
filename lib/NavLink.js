import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const notActiveClassName =
  "ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:bg-gray-100 transition ease-in-out duration-150";
const activeClassName =
  "ml-4 px-3 py-2 bg-gray-100 text-gray-900 px-3 py-2 font-medium text-sm rounded-md transition focus:bg-gray-200 ease-in-out duration-150 hover:bg-gray-100";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  // if the current href is the same as the router then set the active classname else use the notactive class
  let className = `ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md hover:text-gray-700 focus:bg-gray-200 transition ease-in-out duration-150 ${
    router.pathname === href ? "bg-gray-200 text-gray-900" : "text-gray-500"
  }`;

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
