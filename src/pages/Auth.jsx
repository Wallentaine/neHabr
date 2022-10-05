import React from 'react'
import '../styles/Auth.css'
import AuthModal from "../components/auth/AuthModal";

const Auth = () => {

    const action = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]

    const isLogin = action === 'login'

    return (
        <div className="Auth page__width">
            <AuthModal isLogin={isLogin}/>
        </div>
    )
}

export default Auth