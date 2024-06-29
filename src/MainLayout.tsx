// import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from "./components/CustomCursor"

const MainLayout = () => {
  return (
    <>
        <div className=" max-md:hidden">
            <CustomCursor></CustomCursor>
        </div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default MainLayout