// import React from 'react'
import Hero from './Hero'
// import Navbar from '../Navbar'
import AfterHero from './AfterHero'
// import Footer from '../Footer'
import Banner from './Banner'
import { LayoutGridDemo } from './Gallery'

const RunLayout = () => {
  return (
    <>
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <AfterHero></AfterHero>
        <Banner></Banner>
        <LayoutGridDemo></LayoutGridDemo>
        {/* <Footer></Footer> */}
    </>
  )
}

export default RunLayout