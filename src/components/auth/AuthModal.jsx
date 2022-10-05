import React from 'react'
import DefaultInput from "../UI/inputs/DefaultInput"
import DefaultButton from "../UI/buttons/DefaultButton"
import {Link} from "react-router-dom"
import {AUTH_ROUTE} from "../../utils/consts"

const AuthModal = ({isLogin}) => {



    return (
        <div className="auth__modal">
            <div className="auth__modal__title">{isLogin ? 'Авторизация' : 'Регистрация'}</div>
            <div className="auth__modal__form">
                <div className="auth__modal__form__input">
                    <DefaultInput type="text" placeholder="Введите e-mail"/>
                </div>
                <div className="auth__modal__form__input">
                    <DefaultInput type="password" placeholder="Введите пароль"/>
                </div>
                <div className="auth__modal__form__button">
                    <DefaultButton>{isLogin ? 'Войти' : 'Зарегистрироваться'}</DefaultButton>
                </div>
                <div className="auth__modal__form__otherActions">
                    {isLogin ?
                        <div className="auth__modal__form__haveAccount">
                            <div className="auth__modal__form__otherActions__title">Нет аккаунта?</div>
                            <Link to={AUTH_ROUTE + '/registration'}>Зарегистрироваться</Link>
                        </div>
                        :
                        <div className="auth__modal__form__haveAccount">
                            <div className="auth__modal__form__otherActions__title">Есть аккаунт?</div>
                            <Link to={AUTH_ROUTE + '/login'}>Войти</Link>
                        </div>
                    }
                    <div className="auth__modal__form__forgotPassword">
                        <Link>Восстановить пароль?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal