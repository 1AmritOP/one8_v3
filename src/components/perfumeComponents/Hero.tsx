// import React from 'react'
import p1 from "../../assets/Perfume/p1.png"
import p7 from "../../assets/Perfume/p7.png"
import p4 from "../../assets/Perfume/p4.png"


const Hero = () => {
  return (
    <>
        <div className="hero flex overflow-x-hidden max-sm:justify-center justify-between items-center p-10
         h-[calc(100vh-4rem)]  w-full   text-white relative">


            <div className="left  h-full w-80 flex items-end justify-center max-sm:hidden " >
                <section className=' h-96 w-[90%] leftBorderRadius overflow-hidden'>
                    <img src={p1} alt="img" className=" h-full w-full bg-cover" />
                </section>
            </div>

            <div className="center h-full w-80 flex items-center justify-center">
                <section className=" h-[28rem] w-[90%] centerBorderRadius overflow-hidden">
                    <img src={p7} alt="img" className=" h-full w-full bg-cover" />
                </section>
            </div>

            <div className="right h-full w-80 flex items-start justify-center max-sm:hidden">
                <section className=' h-96 w-[90%] overflow-hidden rightBorderRadius'>
                    <img src={p4} alt="img" className=" h-full w-full bg-center " />
                </section>
            </div>

        </div>
    </>
  )
}

export default Hero