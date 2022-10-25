import { createBrowserRouter } from "react-router-dom"
import About from "../../components/About/About"
import Blog from "../../components/Blog/Blog"
import Faq from "../../components/Faq/Faq"
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
                path: '/',
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
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])