// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs/promises"; // Note the /promises here
import path from "path";

export default async function handler(req, res) {
  try {
    const filenames = await fs.readdir("blogData", "utf-8");
    const filteredFilenames = filenames.filter(
      (filename) => filename !== ".DS_Store"
    );

    const blogPromises = filteredFilenames.map(async (filename) => {
      const data = await fs.readFile(path.join("blogData", filename), "utf-8");
      return JSON.parse(data);
    });

    const allBlogs = (await Promise.all(blogPromises));
    console.log(allBlogs);
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error reading blog data:", error);
    res.status(500).json({ error: "Failed to read blog data" });
  }
}
