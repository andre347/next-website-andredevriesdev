import React from "react";

function SectionHeader({ sectionTitle, sectionDescription }) {
  return (
    <div className="flex flex-col space-y-2 md:items-center md:text-center sm:">
      <h1 className="text-2xl lg:text-3xl border-b-2 border-orange-300 leading-9 tracking-normal font-semibold text-gray-900 sm:text-4xl sm:leading-10">
        {sectionTitle}
      </h1>
      <p className="text-lg text-gray-500 font-medium">{sectionDescription}</p>
    </div>
  );
}

export default SectionHeader;
