import Layout from "./components/Layout/Layout";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useContext  } from "react";
import { themeContext } from "./Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";



export default function App() {
  const theme = useContext(themeContext);
  let routers =createBrowserRouter([{path:'',element:<Layout/> , children:[
    {index:true,element:<Intro/>},
    {path:'skills',element:<Skills/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  ]}
])
;
  return (

      
      <RouterProvider router={routers} ></RouterProvider>

 )
}

