import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Home/Catagory/Category";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";



const router = createBrowserRouter([

{
  path:'/',
  element:<LoginLayout></LoginLayout>,
  children:[
    {
      path:'/',
      element:<Navigate to='/category/0'></Navigate>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/terms',
      element:<Terms></Terms>
    }
  ]
},

    {
      path: "/category",
      element: <Main></Main>,
      children:[
    
        {
          path: ":id",
    element: <Category></Category> ,
    loader: ({params})=> fetch(`https://the-daily-dragon-news-react-server-dqrov8ohz.vercel.app/categories/${params.id}`)
      }
      ]
    },


{
  path: "/news",
  element: <NewsLayout></NewsLayout>,
  children:[
    {
        path: ":id",
  element:<PrivateRoute><News></News></PrivateRoute>,
  loader:({params})=>fetch(`https://the-daily-dragon-news-react-server-dqrov8ohz.vercel.app/news/${params.id}`)
    },
  ]
}

  ]);
  export default router;