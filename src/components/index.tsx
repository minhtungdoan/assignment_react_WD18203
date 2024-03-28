import React from 'react'
import Header from './Header/Header'
import Home from './pages/HomePage/HomePage'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Page