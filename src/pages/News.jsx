import React from 'react'
import '../styles/News.css'
import PostsList from "../components/post/PostsList"

const News = () => {
    return (
        <div className="News page__width">
            <PostsList/>
        </div>
    )
}

export default News