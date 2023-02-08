import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/header";
import Context from "./src/context";
import Restro from "./src/restro";
import Footer from "./src/Footer";
import Contact from "./src/Contact";
import About from "./src/about";
import Errorpage from "./src/errorpage.js"
import Restromenu from "./src/Restromenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { store } from "./src/store";
import {Provider} from "react-redux"
import Cart from "./src/cart";

const App=()=>{
    return(
        <Provider store={store}>
        <Context>
             <Header/>
             <Outlet/>
             <Footer/>
        </Context>
       </Provider>
    )
}

const appRouter =createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            errorElement:<Errorpage/>,
            children:[
                {
                    path:"/",
                    element: <Restro/>
                }
                ,{
                    path:"about"
                    ,element:<About/>
                }
                ,{
                    path:"contact"
                    ,element:<Contact/>
                } ,{
                    path:"cart"
                    ,element:<Cart/>
                }
            ]

        },
                {
                    path:"/:resid",
                    element:<Provider store={store}><Context><Restromenu/></Context></Provider>
                }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)