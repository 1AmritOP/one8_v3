// import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import showcase1 from "../../assets/footwear/f1.jpeg"
import showcase2 from "../../assets/footwear/f2.jpeg"


const Showcase = () => {
    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.to(".showcase .img1",{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            // opacity:0,
            scrollTrigger:{
                trigger:".showcase ",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 80%",
                scrub:true
            }
        },"showcase")
        tl.to(".showcase .img2",{
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            // opacity:0,
            scrollTrigger:{
                trigger:".showcase ",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 80%",
                scrub:true
            }
        },"showcase")
    },[])
  return (
    <>
        <div className="showcase min-h-[60vh] bg-white w-full p-10 flex max-md:flex-wrap items-center justify-between gap-4">
            <div className="left h-80 w-[50%] max-md:w-full">
                <img src={showcase1} alt="" className='object-fill img1 h-full w-full' />
            </div>
            <div className="right h-80 w-[50%] max-md:w-full">
                <img src={showcase2} alt="" className='object-fill img2 h-full w-full' />
            </div>
        </div>
    </>
  )
}

export default Showcase