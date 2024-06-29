// import React from 'react'
// import Navbar from '../Navbar'
import Hero from './Hero'
import AfterHero from './AfterHero'
import Details from './Details'
import Perfume from './Perfume'
import { InfiniteMovingCardsDemo } from './Feedback'
import Blogs from './Blogs'
// import Footer from '../Footer'

const PerfumeOutlate = () => {
  return (
    <>
          {/* <Navbar></Navbar> */}
          <Hero></Hero>
          <AfterHero></AfterHero>
          <Details></Details>
          <Perfume></Perfume>
          <InfiniteMovingCardsDemo>
            {/* || Feedback */}
          </InfiniteMovingCardsDemo> 
          <Blogs></Blogs>
          {/* <Footer></Footer> */}
    </>
  )
}

export default PerfumeOutlate