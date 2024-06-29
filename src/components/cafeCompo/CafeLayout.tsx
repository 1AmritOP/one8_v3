import Hero from './Hero'
import TodaySpecial from './TodaySpecial'
import Image from './Image'

import { StickyScrollRevealDemo } from './Resturant'
// import Testimonials from './testimonials'
import Image2nd from './Image2nd'
import { InfiniteMovingCardsDemo } from '../perfumeComponents/Feedback'

const CafeLayout = () => {
  return (
    <>
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <TodaySpecial></TodaySpecial>
        <Image></Image>
        <StickyScrollRevealDemo></StickyScrollRevealDemo>
        <Image2nd></Image2nd>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        {/* <Testimonials></Testimonials> */}
        {/* <Footer></Footer> */}
    </>
  )
}

export default CafeLayout