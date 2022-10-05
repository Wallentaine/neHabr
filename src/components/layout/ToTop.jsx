import React, {useEffect, useState} from 'react'
import '../../styles/ToTop.css'
import upIcon from '../../assets/images/icon-up.svg'

const ToTop = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={scroll >= 100 ? "ToTop" : "ToTop ToTop__hide"} onClick={toTop}>
            <img src={upIcon} alt=""/>
        </div>
    )
}

export default ToTop