// import React from 'react'
import video3 from "../../assets/One8run/video3.mp4"
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.to(".banner",{
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            // scale:0.3,
            scrollTrigger:{
                trigger:".banner",
                scroller:"body",
                // markers:true,
                // start:"top 70%",
                end:"bottom 40%",
                scrub:true
            }
        })
    },[])
  return (
    <>
        <div className="banner w-full min-h-[70vh] flex max-md:flex-col p-10">
            <div className="left bg-slate-600 rounded-l-2xl max-md:rounded-none flex justify-center items-center w-1/2 max-md:w-full h-[70vh] max-md:h-[40vh] p-4">
                <div className="bannerText">
                    <h1 className=' text-5xl max-md:text-3xl font-bold'>Build Together</h1>
                    <h1 className=' text-5xl max-md:text-3xl font-bold'>Our legendry Future</h1>
                    <p className=' my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quos nemo. Dicta!</p>
                    <button className=' py-2 px-4 bg-Org rounded-xl'>Get Started</button>
                </div>
            </div>
            <div className="right w-1/2 max-md:w-full h-[70vh] max-md:h-[40vh] ">
                <video src={video3} muted autoPlay loop className='max-md:rounded-none rounded-r-2xl h-full w-full object-cover'></video>
            </div>
        </div>
    </>
  )
}

export default Banner