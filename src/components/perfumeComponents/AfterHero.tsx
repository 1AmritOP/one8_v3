// import React from 'react'
import { FaAward } from 'react-icons/fa'

const AfterHero = () => {
  return (
    <>
        <section className=' w-full min-h-[40vh] bg-black flex max-md:flex-wrap max-md:justify-center max-md:gap-10 
        gap-4 items-center justify-between p-10 text-white'>
            <div className=' text-center w-80 scrollAnimation '>
                <h1 className=' font-bold text-3xl my-4'>One8 Perfume</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className=' text-center w-72 scrollAnimation '>
                <h1 className="logo text-3xl flex justify-center items-center">  <FaAward></FaAward> </h1>
                <h1 className=' font-bold text-2xl'>Top Brand</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, doloremque!</p>
            </div>

            <div className=' text-center w-72 scrollAnimation '>
                <h1 className="logo text-3xl">24x7</h1>
                <h1 className=' font-bold text-2xl'>Support</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, doloremque!</p>
            </div>

        </section>
    </>
  )
}

export default AfterHero