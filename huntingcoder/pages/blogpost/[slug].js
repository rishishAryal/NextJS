import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const BlogPost = () => {
  const [blog, setBlog] = useState([]);
  // Destructuring slug from router query
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log(slug);
        const response = await fetch(
          `http://192.168.18.12:3000/api/getblog?slug=${slug}`
        );
        const data = await response.json();
        console.log(data);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [router.isReady]); 

  return (
    <div className={styles.slug}>
      <h1>Blog Post</h1>
      <h1>{blog.title}</h1>

      <p className={styles.blogContent}>
        {blog.content} <br></br>
        <b style={{marginTop:"10px",display:"inline-block"}}>By {blog.author}</b>
      </p>
    </div>
  );
};

export default BlogPost;
