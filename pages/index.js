import React from "react";
import Link from "next/link";
import Head from "next/head";

// get all the blog
import { getSortedBlogsData } from "../lib/blogs";

const Home = ({ allBlogsData }) => {
  console.log(allBlogsData.slice(0, 2));
  return (
    <div>
      <Head>
        <title>Andre de Vries</title>
      </Head>
      {allBlogsData.map(({ title, id, description }) => (
        <div key={id} className="py-4 mb-4 mr-8 ml-8">
          <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
            <a className="text-2xl font-semibold text-orange-600 no-underline">
              {title}
            </a>
          </Link>
          <p>{description}</p>
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
