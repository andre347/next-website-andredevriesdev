import React from "react";
import Link from "next/link";

import Head from "next/head";

// get all the blogs
import { getSortedBlogsData } from "../lib/blogs";

function Posts({ allBlogsData }) {
  return (
    // <div>
    //   {allBlogsData.map(({ title, id }) => (
    //     <li>
    //       <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
    //         <a className="text-gray-800">{title}</a>
    //       </Link>
    //     </li>
    //   ))}
    // </div>
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
      </div>

      <div class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
        {allBlogsData.map(({ title, id, description, date, category }) => (
          <div key={id}>
            <p class="text-sm leading-5 text-gray-500">
              <time datetime={date}>{date}</time>
            </p>
            <a href="#" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {title}
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                {description}
              </p>
            </a>
            <div class="mt-3">
              <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
                <a
                  class="text-base leading-6 font-semibold text-orange-500 hover:text-orange-600 transition ease-in-out duration-150"
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
