import React, {useState} from 'react'
import SearchInput from "../UI/inputs/SearchInput"
import upArrowIcon from "../../assets/images/icon-arrow-up.svg"
import downArrowIcon from "../../assets/images/icon-arrow-down.svg"
import SelectButton from "../UI/buttons/SelectButton"

const NewsHead = () => {

    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')

    return (
        <div className="news__head">
            <div className="news__head__title">Все новости</div>
            <div className="news__head__search">
                <SearchInput
                    placeholder="Поиск"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="news__head__filter">
                <button className="news__head__filter__menu__button" onClick={() => setFilterIsOpen(!filterIsOpen)}>
                    Все подряд
                    <img src={filterIsOpen ? upArrowIcon : downArrowIcon} alt=""/>
                </button>
                <div className={filterIsOpen ? "news__head__filter__menu" : "news__head__filter__menu__hide"}>
                    <div className="news__head__filter__item">
                        <div className="news__head__filter__item__title">Сначала показывать</div>
                        <div className="news__head__filter__item__body">
                            <SelectButton selected={true}>Все</SelectButton>
                            <SelectButton selected={false}>Новые</SelectButton>
                            <SelectButton selected={false}>Больше просмотров</SelectButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHead