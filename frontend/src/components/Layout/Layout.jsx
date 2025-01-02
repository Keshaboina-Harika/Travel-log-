import React from 'react'
import Footer from '../Footer/Footer'
import Routers from '../../router/Routers'
import Header from '../Header/Header'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Layout