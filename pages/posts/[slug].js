import React from "react";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown/with-html";
import matter from "gray-matter";

export default function Blog({ content, frontmatter }) {
  return (
    <div className="py-4 mb-4 mr-8 ml-8">
      <ReactMarkdown escapeHtml={false} source={content} />
    </div>
  );
}

const blogDirectory = path.join(process.cwd(), "posts");
console.log(blogDirectory);

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
