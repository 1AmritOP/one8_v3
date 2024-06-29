// import React from 'react'
// import FootwearPng from "../../assets/FootwearPng.png"
import FootwearHero from "../../assets/footwear/Footwear-hero.png"
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";

const Hero = () => {
    useGSAP(()=>{

        gsap.registerPlugin(useGSAP);
        const tl=gsap.timeline();
        tl.to(".Footwear-hero .layer",{
            height:"0%",
            borderBottomLeftRadius: 16,
            stagger:0.2,
            duration:0.7,
        })
        tl.from(".Footwear-hero .PositionCenter",{
            x:"100%",
            opacity:0,
            rotate:45,
            duration:0.7,
        },"footwear-hero")
        tl.from(".Footwear-hero .text",{
            scale: 2,
            opacity:0,
            duration:0.7,
        },"footwear-hero")
        // tl.to(".Footwear-hero .text .overlay",{
        //     x:"-100%",
        //     duration:0.7,
        //     opacity:0,
        // })
    },[])
  return (
    <>
        <div style={{ backgroundImage: `url("${FootwearHero}")` }}
         className=' overflow-hidden bg-cover'>
            <div className="Footwear-hero h-[calc(100vh-4rem)]  w-full relative p-10">
                <div className=" h-full w-full top-0 left-0 absolute flex">
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                    <div className="layer h-full w-[10vw] bg-slate-500 "></div>
                </div>

                {/* <div className="PositionCenter absolute">
                    <img src={FootwearPng} alt="" />
                </div> */}
                <div className="text absolute top-1/2 left-[10vw] -translate-y-1/2 ">
                    {/* <div className="overlay bg-slate-500 w-full h-full absolute top-1/2 -translate-y-1/2 "></div> */}
                    <h1 className=' text-[7vw] max-md:text-[15vw] max-sm:text-[20vw] font-bold leading-tight'>Tinker</h1>
                    <h1 className=' text-[7vw] max-md:text-[15vw] max-sm:text-[20vw] font-bold leading-tight'>Hatfield</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero