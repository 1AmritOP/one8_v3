// import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import f3 from "../../assets/footwear/f3.png"
// import showcase1 from "../../assets/footwear/Screenshot 2024-06-19 183417.png"

const Shoes = () => {
    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.from(".shoes div",{
            opacity:0,
            // delay:0.5,
            width:"0%",
            scrollTrigger:{
                trigger:".shoes ",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 80%",
                scrub:true
            }
        },"shoes")
    },[])
  return (
    <>
        <div style={{ backgroundImage: `url("${f3}")` }}
        // style={{ backgroundImage: `url(${showcase1})` }}
         className="shoes w-full h-[60vh] bg-cover max-sm:bg-cover max-md:bg-cover overflow-hidden ">
            <div className=' w-80 max-sm:w-52 h-full bg-black/80 ml-auto flex flex-col justify-center items-center'>
                <h1 className=' text-3xl'>One8</h1>
                <h1 className=' text-3xl'>Footwear</h1>
            </div>
        </div>
    </>
  )
}

export default Shoes