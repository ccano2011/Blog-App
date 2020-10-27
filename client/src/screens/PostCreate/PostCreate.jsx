import React, { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/shared/Layout/Layout'

const PostCreate = () => {
    const [post, setPost] = useState({
            title: '',
            imgURL: '',
            content: '',
            author: ''
    })

    return (
        <Layout>

        </Layout>
    )
}

export default PostCreate