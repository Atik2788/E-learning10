import { createBrowserRouter } from "react-router-dom"
import About from "../../components/About/About"
import Blog from "../../components/Blog/Blog"
import CartDetails from "../../components/CartDetails/CartDetails"
import CheckOut from "../../components/CheckOut/CheckOut"
import Courses from "../../components/Courses/Courses"
import Faq from "../../components/Faq/Faq"
import Home from "../../components/Home/Home"
import NotFound from "../../components/NotFound/NotFound"
import Login from "../../components/Sheared/Login/Login"
import Register from "../../components/Sheared/Register/Register"
import Main from "../../layout/Main"
import PrivateRouter from "../../PrivateRouter/PrivateRouter"


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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/cartdetails/:id',
                element: <CartDetails></CartDetails>,
                loader:({params}) =>
                    fetch(`https://elearn-server-atik2788.vercel.app/courses-details/${params.id}`)  
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader:({params}) =>
                    fetch(`https://elearn-server-atik2788.vercel.app/courses-details/${params.id}`)
            }
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

])