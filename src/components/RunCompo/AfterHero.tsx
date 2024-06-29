// import React from 'react'
import video2 from "../../assets/One8run/video2.mp4"
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AfterHero = () => {
    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.from(".afterHero-text",{
            y:250,
            opacity:0,
            // width:0,
            scale:0,
            // duration:2,
            scrollTrigger:{
                trigger:".part1",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"bottom 40%",
                scrub:true
            }
        },"aftr")
        tl.from(".part3 .up,.part3 .down",{
            y:250,
            opacity:0,
            // width:0,
            scale:0,
            // duration:2,
            scrollTrigger:{
                trigger:".part3",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"bottom 40%",
                scrub:true
            }
        },"aftr")
        tl.to(".part2 video",{
            clipPath:"circle(71% at 50% 50%)",
            // clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            scrollTrigger:{
                trigger:".part2",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"bottom 70%",
                scrub:true
            }
        },"aftr")
    },[])
  return (
    <>
        <div className="afterHero p-10 min-h-screen w-full bg-black flex max-lg:flex-wrap max-lg:justify-center gap-4 items-center justify-between">
            <div className="part1 flex flex-col justify-center min-h-96 w-80 ">
                <div className="afterHero-text p-2">
                    <p className=' text-lg font-medium'>Lorem, ipsum dolor.</p>
                    <h1 className=' font-bold text-5xl'>Challange Your Friend</h1>
                    <p className=' my-2 '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, veniam. </p>
                    <button className=' px-4 py-2 bg-Org rounded-lg'>Jion One8</button>
                </div>
            </div>


            <div className="part2 h-96 w-80 overflow-hidden">
                <video src={video2} autoPlay muted loop className=' w-full h-full object-cover rounded-2xl'></video>
            </div>


            <div className="part3 min-h-96 w-80  flex  gap-4 flex-col ">
                <div className="w-full h-[45%] up
                bg-slate-900 text-white  border-2 border-white grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                    <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                        card title
                    </div>
                    <div className="col-span-2 rounded-md">
                        Using Lorem ipsum to focus attention on graphic elements in 
                    </div>
                    <div className="col-span-1">
                        <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full h-[45%] down
                bg-slate-900 text-white  border-2 border-white grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                    <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                        card title
                    </div>
                    <div className="col-span-2 rounded-md">
                        Using Lorem ipsum to focus attention on graphic elements in 
                    </div>
                    <div className="col-span-1">
                        <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="page"></div> */}
    </>
  )
}

export default AfterHero