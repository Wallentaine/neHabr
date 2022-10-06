import React, {useState} from 'react'
import SearchInput from "../UI/inputs/SearchInput"
import SelectButton from "../UI/buttons/SelectButton"
import upArrowIcon from '../../assets/images/icon-arrow-up.svg'
import downArrowIcon from '../../assets/images/icon-arrow-down.svg'


const CompaniesHead = () => {

    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')


    return (
        <div className="companies__head">
            <div className="companies__head__title">Все компании</div>
            <div className="companies__head__search">
                <SearchInput
                    placeholder="Поиск"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="companies__head__filter">
                <button className="companies__head__filter__menu__button" onClick={() => setFilterIsOpen(!filterIsOpen)}>
                    Все подряд
                    <img src={filterIsOpen ? upArrowIcon : downArrowIcon} alt=""/>
                </button>
                <div className={filterIsOpen ? "companies__head__filter__menu" : "companies__head__filter__menu__hide"}>
                    <div className="companies__head__filter__item">
                        <div className="companies__head__filter__item__title">Сначала показывать</div>
                        <div className="companies__head__filter__item__body">
                            <SelectButton selected={true}>Все</SelectButton>
                            <SelectButton selected={false}>Новые</SelectButton>
                            <SelectButton selected={false}>Лучшие</SelectButton>
                            <SelectButton selected={false}>Больше просмотров</SelectButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompaniesHead