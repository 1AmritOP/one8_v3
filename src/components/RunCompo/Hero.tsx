import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { useEffect } from 'react'
import video1 from "../../assets/One8run/video1.mp4"
import gallery6 from "../../assets/One8run/gallery6.jpg"
import gallery5 from "../../assets/One8run/gallery5.jpg"


const Hero = () => {
    
    useEffect(() => {   
        gsap.registerPlugin(useGSAP);

        document.querySelectorAll(".reveal").forEach(function (elem){
          const spanParent= document.createElement("span");
          const spanChild=document.createElement("span");
      
          spanParent.classList.add("parent");
          spanChild.classList.add("child");
      
          spanChild.textContent=elem.textContent;
          spanParent.appendChild(spanChild);
      
          elem.innerHTML="";
          elem.appendChild(spanParent);
      })
      const tl=gsap.timeline();
      tl.to(".child",{
          translateY:0,
          duration:1,
          
      })
    }, [])

    useGSAP(()=>{
        const tl=gsap.timeline();
        tl.from(".para, .input",{
            opacity:0,
            duration:1,
            y:50,
        },"same")
        tl.to(".hero .video video",{
            
            opacity:1,
            clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
            duration:1,
        },"same")
        tl.from(".content",{
            // opacity:1,
            duration:0.5,
            clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        })
    },[])
    
  return (
    <>
        <div  style={{ backgroundImage: `url("${gallery5}")` }}
        className="hero relative bg-cover text-white min-h-[calc(100vh-4rem)]  w-full  flex max-md:flex-col items-center justify-between p-10">
            <div className="overlay absolute top-0 left-0 h-full w-full bg-gradient-to-t to-transparent from-black flex items-center justify-center">
            </div>
            <div className="left h-full w-1/2 max-md:w-full max-md:h-[60vh]  ">
                <div className="text h-full w-full flex items-start justify-center flex-col pl-10">
                    <h1 className=' reveal font-bold text-5xl backdrop-blur-[1px]'>Join Legends of</h1>
                    <h1 className=' text-5xl font-bold reveal backdrop-blur-[1px]'>Fitness world</h1>
                    <p className=' my-4 para text-lg font-medium backdrop-blur-[1px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quia?</p>
                    <div className="mt-6 flex max-w-md gap-x-4 input backdrop-blur-[1px]">
                        <label  htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email"  required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
                        <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="right h-full w-1/2 max-md:w-full max-md:h-96 ">
                <div className="video  ml-auto   h-80 w-72 max-md:w-60 max-sm:w-52 max-sm:h-72  relative max-md:m-auto ">
                    <video src={video1}  autoPlay loop muted className='RunHero-video h-full w-full object-cover rounded-2xl'></video>
                    <div className="content absolute h-48 w-40 z-10 -bottom-20 -left-20  overflow-hidden">
                        <img src={gallery6}  alt="img" className=' w-full h-full object-cover ' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero