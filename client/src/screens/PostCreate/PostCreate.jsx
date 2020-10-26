import React, { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/shared/Layout/Layout'

const PostCreate = () => {
    const [post, setPost] = useState({
            title: '',
            post: '',
            author: ''
    })

    return (
        <Layout>

        </Layout>
    )
}

export default PostCreate