import React, {useContext} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {authorizedRoutes, publicRoutes, unauthorizedRoutes} from "../router"
import {ERROR_ROUTE} from "../utils/consts"
import {observer} from "mobx-react-lite"
import {Context} from "../index"

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {!user.isAuth && unauthorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {user.isAuth && authorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Navigate to={ERROR_ROUTE}/>}/>
        </Routes>
    )
})

export default AppRouter