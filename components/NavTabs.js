import React from "react";
import NavLink from "@/lib/NavLink";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { url: "/", id: "Home" },
  { url: "/pages/about", id: "About" },
  { url: "/posts", id: "Blogs" },
  { url: "/pages/github", id: "Github" },
  { url: "/pages/youtube", id: "YouTube" },
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
  const currPathName = router.pathname;
  const routesAsArr = Object.keys(routes).map((r) => routes[r]);

  return (
    // <div className="py-4 mt-2">
    <div className="hidden sm:block">
      <div className="">
        <nav className="flex" aria-label="Tabs">
          {navItems.map((item, idx) => {
            return (
              <NavLink href={item.url} key={item.url}>
                <a aria-current="page">{item.id}</a>
              </NavLink>
            );
          })}
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
