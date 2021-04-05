import Link from "next/link";
import MobileNavLink from "@/lib/MobileNavLink";
import React, { useState } from "react";
import NavTabs from "./NavTabs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-30 bg-white left-0 right-0 max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0 mx-auto">
      <header className="flex justify-between items-center py-10">
        <div onClick={() => setIsOpen(false)}>
          <Link href="/">
            <a
              aria-label="andredevries.dev"
              className="text-sm font-light text-gray-700 hover:text-gray-900 uppercase md:text-base lg:text-xl"
            >
              Andre <span className="font-bold">de Vries</span>
            </a>
          </Link>
        </div>
        {/* Header for non-mobile screens */}
        <div className="text-base leading-5 hidden sm:block">
          <NavTabs />
        </div>
        <div className="block sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

function MobileHeader({ isOpen, setIsOpen }) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <MobileNavLink href="/posts">
          <a onClick={() => setIsOpen(!isOpen)}>Blogs</a>
        </MobileNavLink>
        <MobileNavLink href="/pages/github#main">
          <a onClick={() => setIsOpen(!isOpen)}>Github</a>
        </MobileNavLink>
        <MobileNavLink href="/pages/youtube#main">
          <a onClick={() => setIsOpen(!isOpen)}>YouTube</a>
        </MobileNavLink>
        <MobileNavLink href="/pages/about">
          <a onClick={() => setIsOpen(!isOpen)}>About</a>
        </MobileNavLink>
      </div>
    </div>
  );
}

export default Header;
