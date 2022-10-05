import React from 'react'
import {Link} from "react-router-dom"

const TagsBody = ({tags}) => {


    return (
        <div className="tags__body content__width">
            {tags.length > 0 && tags.map(({id, name}) =>
                <Link key={id} className="tag__item">{name}</Link>
            )}
        </div>
    )
}

export default TagsBody