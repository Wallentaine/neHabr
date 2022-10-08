import React from 'react'
import PostItem from "./PostItem"
import NewsItem from "../news/NewsItem";

const PostsList = () => {
    return (
        <div className="posts__list">
            <PostItem/>
            <NewsItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}

export default PostsList