import React from "react";
import NavLink from "@/lib/NavLink";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { url: "/", id: "Home" },
  { url: "/posts", id: "Blogs" },
  { url: "/courses", id: "Courses" },
  { url: "/pages/github", id: "Github" },
  { url: "/pages/youtube", id: "YouTube" },
  { url: "/pages/about", id: "About" },
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
      </div>
    </div>
    // </div>
  );
}

export default NavTabs;
