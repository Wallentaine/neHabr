import React, {useContext, useState} from 'react'
import '../../styles/Navbar.css'
import {Link} from "react-router-dom"
import {
    AUTH_ROUTE,
    COMPANIES_ROUTE,
    CREATE_ROUTE,
    CREATORS_ROUTE,
    MAIN_ROUTE, NEWS_ROUTE,
    SEARCH_ROUTE,
    TAGS_ROUTE, USER_POSTS_ROUTE, USER_ROUTE
} from "../../utils/consts"
import searchIcon from '../../assets/images/icon-search.svg'
import plusIcon from '../../assets/images/icon-pen.svg'
import userIcon from '../../assets/images/icon-user-2.svg'
import {Context} from "../../index"
import {observer} from "mobx-react-lite"

const Navbar = observer(() => {

    const {user} = useContext(Context)

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const logout = () => {
        user.setIsAuth(false)
    }

    return (
        <div className="Navbar">

            <div className="top__bar">
                <div className="top__bar__sections page__width">
                    <Link to={MAIN_ROUTE} className="logo__section">не Хабр</Link>

                    {user.isAuth ?
                        <div className="user__section">
                            <div className="user__section__item">
                                <Link to={SEARCH_ROUTE}>
                                    <img src={searchIcon} alt=""/>
                                </Link>
                            </div>
                            <div className="user__section__item">
                                <Link to={CREATE_ROUTE}>
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
                                        <Link to={USER_ROUTE} className="user__section__dropdown__item__usrMenu__userName">@Wallentaine</Link>
                                    </div>
                                </div>
                                <Link to={USER_POSTS_ROUTE} className="user__section__dropdown__item">Мои статьи</Link>
                                <Link className="user__section__dropdown__item">Мои комментарии</Link>
                                <Link className="user__section__dropdown__item">Админ панель</Link>
                                <div className="user__section__dropdown__item">
                                    <button onClick={logout}>Выйти</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="user__section">
                            <div className="user__section__item">
                                <Link to={SEARCH_ROUTE}>
                                    <img src={searchIcon} alt=""/>
                                </Link>
                            </div>
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
                        <Link to={NEWS_ROUTE} className="menu__item">Новости</Link>
                        <Link to={CREATORS_ROUTE} className="menu__item">Авторы</Link>
                        <Link to={COMPANIES_ROUTE} className="menu__item">Компании</Link>
                        <Link to={TAGS_ROUTE} className="menu__item">Тэги</Link>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Navbar