import React from "react";
import Link from "next/link";
import Head from "next/head";

// TS stuff
import { GetStaticProps } from "next";

// get all the blogs
import { getSortedBlogsData } from "@/lib/blogs";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import tinytime from "tinytime";
// view count for blogs
import BlogViews from "@/components/BlogViews";
import BlogPost from "@/components/BlogPost";
// template for date
const template = tinytime("{MMMM} {DD}, {YYYY}");

const twitterImage =
  "https://res.cloudinary.com/dmim37dbf/image/upload/v1600869014/YouTubeBanner/YouTube_Banner.png";

const Home = ({ allBlogsData }) => {
  return (
    <Layout>
      <Head>
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andre347_" />
        <meta name="twitter:title" content={"Andre de Vries"} />
        <meta property="og:image" content={twitterImage} key="ogimage" />
      </Head>
      <Introduction />
      <ul className="">
        {allBlogsData.map(({ title, id, description, date, category }) => (
          <BlogPost
            key={id}
            title={title}
            id={id}
            description={description}
            date={date}
            category={category}
          />
        ))}
        <div className="text-base leading-6 font-medium border-t-2 border-orange-100 py-10">
          <Link href={"/posts"}>
            <a aria-label={`View all blogs`}>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-600 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              >
                View all blogs &rarr;
              </button>
            </a>
          </Link>
          <span className="inline-flex rounded-md shadow-sm"></span>
        </div>
      </ul>
    </Layout>
  );
};

// Static Generation of blog posts
export const getStaticProps: GetStaticProps = async () => {
  // Get external data from the file system, API, DB, etc.
  const allBlogsData = getSortedBlogsData().slice(0, 3);

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allBlogsData,
    },
  };
};

export default Home;
