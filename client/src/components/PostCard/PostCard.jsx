import React from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    return (
      <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
            <h3 className='title'>{props.title}</h3>
          <img className="post-card-image" src={props.imgURL} alt={props.title} width="300" height="300"/>
          <h5 className='author'>By: {props.author}</h5>
      </Link>
  </div>
    )
}

export default PostCard