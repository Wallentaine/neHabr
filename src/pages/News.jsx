import React from 'react'
import '../styles/News.css'
import NewsHead from "../components/news/NewsHead"
import NewsList from "../components/news/NewsList"

const News = () => {
    return (
        <div className="News page__width">
            <NewsHead/>
            <NewsList/>
        </div>
    )
}

export default News