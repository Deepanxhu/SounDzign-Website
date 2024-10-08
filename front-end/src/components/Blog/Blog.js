import React, { useEffect, useState } from "react";
import "./Blog.css";
import { urlFor, client } from "../../client";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "posts"][0...3]';
    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>

        <div className="content-container">
          {posts.map((post)=>(
          <div className="post">
            <div className="tag">{post.label}</div>
            <a href="#">
              <img src={urlFor(post.thumbnail)} alt="" />
              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </a>
          </div>
          ))}
        </div>

        <div className="btn-container">
          <a href="" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
