import React, { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = () => {
    const [post, setPost] = useState({
        title: '',
        imageURL: '',
        post: '',
        author: ''
    })

    const [isCreated, setCreated] = useState(false)

    const handleSumbit = async (e) => {
        e.preventDefault()
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

        </Layout>
    )
}

export default PostCreate