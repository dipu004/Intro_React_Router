import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id , title} = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
           navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Deatils of: {id}</button>
        </div>
    );
};

export default Post;