import { createBrowserRouter } from "react-router-dom"
import About from "../../components/About/About"
import Blog from "../../components/Blog/Blog"
import CartDetails from "../../components/CartDetails/CartDetails"
import Faq from "../../components/Faq/Faq"
import Home from "../../components/Home/Home"
import NotFound from "../../components/NotFound/NotFound"
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/cart-details/:id',
                element: <CartDetails></CartDetails>,
                loader:(``)
            }
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

])