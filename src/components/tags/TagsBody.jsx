import React from 'react'
import {Link} from "react-router-dom"

const TagsBody = ({tags}) => {



    return (
        <div className="tags__body">
            <div className="tags__body__tags__list content__width">
                {tags.length > 0 && tags.map(({id, name}) =>
                    <Link key={id} className="tag__item">{name}</Link>
                )}
            </div>
        </div>
    )
}

export default TagsBody