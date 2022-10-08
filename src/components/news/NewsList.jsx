import React from 'react'
import NewsItem from "./NewsItem"

const NewsList = () => {
    return (
        <div className="news__list">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    )
}

export default NewsList