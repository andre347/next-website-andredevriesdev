import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const notActiveClassName =
  "text-gray-700 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
const activeClassName =
  "bg-orange-400 bg-opacity-100	text-orange-800 block px-3 py-2 rounded-md text-base font-medium";

const MobileNavLink = ({ href, children }) => {
  const router = useRouter();
  // if the current href is the same as the router then set the active classname else use the notactive class
  let className =
    router.pathname === href ? activeClassName : notActiveClassName;

  return <Link href={href} legacyBehavior>{React.cloneElement(children, { className })}</Link>;
};

export default MobileNavLink;
