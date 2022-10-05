import {
    AUTH_ROUTE,
    COMPANIES_ROUTE,
    CREATE_ROUTE,
    CREATORS_ROUTE,
    ERROR_ROUTE,
    MAIN_ROUTE,
    NEWS_ROUTE,
    SEARCH_ROUTE,
    TAGS_ROUTE, USER_POSTS_ROUTE,
    USER_ROUTE
} from "../utils/consts"
import Error from "../pages/Error"
import Auth from "../pages/Auth"
import Posts from "../pages/Posts"
import Search from "../pages/Search"
import Create from "../pages/Create"
import Tags from "../pages/Tags"
import Companies from "../pages/Companies"
import News from "../pages/News"
import Creators from "../pages/Creators"
import User from "../pages/User"
import UserPosts from "../pages/UserPosts";


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Posts
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: CREATORS_ROUTE,
        Component: Creators
    },
    {
        path: COMPANIES_ROUTE,
        Component: Companies
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: TAGS_ROUTE,
        Component: Tags
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]

export const unauthorizedRoutes = [
    {
        path: AUTH_ROUTE + '/login',
        Component: Auth
    },
    {
        path: AUTH_ROUTE + '/registration',
        Component: Auth
    },
]

export const authorizedRoutes = [
    {
        path: CREATE_ROUTE,
        Component: Create
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: USER_POSTS_ROUTE,
        Component: UserPosts
    },
]