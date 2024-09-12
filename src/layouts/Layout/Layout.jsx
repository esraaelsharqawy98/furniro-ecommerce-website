import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Features from '../Features/Features'

const Layout = () => {
  return (
      <>
        <Header/>
        <main>
          <Outlet/>
          <Features/>
        </main>
        <Footer />
      </>
    
  )
}

export default Layout