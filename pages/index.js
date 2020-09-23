import React from "react";
import Link from "next/link";
import Head from "next/head";

// get all the blogs
import { getSortedBlogsData } from "../lib/blogs";
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import tinytime from "tinytime";

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
      </Head>
      <Introduction />
      <ul className="">
        {allBlogsData.map(({ title, id, description, date, category }) => (
          <li key={id} className="py-9">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-2 xl:items-baseline">
              <dl className="col-span-4">
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={date}>{template.render(new Date(date))}</time>{" "}
                  &bull; <span>{category}</span>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-4">
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
                      className="text-orange-500 hover:text-orange-600 transition ease-in-out duration-150 text-base leading-6"
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
