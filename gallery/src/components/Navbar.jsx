import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import  Home from "../pages/Home";
import  About from "../pages/About";
import  Contact from "../pages/Contact";

const Navbar = () => {
  return (
    <div className='h-full text-white flex'>
      <div className='h-full w-1/2 px-4 text-xl font-bold flex items-center'> Navbar </div>
      <div className='h-full w-1/2 px-4 text-lg font-bold flex items-center justify-end gap-6'>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
