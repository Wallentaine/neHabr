import React, {useState} from 'react'
import '../styles/Tags.css'
import TagsHeader from "../components/tags/TagsHeader"
import TagsBody from "../components/tags/TagsBody"



const mockTags = [
    {
        id: 0,
        name: "Programming",
    },
    {
        id: 1,
        name: "Программирование",
    },
    {
        id: 2,
        name: "Моделирование",
    },
    {
        id: 3,
        name: "Наука",
    },
    {
        id: 4,
        name: "Исследование",
    },
    {
        id: 5,
        name: "Программист",
    },
    {
        id: 6,
        name: "IT",
    },
    {
        id: 7,
        name: "Работодатели",
    },
    {
        id: 8,
        name: "Информационные системы",
    },
    {
        id: 9,
        name: "Node.js",
    },
]

const Tags = () => {

    const [tags, setTags] = useState([])
    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState('')

    const showSearchClick = () => {
        setTags([])
        setShowSearch(!showSearch)
        setSearchText('')
    }

    const allTagsClick = () => {
        setSearchText('')
        setShowSearch(false)
        setTags(mockTags)
    }


    return (
        <div className="Tags page__width">
            <TagsHeader
                showSearchClick={showSearchClick}
                allTagsClick={allTagsClick}
                showSearch={showSearch}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <TagsBody
                tags={tags}
            />
        </div>
    )
}

export default Tags