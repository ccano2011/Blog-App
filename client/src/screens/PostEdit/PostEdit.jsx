import React, { useState, useEffect } from 'react';
import './PostEdit.css';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getPost, updatePost } from '../../services/posts';

const PostEdit = (props) => {
    const [post, setPost] = useState({
        title: '',
        imgURL: '',
        content: '',
        author: ''
    })

    const [isUpdated, setUpdated] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            setPost(post)
        }
        fetchPost()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let { id } = props.match.params
        const updated = await updatePost(id, post)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/posts/${props.match.params.id}`} />
    }

    return (
        <Layout name={props.name}>
            <div className='post-edit'>
                <div className='img-area'>
                    <img className='img-edit' src={post.imgURL} alt={post.title} />
                    <form onSubmit={handleSubmit}>
                        <input
                            className='edit-img-link'
                            placeholder='Paste Image link Here'
                            value={post.imgURL}
                            name='imgURL'
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <form className="edit-blog" onSubmit={handleSubmit}>
                    <input
                        className='input-title'
                        placeholder='title'
                        value={post.title}
                        name='title'
                        onChange={handleChange}
                    />
                    <input
                        className='input-author'
                        placeholder='author'
                        value={post.author}
                        name='author'
                        onChange={handleChange}
                    />
                    <textarea
                        className="blog-area"
                        rows={15}
                        cols={88}
                        placeholder='Blog'
                        value={post.content}
                        name='blog'
                        onChange={handleChange}
                    />
                    <button type='submit' className='save-button'>Save Edit</button>
                </form>
            </div>
        </Layout>
    )
}

export default PostEdit
