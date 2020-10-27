import React, { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = () => {
    const [post, setPost] = useState({
        title: '',
        imgURL: '',
        content: '',
        author: ''
    })

    const [isCreated, setCreated] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createPost(post)
        setCreated(true)
        const created = await createPost(post)
        setCreated({ created })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost({
            ...post,
            [name]: value
        })
    }

    if (isCreated) {
        return <Redirect to={`/posts`} />
    }
    return (
        <Layout>
            <form className="create-form" onSubmit={handleSumbit}>
                <input
                    className="blogTitle"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="blogBody"
                    rows={10}
                    placeholder='Description'
                    value={post.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <input
                    className="author"
                    placeholder='Author'
                    value={post.author}
                    name='author'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default PostCreate