import React, { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = () => {
    const [post, setPost] = useState({
        title: '',
<<<<<<< .merge_file_YmbDre
        imgURL: '',
        content: '',
=======
        imageURL: '',
        post: '',
>>>>>>> .merge_file_6Om2BH
        author: ''
    })

    const [isCreated, setCreated] = useState(false)

    const handleSumbit = async (e) => {
        e.preventDefault()
<<<<<<< .merge_file_YmbDre
        const response = await createPost(post)
        setCreated(true)
=======
        const created = await createPost(post)
        setCreated({ created })
>>>>>>> .merge_file_6Om2BH
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
<<<<<<< .merge_file_YmbDre
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
=======

>>>>>>> .merge_file_6Om2BH
        </Layout>
    )
}

export default PostCreate