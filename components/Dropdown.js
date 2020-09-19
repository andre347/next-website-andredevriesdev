import React from "react";

function Dropdown({ dropdown, categories, setCategory, selectedCategory }) {
  // change to bold when selected by user
  const classForCategory = (item) => {
    return `${
      item === selectedCategory ? "font-bold" : null
    } block text-gray-700 px-4 py-2 text-sm leading-5  hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer`;
  };

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
          {categories.map((item, idx) => (
            <div
              type="button"
              key={idx}
              onMouseDown={() => setCategory(item)}
              className={classForCategory(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
