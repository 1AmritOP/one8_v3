// import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeroImage from "../../assets/CafeImage/heroSection.png"

const Hero = () => {
  return (
    <>
        <div 
        style={{ backgroundImage: `url(${HeroImage})` }}
         className="hero h-[calc(100vh-4rem)]  w-full bg-black bg-center  bg-cover ">
            <div className="overlay h-full w-full bg-gradient-to-t to-transparent from-black flex items-center justify-center">

                <div className="hero-text text-center text-Org  ">
                    <h1 className=' uppercase text-4xl font-bold backdrop-blur-[2px]'>taste the rich flavor of</h1>
                    <h1 className=' uppercase text-4xl font-bold backdrop-blur-[2px] w-fit m-auto '>High quality sushi</h1>
                    <p className=' mt-4 text-white backdrop-blur-[2px]'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className=' mb-4 text-white backdrop-blur-[2px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, deleniti?</p>
                    <button className=' uppercase text-xl px-4 py-2 bg-Org text-black rounded-md'>
                        <p className=' flex items-center gap-2'>
                        Go to menu <FaArrowRightLong></FaArrowRightLong>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero