// import React from 'react'
import { FaArrowRightLong, FaStar } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TodaySpecial = () => {

    useGSAP(()=>{
        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const tl=gsap.timeline();
        tl.to(".today-special .card.first",{
            clipPath:"ellipse(93% 68% at 53% 52%)",
            scrollTrigger:{
                trigger:".today-special .card.first",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"bottom 60%",
                scrub:true
            }
        },"special")

        tl.to(".today-special .card.three",{
            clipPath:"ellipse(93% 68% at 53% 52%)",
            scrollTrigger:{
                trigger:".today-special .card.three",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"bottom 60%",
                scrub:true
            }
        },"special")
    },[])

  return (
    <>
        <div className="today-special w-full min-h-[70vh] p-10 bg-black ">
            <h1 className=' text-Org font-bold text-4xl m-auto w-fit'>Today's Special</h1>
            <p className=' w-fit m-auto my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.</p>
            <div className=' w-full h-fit py-10 flex items-center justify-center max-md:flex-wrap '>
                
                <div className="card first">
                    <div className="image h-1/2 w-full">
                        <img src="https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="" className=' object-cover h-full w-full' />
                    </div>
                    <div className="text h-1/2 w-full p-4 bg-slate-600">
                        <h1 className=' font-bold text-2xl text-Gold'>Tuna Sushi</h1>
                        <p className=' text-sm'>Lorem hi this.state.first ipsum dolor sit amet consectetur Atque, dicta!</p>
                        <div className="rating flex items-center my-4 text-yellow-300">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>

                        </div>
                        <button className=' uppercase text-sm px-2 py-1 bg-Org text-black rounded-md'>
                            <p className=' flex items-center gap-2 '>
                                Order now <FaArrowRightLong></FaArrowRightLong>
                            </p>
                        </button>
                    </div>
                </div>

                <div className="card ">
                    <div className="image h-1/2 w-full">
                        <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="" className=' object-cover h-full w-full' />
                    </div>
                    <div className="text h-1/2 w-full p-4 bg-[#161618]">
                        <h1 className=' font-bold text-2xl text-Gold'>Tuna Sushi</h1>
                        <p className=' text-sm'>Lorem hi this.state.first ipsum dolor sit amet consectetur Atque, dicta!</p>
                        <div className="rating flex items-center my-4 text-yellow-300">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>

                        </div>
                        <button className=' uppercase text-sm px-2 py-1 bg-Org text-black rounded-md'>
                            <p className=' flex items-center gap-2 '>
                                Order now <FaArrowRightLong></FaArrowRightLong>
                            </p>
                        </button>
                    </div>
                </div>

                <div className="card three">
                    <div className="image h-1/2 w-full">
                        <img src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="" className=' object-cover h-full w-full' />
                    </div>
                    <div className="text h-1/2 w-full p-4 bg-slate-600">
                        <h1 className=' font-bold text-2xl text-Gold'>Tuna Sushi</h1>
                        <p className=' text-sm'>Lorem hi this.state.first ipsum dolor sit amet consectetur Atque, dicta!</p>
                        <div className="rating flex items-center my-4 text-yellow-300">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <button className=' uppercase text-sm px-2 py-1 bg-Org text-black rounded-md'>
                            <p className=' flex items-center gap-2 '>
                                Order now <FaArrowRightLong></FaArrowRightLong>
                            </p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default TodaySpecial