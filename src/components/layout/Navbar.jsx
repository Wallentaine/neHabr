import React, {useState} from 'react'
import '../../styles/Navbar.css'
import {Link} from "react-router-dom"
import {AUTH_ROUTE, MAIN_ROUTE} from "../../utils/consts"
import searchIcon from '../../assets/images/icon-search.svg'
import plusIcon from '../../assets/images/icon-pen.svg'
import userIcon from '../../assets/images/icon-user-2.svg'

const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const isAuth = false

    return (
        <div className="Navbar">

            <div className="top__bar">
                <div className="top__bar__sections page__width">
                    <Link to={MAIN_ROUTE} className="logo__section">не Хабр</Link>

                    {isAuth ?
                        <div className="user__section">
                            <div className="user__section__item">
                                <Link>
                                    <img src={searchIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="user__section__item">
                                <Link>
                                    <img src={plusIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="user__section__item">
                                <div className="user__section__item__usrBtn">
                                    <img src={userIcon} alt="" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}/>
                                </div>
                            </div>
                            <div className={dropdownIsOpen? "user__section__dropdown user__section__dropdown__open" : "user__section__dropdown"}>
                                <div className="user__section__dropdown__item">
                                    <div className="user__section__dropdown__item__usrMenu">
                                        <div className="user__section__dropdown__item__usrMenu__accountImg"></div>
                                        <div className="user__section__dropdown__item__usrMenu__userName">@Wallentaine</div>
                                    </div>
                                </div>
                                <div className="user__section__dropdown__item">Hello</div>
                                <div className="user__section__dropdown__item">Hello</div>
                                <div className="user__section__dropdown__item">Hello</div>
                            </div>
                        </div>
                        :
                        <div className="user__section">
                            <div className="user__section__item">
                                <Link to={AUTH_ROUTE + '/login'}>Войти</Link>
                                <span>или</span>
                                <Link to={AUTH_ROUTE + '/registration'}>Зарегистрироваться?</Link>
                            </div>
                        </div>
                    }

                </div>
            </div>

            <div className="bottom__bar">
                <div className="bottom__bar__sections page__width">
                    <div className="menu__section">
                        <Link className="menu__item">Главная</Link>
                        <Link className="menu__item">Магазин</Link>
                        <Link className="menu__item">Статьи</Link>
                        <Link className="menu__item">Авторы</Link>
                        <Link className="menu__item">Посты</Link>
                        <Link className="menu__item">О нас</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar