import React from "react";
import NavLink from "@/lib/NavLink";
import { useRouter } from "next/router";
import { useKBar } from "kbar";

import posthog from "posthog-js";

const navItems = [
  { url: "/", id: "Home" },
  { url: "/posts", id: "Blogs" },
  { url: "/courses", id: "Courses" },
  { url: "/pages/github", id: "Github" },
  { url: "/pages/youtube", id: "YouTube" },
  { url: "/pages/about", id: "About" },
  { url: "/projects", id: "Projects →" },
];

const routes = {
  home: {
    label: "Home",
    path: "/",
  },
  about: {
    label: "About",
    path: "/pages/about",
  },
};

const defaultRoutes = [routes.home, routes.about];

function NavTabs() {
  const router = useRouter();
  const { query } = useKBar();
  const currPathName = router.pathname;
  const routesAsArr = Object.keys(routes).map((r) => routes[r]);

  return (
    // <div className="py-4 mt-2">
    <div className="hidden md:block">
      <div className="">
        <nav className="flex items-center" aria-label="Tabs">
          {navItems.map((item, idx) => {
            return (
              <NavLink href={item.url} key={item.url}>
                <a
                  aria-current="page"
                  onClick={() => {
                    if (item.url === "/projects") {
                      posthog.capture("clicked_projects_link");
                    }
                  }}
                >
                  {item.id}
                </a>
              </NavLink>
            );
          })}
          <button
            aria-label="Search"
            type="button"
            onClick={query.toggle}
            className="ml-4 p-1 text-gray-500 hover:text-gray-900 border border-gray-200 rounded-md text-xs font-medium px-2"
          >
            <span className="sr-only">Cmd+K</span>
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                ></path>
              </svg>
              K
            </span>

          </button>
        </nav>
        {/* <div className="hidden max-w-screen-md grid-cols-4 gap-1 mx-auto md:grid">
          {defaultRoutes.map((route) => {
            const isActive = route.path === router.pathname;
            const defaultClasses = `font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm`;
            const activeClasses = `bg-gray-200`;
            const inactiveClasses = `hover:bg-gray-900 filter-saturate hover:bg-opacity-5 dark:hover:bg-white dark:text-white  hover:text-gray-200 dark:hover:text-gray-100 text-tertiary`;
            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={`
                ${defaultClasses} 
                ${isActive ? activeClasses : inactiveClasses}`}
                >
                  {route.label}
                </a>
              </Link>
            );
          })}
        </div> */}
      </div>
    </div>
    // </div>
  );
}

export default NavTabs;
