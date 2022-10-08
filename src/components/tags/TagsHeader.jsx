import React from 'react'
import SearchInput from "../UI/inputs/SearchInput"

const TagsHeader = ({showSearchClick, allTagsClick, showSearch, searchText, setSearchText}) => {


    return (
        <>
            <div className="tags__header">
                <div className="tags__header__title">Все тэги</div>
                <div className="tags__header__empty__space"></div>
                <div className="tags__header__items content__width">
                    <button className="tags__header__item" onClick={showSearchClick}>Поиск</button>
                    <button
                        className="tags__header__item"
                        onClick={allTagsClick}
                    >Все тэги</button>
                </div>
            </div>
            <div className={showSearch ? "tags__header__search__menu" : "tags__header__search__menu tags__header__search__menu__hide"}>
                <SearchInput
                    placeholder="Поиск по тэгам..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
        </>
    )
}

export default TagsHeader