import React from "react";
import Image from "next/image";
import Link from "next/link";

const meta = {
  description:
    "I'm an Engineer who is passionate about working at the intersection of data engineering, web development and the cloud. I currently help developers build custom software remarkably faster @ Retool. Before Retool I spent nearly 7 years in data consultancy at The Information Lab.",
};

function Introduction() {
  return (
    <div className="flex flex-col pt-6 pb-8 items-center space-y-8 sm:items-start sm:space-y-0 sm:flex-row sm:space-x-8 border-b-2 border-orange-100 ">
      <Link href="/" className="flex-shrink-0 sm:mt-8">
        <span className="sr-only">Home</span>
        <Image
          className="h-28 w-28 sm:h-36 sm:w-36 rounded-lg object-cover"
          src="https://res.cloudinary.com/dmim37dbf/image/upload/v1548761374/image_andre.png"
          alt="Picture of Andre"
          height={145}
          width={145}
          placeholder="blur"
          blurDataURL="data:image/png;base64,LrMEsWNe}Sj]^NsmM{jF-Ua#NabI"
        />
      </Link>
      <div className="text-center sm:text-left">
        <h1 className="lg:text-3xl leading-9 tracking-wide font-extrabold text-gray-900 sm:text-4xl sm:leading-10 text-3xl">
          Hi! I&apos;m{" "}
          <span className="transition duration-600 ease-in-out hover:bg-orange-400 hover:text-white">
            Andre
          </span>
        </h1>
        <div className="mt-2">
          <p className="text-lg leading-7 tracking-tight font-medium text-gray-500">
            {meta.description}
          </p>
        </div>
        <div className="flex flex-col space-y-3 md:space-x-4 md:space-y-0 md:flex-row mt-4 text-base leading-6 font-medium ">
          <Link
            href="/pages/about"
            passHref
            className="text-gray-500 hover:text-orange-400"
          >
            <button className="block w-full items-center rounded justify-center flex-none px-4 py-1.5 space-x-3 font-medium bg-white border border-gray-200 disabled:opacity-50 disabled:bg-opacity-0 text-primary hover:border-gray-300 focus:border-gray-1000  focus:ring-0 focus:outline-none">
              Learn more about me
            </button>
          </Link>
          <Link
            href="/courses"
            passHref
            className="text-gray-500 hover:text-orange-400"
          >
            <button className="block w-full items-center rounded justify-center flex-none px-4 py-1.5 space-x-3 font-medium bg-white border border-gray-200 disabled:opacity-50 disabled:bg-opacity-0 text-primary hover:border-gray-300 focus:border-gray-1000  focus:ring-0 focus:outline-none">
              Browse my courses
            </button>
          </Link>
        </div>
        <div className="mt-4 flex justify-center space-x-2 text-gray-400 font-medium sm:justify-start">
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
            DEV.to
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
