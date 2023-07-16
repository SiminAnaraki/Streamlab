import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/homePage";
import MoviesPage from "../pages/moviesPage";
import TVShows from "../pages/TVshows";
import SingleMoviePage from "../pages/singleMoviePage";
import ContactUs from "../pages/contactus";
import LogIn from "../pages/logIn";
import Register from "../pages/register";
import RecoverPassword from "../pages/recoverPassword";
import SingleGenrePage from "../pages/singleGenrePage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
        path: "/Movies",
        element:<MoviesPage/>,
    },
    {
        path: "/Movies/:id",
        element:<SingleMoviePage/>
    },
    {
        path: "/TV-Shows",
        element:<TVShows/>,
    },
    {
        path: "/genre/:genreid",
        element:<SingleGenrePage/>,
    },
    // {
    //     path:"TV-Show/:id",
    //     element:<TVShow/>,
    // },
     {
         path:"/contact",
         element:<ContactUs/>,
     },
    {
          path:"/log-in",
          element:<LogIn/>,
   },
   {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/recover-password",
        element:<RecoverPassword/>,
    },
   // {
    //     path:"*",
    //     element:<NotFound/>,
    // },
  ]);
export default function Router(){
    return(
        <RouterProvider router={router}/>
        
        
    )
}