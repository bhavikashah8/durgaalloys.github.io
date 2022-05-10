import React from 'react'
import Header from "../component/Head/Header"

import Home from "../component/Hero/Home"

import Products from "../component/Products/Products"
import WhyUs from "../component/whyus/Whyus"
import Materials from "../component/Materials/Materials"
import Contact from "../component/Contact/Contact"
import Footer from "../component/Footer/Footer"
const Main = () => {
  return (
    <div>
        {/* <Header /> */}
    <Home />
    <Products />
    <Materials />
    <WhyUs />
    {/* <Contact />
    <Footer /> */}
    </div>
  )
}

export default Main