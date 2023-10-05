import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const BlogPost = (props) => {
  const [blog, setBlog] = useState(props.data);
  // Destructuring slug from router query
  // setBlog(props.data);
  return (
    <div className={styles.slug}>
      <h1>Blog Post</h1>
      <h1>{blog.title}</h1>

      <p className={styles.blogContent}>
        {blog.content} <br></br>
        <b style={{ marginTop: "10px", display: "inline-block" }}>
          By {blog.author}
        </b>
      </p>
    </div>
  );
};

//server side rendering

export async function getServerSideProps(context) {
  try {
    const { slug } = context.query;
    const response = await fetch(
      `http://localhost:3000/api/getblog?slug=${slug}`
    );
    const data = await response.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        data: "error in fetching data",
      },
    };
  }
}

export default BlogPost;
