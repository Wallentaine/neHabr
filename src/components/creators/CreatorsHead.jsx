import React, {useState} from 'react'
import SearchInput from "../UI/inputs/SearchInput"


const CreatorsHead = () => {

    const [searchText, setSearchText] = useState('')

    return (
        <div className="creators__head">
            <div className="creators__head__title">Все Авторы</div>
            <div className="creators__head__emptySpace"></div>
            <div className="creators__head__search">
                <SearchInput
                    placeholder="Поиск"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
        </div>
    )
}

export default CreatorsHead