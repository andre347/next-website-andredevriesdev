// @ts-nocheck
const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generateFeed() {
  const feed = new RSS({
    title: "Andre de Vries",
    site_url: "https://andredevries.dev",
    feed_url: "https://andredevries.dev/feed.xml",
  });
  const blogs = await fs.readdir(path.join(__dirname, "..", "posts"));

  await Promise.all(
    blogs.map(async (name) => {
      const blogContent = await fs.readFile(
        path.join(__dirname, "..", "posts", name)
      );
      const frontmatter = matter(blogContent);
      feed.item({
        title: frontmatter.data.title,
        url: "https://andredevries.dev/posts/" + name.replace(/\.md?/, ""),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
      });
    })
  );
  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generateFeed();
