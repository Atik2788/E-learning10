import { createBrowserRouter } from "react-router-dom"
import Blog from "../../components/Blog/Blog"
import Home from "../../components/Home/Home"
import Google from "../../components/Sheared/Google/Google"
import Login from "../../components/Sheared/Login/Login"
import Register from "../../components/Sheared/Register/Register"
import Main from "../../layout/Main"


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/google',
                element: <Google></Google>
            }
        ]
    }
])