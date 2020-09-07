import React from "react";

const meta = {
  description:
    "I'm a Solutions Engineer who works predominantly with Tableau, Alteryx and AWS. I like to write & teach about data analytics, web development & the cloud.",
};

function Introduction() {
  return (
    <div className="flex flex-col pt-6 pb-8 items-center space-y-8 sm:items-start sm:space-y-0 sm:flex-row sm:space-x-8">
      <a className="flex-shrink-0" href="/">
        <span className="sr-only">Home</span>
        <img
          className="h-28 w-28 sm:h-36 sm:w-36 rounded-lg object-cover"
          src="https://res.cloudinary.com/dmim37dbf/image/upload/v1548761374/image_andre.png"
          alt="andre image"
        />
      </a>
      <div className="text-center sm:text-left">
        <h1 className="lg:text-3xl leading-9 tracking-wide font-extrabold text-gray-900 sm:text-4xl sm:leading-10 text-3xl">
          Hi! I'm Andre
        </h1>
        <div className="mt-2">
          <p className="text-lg leading-7 tracking-tight text-gray-500">
            {meta.description}
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-2 text-gray-400 sm:justify-start">
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://twitter.com/andre347_"
            target="__blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://github.com/andre347"
            target="__blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://dev.to/andre347"
            target="__blank"
            rel="noopener noreferrer"
          >
            Dev.to
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://www.youtube.com/c/AndredeVries"
            target="__blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
