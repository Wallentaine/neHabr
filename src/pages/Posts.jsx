import '../styles/Posts.css'
import React from 'react'
import PostsList from "../components/post/PostsList"

const Posts = () => {
    return (
        <div className="Posts page__width">
            <PostsList/>
        </div>
    )
}

export default Posts