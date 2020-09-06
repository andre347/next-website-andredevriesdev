import React from "react";

const meta = {
  description:
    "Hi, I'm Andre! I'm a Solutions Engineer who works predominantly with Tableau, Alteryx and AWS. I like to write & teach about data analytics, web development & the cloud.",
};

function Introduction() {
  return (
    // <div className="pt-6 pb-8 space-y-2 md:space-y-5">
    //   <h1 className="text-4xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
    //     Hi there 👋
    //   </h1>
    //   <p className="text-lg leading-7 text-gray-500">
    //     My writings about data, analytics, web development & the cloud.
    //   </p>
    // </div>
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
        <h1 className="lg:text-3xl uppercase leading-9 tracking-wide font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Andre de Vries
        </h1>
        <div className="mt-2">
          <p className="text-lg leading-7 tracking-tight text-gray-500">
            {meta.description}
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-2 text-gray-400 sm:justify-start">
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://podcasts.apple.com/us/podcast/feed/id931714873"
          >
            Twitter
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://overcast.fm/itunes931714873"
          >
            Github
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://feeds.transistor.fm/full-stack-radio"
          >
            Dev.to
          </a>
          <span>•</span>
          <a
            className="text-gray-500 hover:text-gray-900"
            href="https://feeds.transistor.fm/full-stack-radio"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
