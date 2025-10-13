import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

import Error from "../Pages/error";
import { Component } from "react";
import Home from "../Home/Home";
import Doctordetails from "../Doctor/Doctordetails";
import Mybooking from "../Pages/Mybooking";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Emargency from "../Pages/Emargency";





export  const router = createBrowserRouter([
  
  {
    
    path: "/",
    Component: Root,
    errorElement:<Error></Error> ,
    
    
    children: [
     {
      index: true,
      path: "/",
      loader:()=> fetch("doctordata.json") ,
      Component: Home,

     },
     {
      path: "/doctordetails/:id",
      loader:()=> fetch("doctordata.json") ,
      Component: Doctordetails,
     },
     {
      path: "/my-booking",
      loader:()=> fetch("doctordata.json") ,
      Component: Mybooking,
     },
     {
      path: "/blog",
      Component: Blog,
     },
     {
      path:"/contact",
      Component: Contact,
     },
     {
      path: "/emargency",
      Component: Emargency,
     }

      
    ]
  },
]);