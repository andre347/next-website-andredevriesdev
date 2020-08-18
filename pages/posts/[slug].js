import React from "react";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown/with-html";
import matter from "gray-matter";

export default function Blog({ content, frontmatter }) {
  console.log(frontmatter);
  return (
    <div
      className="divide-y xl:divide-y-0 divide-orange-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <div className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-orange-200">
        I can put more content here! And I need to remove the title from the
        markdown files
      </div>
      <div className="divide-y divide-orange-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <div className="prose max-w-none pt-10 pb-8">
          <ReactMarkdown escapeHtml={false} source={content} />
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
