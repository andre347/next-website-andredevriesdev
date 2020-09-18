import React from "react";

import { useOnClickOutside } from "../lib/useOnClickOutside";

function Dropdown({ dropdown, categories }) {
  //   const [dropdown, setDropdown] = React.useState(false);
  //   const dropdownRef = React.useRef();
  //   useOnClickOutside(dropdownRef, () => setDropdown(false));

  return (
    <div
      className={`${
        dropdown
          ? "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
          : "hidden"
      }`}
    >
      <div className="rounded-md bg-white shadow-xs">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {categories.map((item) => (
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
