import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "posts");

export function getSortedBlogsData() {
  // get the file names
  const fileNames = fs.readdirSync(blogDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    //  regex to remove .md file extension to get the id
    const id = fileName.replace(/\.md$/, "");

    // read the whole markdown file as a string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
