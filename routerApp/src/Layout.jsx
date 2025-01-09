import React from 'react'


import Header from './components/Header/Header'
import Footers from './components/Footer/Footers'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footers/>
    </>
  )
}

export default Layout