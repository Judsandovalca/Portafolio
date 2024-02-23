import React from "react";
import { useEffect } from "react"
import useLocation from "react-dom"
//import {useLocation} from "react-router-dom" 
const PageView = () => {
  const location = useLocation();
  useEffect= (()=> {
   window.dataLayer.push(
    {
        event: "page_view"
    }
   )
  },[location])
return null;
}
export  default PageView;