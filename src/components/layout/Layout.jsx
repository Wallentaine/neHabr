import React, {useEffect, useState} from 'react'
import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"
import ToTop from "./ToTop"

const Layout = () => {




    return (
        <>
            <Navbar/>

            <ToTop/>

            <Content/>
            <Footer/>
        </>
    )
}

export default Layout