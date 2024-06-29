// import React from 'react'
import Hero from './Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import Marque from './Marque'

// import Navbar from '../Navbar'

const AthleisureLayout = () => {
  return (
    <>
        {/* <Navbar></Navbar> */}
        <ParallaxProvider>
            {/* <Navbar></Navbar> */}
            <Hero></Hero>
        </ParallaxProvider>
        <Marque></Marque>
        {/* <Footer></Footer> */}
    </>
  )
}

export default AthleisureLayout