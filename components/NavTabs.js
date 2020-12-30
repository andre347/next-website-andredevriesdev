import React from "react";
import NavLink from "../lib/NavLink";

function NavTabs() {
  return (
    <div className="py-4 mt-2">
      <div className="hidden sm:block">
        <div className="">
          <nav className="flex">
            <NavLink href="/">
              <a
                href="#"
                className="px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
              >
                Writings
              </a>
            </NavLink>
            <NavLink href="/pages/github">
              <a
                href="#"
                className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:bg-gray-200"
                aria-current="page"
              >
                Code
              </a>
            </NavLink>
            <NavLink href="/pages/youtube">
              <a
                href="#"
                className="px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
                aria-current="page"
              >
                Videos
              </a>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
