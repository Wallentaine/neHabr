import React from 'react'
import '../../styles/Footer.css'
import {Link} from "react-router-dom"

const Footer = () => {

    return (
        <div className="Footer">
            <div className="footer__top">
                <div className="footer__top__sections page__width">
                    <div className="footer__top__section__item">
                        <div className="footer__top__section__item__head">
                            Ваш аккаунт
                        </div>
                        <div className="footer__top__section__item__body">
                            <div className="footer__top__section__item__body__link"><Link>Профиль</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Настройки</Link></div>
                        </div>
                    </div>
                    <div className="footer__top__section__item">
                        <div className="footer__top__section__item__head">
                            Разделы
                        </div>
                        <div className="footer__top__section__item__body">
                            <div className="footer__top__section__item__body__link"><Link>Публикации</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Новости</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Компании</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Авторы</Link></div>
                        </div>
                    </div>
                    <div className="footer__top__section__item">
                        <div className="footer__top__section__item__head">
                            Информация
                        </div>
                        <div className="footer__top__section__item__body">
                            <div className="footer__top__section__item__body__link"><Link>Устройство сайта</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Для авторов</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Для компаний</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Документы</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Соглашения</Link></div>
                        </div>
                    </div>
                    <div className="footer__top__section__item">
                        <div className="footer__top__section__item__head">
                            Услуги
                        </div>
                        <div className="footer__top__section__item__body">
                            <div className="footer__top__section__item__body__link"><Link>Корпоративный блог</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Медийная реклама</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Образовательная программа</Link></div>
                            <div className="footer__top__section__item__body__link"><Link>Стартапы</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__sections page__width">
                    <div className="footer__bottom__section__item">© 2022, neHabr</div>
                    <div className="footer__bottom__section__item">Ссылки</div>
                </div>
            </div>
        </div>
    )
}

export default Footer