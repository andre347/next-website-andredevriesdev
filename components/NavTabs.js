import React from "react";
import NavLink from "../lib/NavLink";

const navItems = [
  { url: "/", id: "Home" },
  { url: "/pages/about", id: "About" },
  { url: "/posts", id: "Blogs" },
  { url: "/pages/github", id: "Github" },
  { url: "/pages/youtube", id: "YouTube" },
];

function NavTabs() {
  return (
    // <div className="py-4 mt-2">
    <div className="hidden sm:block">
      <div className="">
        <nav className="flex" aria-label="Tabs">
          {navItems.map((item, idx) => {
            return (
              <NavLink href={item.url} key={idx}>
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
