import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const removeSlug = router.pathname.replace("/[slug]", "");

  // if the current href is the same as the router then set the active classname else use the notactive class
  let className = `ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md hover:text-gray-700 focus:bg-gray-200 transition ease-in-out duration-150 ${
    removeSlug === href ? "bg-gray-200 text-gray-900" : "text-gray-500"
  }`;

  return <Link href={href} legacyBehavior>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
