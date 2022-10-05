import {
    AUTH_ROUTE,
    ERROR_ROUTE,
    MAIN_ROUTE
} from "../utils/consts"
import Error from "../pages/Error"
import Auth from "../pages/Auth"
import Posts from "../pages/Posts"


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Posts
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]

export const unauthorizedRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]

export const authorizedRoutes = [

]