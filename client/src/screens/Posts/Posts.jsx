import React, { useState, useEffect } from "react";
import "./Posts.css";
import Search from "../../components/Search/Search";
import Post from "../../components/Post/Post";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";

function Posts(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    const newQueriedPosts = allPosts.filter((post) =>
      post.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPosts);
  };

  const handleSubmit = (e) => e.preventDefault();

  const postsJSX = queriedPosts.map((post, index) => (
    <Post
      _id={post._id}
      title={post.title}
      imgURL={post.imgURL}
      content={post.content}
      author={post.author}
      key={index}
    />
  ));
  console.log(postsJSX);
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
        <div className="posts">{postsJSX}</div>
      </div>
    </Layout>
  );
}

export default Posts;
