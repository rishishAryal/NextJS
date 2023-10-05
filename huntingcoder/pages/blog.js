import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.data);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
          <h2 style={{ fontSize: "38px" }}>Popular Blogs</h2>
          <div style={{ textAlign: "justify" }}>
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
                  {blog.content.substr(0, 100)} ...
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
export async function getServerSideProps(context) {
  try {
    let response = await fetch("http://localhost:3000/api/blogs");
    let data = await response.json();
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
export default Blog;
