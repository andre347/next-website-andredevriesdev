import React from "react";
import Link from "next/link";

import Head from "next/head";

// get all the blogs
import { getSortedBlogsData } from "../lib/blogs";

function Posts({ allBlogsData }) {
  return (
    <div className="divide-y-2 divide-orange-100">
      <Head>
        <title>All Blogs - Andre de Vries</title>
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Blogs
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          My writings about data, analytics, web development & the cloud.
        </p>
        {/* Search box */}
        <div>
          <label htmlFor="search_blog" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search_blog"
                className="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:hidden"
                placeholder="Search"
              />
              <input
                id="search_blog"
                className="hidden form-input w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:block sm:text-sm sm:leading-5"
                placeholder="Search blogs"
              />
            </div>
            <button className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
              <svg
                className="h-5 w-5 text-gray-400"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                ></path>
              </svg>
              <span className="ml-2">Category</span>
              <svg
                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
        {allBlogsData.map(({ title, id, description, date, category }) => (
          <div key={id}>
            <p className="text-sm leading-5 text-gray-500">
              <time dateTime={date}>{date}</time>
            </p>
            <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
              <a className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  {description}
                </p>
              </a>
            </Link>
            <div className="mt-3">
              <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
                <a
                  className="text-base leading-6 font-semibold text-orange-500 hover:text-orange-600 transition ease-in-out duration-150"
                  aria-label={`Read "${title}"`}
                >
                  Read more &rarr;
                </a>
              </Link>
            </div>
          </div>
        ))}

        {/* This is one blog */}
      </div>
    </div>
  );
}

// Static Generation of blog posts

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allBlogsData = getSortedBlogsData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allBlogsData,
    },
  };
}

export default Posts;
