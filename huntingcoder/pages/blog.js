import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  data = data.filter((item) => item !== ".DS_Store");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 8; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
