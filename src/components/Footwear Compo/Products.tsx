// import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import f4 from "../../assets/footwear/f4.jpeg"
import f5 from "../../assets/footwear/f5.jpeg"
import f6 from "../../assets/footwear/f6.jpeg"


const Products = () => {
    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.from(".products .up",{
            clipPath:"polygon(0 30%, 100% 30%, 100% 100%, 0% 100%)",
            // height: 0,
            scrollTrigger:{
                trigger:".products",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 80%",
                scrub:true
            }
        })
        tl.from(".products h1",{
            opacity:0,
            y:200,
            width:"0%",
            scrollTrigger:{
                trigger:".products",
                scroller:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 80%",
                scrub:true
            }
        },"shoes")
        tl.from(".products .shoes-wrapper .shoes",{
            opacity:0,
            x:100,
            // stagger:0.5,
            scrollTrigger:{
                trigger:".products",
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
        <section className='products w-full h-screen overflow-hidden max-md:visible  p-10'>
            <div className="up w-full h-2/3 bg-slate-600 p-10">
                <h1 className=' text-5xl font-bold'>Latest Product</h1>
                <h1 className=' text-5xl font-bold'>From One8</h1>
            </div>
            <div className="down w-full max-md:min-h-[50vh]  h-1/3 bg-white text-black p-10">
                <div className="shoes-wrapper h-full  -mt-52 flex max-lg:flex-wrap max-lg:justify-center max-lg:gap-10 gap-4 w-full justify-between">
                    <div className="shoes h-80 w-72 ">
                        <img src={f4} alt="img" className=' h-full w-full bg-cover' />
                    </div>
                    <div className="shoes h-80 w-72 ">
                        <img src={f5} alt="img" className=' h-full w-full bg-cover' />
                    </div>                    <div className="shoes h-80 w-72 ">
                        <img src={f6} alt="img" className=' h-full w-full bg-cover' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products