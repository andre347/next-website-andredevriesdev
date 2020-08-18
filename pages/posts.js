import React from "react";
import Link from "next/link";

// get all the blogs
import { getSortedBlogsData } from "../lib/blogs";

function Posts({ allBlogsData }) {
  return (
    <div>
      {allBlogsData.map(({ title, id }) => (
        <li>
          <Link href={"/posts/[slug]"} as={`/posts/${id}`}>
            <a className="text-gray-800">{title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}

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

export default Posts;
