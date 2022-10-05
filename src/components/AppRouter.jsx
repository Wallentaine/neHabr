import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {authorizedRoutes, publicRoutes, unauthorizedRoutes} from "../router"
import {ERROR_ROUTE} from "../utils/consts"

const AppRouter = () => {

    const isAuth = false

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {!isAuth && unauthorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {isAuth && authorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Navigate to={ERROR_ROUTE}/>}/>
        </Routes>
    )
}

export default AppRouter