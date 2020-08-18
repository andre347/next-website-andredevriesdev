import React from "react";
import Link from "next/link";
import Head from "next/head";

// get all the blogs
import { getSortedBlogsData } from "../lib/blogs";

const Home = ({ allBlogsData }) => {
  console.log(allBlogsData.slice(0, 2));
  return (
    <div className="divide-y divide-orange-200">
      <Head>
        <title>Andre de Vries</title>
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          My writings about data, analytics, web development & the cloud.
        </p>
      </div>
      <ul className="">
        {allBlogsData.map(({ title, id, description, date, category }) => (
          <li key={id} className="py-9">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={date}>{date}</time> &bull;{" "}
                  <span>{category}</span>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">
                    <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
                      <a className="text-gray-800">{title}</a>
                    </Link>
                  </h2>
                  <div className="prose max-w-none text-gray-500">
                    {description}
                  </div>
                </div>
                <div className="text-base leading-6 font-medium">
                  <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
                    <a
                      className="text-orange-500 hover:text-orange-600"
                      aria-label={`Read "${title}"`}
                    >
                      Read more &rarr;
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
        <div className="text-base leading-6 font-medium">
          <Link href={"/posts"}>
            <a
              className="text-gray-500 hover:text-gray-600"
              aria-label={`View all blogs`}
            >
              View all blogs &rarr;
            </a>
          </Link>
        </div>
      </ul>
    </div>
  );
};

// Static Generation of blog posts

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allBlogsData = getSortedBlogsData().slice(0, 3);
  console.log(typeof allBlogsData);

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allBlogsData,
    },
  };
}

export default Home;
