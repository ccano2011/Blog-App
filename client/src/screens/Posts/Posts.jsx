import React, { useState, useEffect } from 'react';
import Search from "../../components/Search/Search";
import Layout from '../../components/shared/Layout/Layout';
import PostCards from "../../components/PostCards/PostCards";
import Post from "../../components/Post/Post";
import "./Posts.css";
import { getPosts } from '../../services/posts';

function Posts(props) {

  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  const handleSearch = event => {
    const newQueriedPosts = allPosts.filter(post => post.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPosts(newQueriedPosts)
  }

  const handleSubmit = event => event.preventDefault()

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
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <PostCards />
      </div>
      <div>
        <div className="posts">{postsJSX}</div>
      </div>
    </Layout>
  );
}

export default Posts;
