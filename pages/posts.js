import React from "react";
import Link from "next/link";

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
    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
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
