import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import BlogViews from "@/components/BlogViews";
import CodeBlock from "@/components/Codeblock";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown/with-html";
import matter from "gray-matter";
import tinytime from "tinytime";
const template = tinytime("{MMMM} {DD}, {YYYY}");

// import Image from nextjs and then use the renderer to import the image in the react markdown
// https://jacobwicks.github.io/2020/06/19/rendering-markdown-and-resizing-images-with-react-markdown.html
import Image from "next/image";

export default function Blog({ content, frontmatter, slug }) {
  const router = useRouter();

  return (
    <div
      className="divide-y divide-orange-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <Head>
        <title>{frontmatter.title} - Andre de Vries</title>
        <meta property="og:image" content={frontmatter.socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andre347_" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:image" content={frontmatter.socialImage} />
        {/* Open Graph */}
        <meta
          property="og:image"
          content={frontmatter.socialImage}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={frontmatter.title}
          key="ogsitename"
        />
        <meta property="og:title" content={frontmatter.title} key="ogtitle" />
      </Head>
      <div className="hidden sm:block py-4 sm:pt-11 xl:pt-11  w-96">
        {
          <dl className="col-span-4">
            <dt className="sr-only">Published on</dt>
            <dd className="text-base leading-6 font-medium text-gray-500">
              <time dateTime={frontmatter.date}>
                {template.render(new Date(frontmatter.date))}
              </time>{" "}
              &bull; <span>{frontmatter.category}</span> &bull;{" "}
              <BlogViews slug={slug} />
            </dd>
          </dl>
        }
      </div>
      <div className="divide-y divide-orange-200 xl:pb-0 xl:col-span-4 xl:row-span-2">
        <div className="prose max-w-none pt-10 pb-8">
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            linkTarget={"_target='blank'"}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
      <div className="text-base leading-6 font-medium border-t-2 border-orange-100 py-10">
        {/* <Link href={"/posts"}> */}
        <a aria-label={`View all blogs`}>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-600 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
          >
            &larr; Back
          </button>
        </a>
        {/* </Link> */}
        <span className="inline-flex rounded-md shadow-sm"></span>
      </div>
    </div>
  );
}

const blogDirectory = path.join(process.cwd(), "posts");

export async function getStaticPaths() {
  const files = fs.readdirSync(blogDirectory);

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join(blogDirectory, slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);
  const frontmatter = {
    ...data,
  };

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
      slug,
    },
  };
}
