import React from "react";
import Link from "next/link";
import Head from "next/head";

// get all the blog
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
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Blogs and videos related to data, web development & cloud.
        </p>
      </div>
      {allBlogsData.map(({ title, id, description }) => (
        <div key={id} className="py-12 mb-4 mr-8 ml-8">
          <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
            <a className="text-2xl font-semibold text-gray-600 no-underline">
              {title}
            </a>
          </Link>
          <div className="prose max-w-none text-gray-500">{description}</div>
        </div>
      ))}
    </div>
  );
};

// Static Generation of blog posts

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allBlogsData = getSortedBlogsData();
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
