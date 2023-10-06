import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs/promises";

const BlogPost = (props) => {
  const [blog, setBlog] = useState(props.data);
  // Destructuring slug from router query
  // setBlog(props.data);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.slug}>
      <h1>Blog Post</h1>
      <h1>{blog.title}</h1>

      <main className={styles.blogContent}>
        {blog && (
          <div
            dangerouslySetInnerHTML={createMarkup(blog.content)}
            style={{ width: "700px", margin: "auto" }}
          ></div>
        )}{" "}
        <br></br>
       
        
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "Introduction-To-Javascript" } },
      { params: { slug: "Mastering-Java:-A-Starter's-Guide" } },
      { params: { slug: "Python-for-Beginners" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const data = await fs.readFile(`blogData/${slug}.json`, "utf-8");
  return {
    props: {
      data: JSON.parse(data),
    },
  };
}

export default BlogPost;
