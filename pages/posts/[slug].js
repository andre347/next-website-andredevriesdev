import React from "react";
import Head from "next/head";

import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown/with-html";
import matter from "gray-matter";

// import Image from nextjs and then use the renderer to import the image in the react markdown
// https://jacobwicks.github.io/2020/06/19/rendering-markdown-and-resizing-images-with-react-markdown.html
import Image from "next/image";

export default function Blog({ content, frontmatter }) {
  const renderers = {
    image: ({ alt, src, title }) => (
      <div
        className="hello"
        style={{ position: "relative", width: "auto", height: "500px" }}
      >
        <Image
          alt={alt}
          src={src}
          title={title}
          layout="fill"
          objectFit="none"
          quality={100}
        />
      </div>
    ),
  };

  return (
    <div
      className="divide-y xl:divide-y-0 divide-orange-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
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
      {/* <div className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-orange-200">
        I can put more content here! And I need to remove the title from the
        markdown files
      </div> */}
      <div className="divide-y divide-orange-200 xl:pb-0 xl:col-span-4 xl:row-span-2">
        <div className="prose max-w-none pt-10 pb-8">
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            linkTarget={"_target='blank'"}
            renderers={renderers}
          />
        </div>
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
    },
  };
}
