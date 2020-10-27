import React, { useState, useEffect } from 'react';
import './PostDetail.css';
import Layout from '../../components/shared/Layout/Layout';
import { getPost, deletePost } from '../../services/posts'
import { useParams, Link } from 'react-router-dom'

const PostDetail = (props) => {

  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <Link to="/" className="takeMeHome">Click to return</Link>
  }

  const handleDelete = async (id) => {
    await deletePost(post._id)
    setLoaded(!isLoaded)
  };

  return (
    <Layout>
      <div className="post-details">
        <img className="post-detail-images" src={post.imgURL} alt={post.name} />
        <div className="details">
          <div className="titles">{post.title}</div>
          <div className="contents">{post.content}</div>
          <div className="authors">By: {post.author}</div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail