import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const notActiveClassName =
  "ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100";
const activeClassName =
  "ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:bg-gray-200";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  // if the current href is the same as the router then set the active classname else use the notactive class
  let className =
    router.pathname === href ? activeClassName : notActiveClassName;

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
