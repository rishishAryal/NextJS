import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs/promises";

const Blog = (props) => {
  console.log(props.data);
  const [blogs, setBlogs] = useState(props.data.filteredFilenames);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
          <h2 style={{ fontSize: "38px" }}>Popular Blogs</h2>
          <div>
            {blogs.map((blog, index) => (
              <div key={index} className="blogItem">
                <p
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "2rem",
                  }}
                >
                  {blog.title}
                </p>

                <p>
                  {blog.metadesc.substr(0, 100)} ...
                  <Link
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                    href={`/blogpost/${blog.slug}`}
                  >
                    read more
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export async function getStaticProps(context) {
  try {
    const filenames = await fs.readdir("blogData", "utf-8");
    const filteredFilenames = filenames.filter(
      (filename) => filename !== ".DS_Store"
    );
    for (let i = 0; i < filteredFilenames.length; i++) {
      const data = await fs.readFile(`blogData/${filteredFilenames[i]}`, "utf-8");
      filteredFilenames[i] = JSON.parse(data);
    }
    return {
      props: {
        data: {filteredFilenames},
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Blog;
