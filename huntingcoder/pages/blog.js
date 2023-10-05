import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
// step1 : collect all the files from blogData folder
// step2 : Itraate over the files and create a page for each file

const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
          <h2 style={{ fontSize: "38px" }}>Popular Blogs</h2>

          <div className="blogItem">
            <Link href="/blogpost/learn-javascript"> <h3>How to learn javascript</h3></Link>
           
            <p>js is goood language</p>
          </div>

          <div className="blogItem">
            <h3>How to learn javascript</h3>
            <p>js is goood language</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
