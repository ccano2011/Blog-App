import React from 'react';
import { Link } from 'react-router-dom'

function Posts(props) {
    return (
        <div>
            <Link to="/posts">
                <h1>Hello World</h1>
            </Link>
        </div>
    );
}

export default Posts;