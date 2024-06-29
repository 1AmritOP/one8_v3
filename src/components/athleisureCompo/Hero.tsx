import * as React from "react";
import { Parallax } from 'react-scroll-parallax'


import athleisure1 from "../../assets/athleisureImage/athleisure1.webp"
import athleisure2 from "../../assets/athleisureImage/athleisure2.webp"
// import athleisure3 from "../../assets/athleisureImage/athleisure3.webp"
import athleisure4 from "../../assets/athleisureImage/athleisure4.webp"
import athleisure5 from "../../assets/athleisureImage/athleisure8.jpg"
import athleisure6 from "../../assets/athleisureImage/athleisure9.jpg"
// import athleisure7 from "../../assets/athleisureImage/athleisure7.jpg"
// import athleisure8 from "../../assets/athleisureImage/athleisure5.jpg"
import athleisure9 from "../../assets/athleisureImage/athleisure6.jpg"




const Hero = () => {
    // const [speed, setspeed] = React.useState(15);
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1024) {        
                const cards= document.querySelectorAll(".card")
                cards.forEach(element => {
                  element.classList.remove('scrollAnimation2nd');
                  return element;
                });        
                
            } else {
              const cards= document.querySelectorAll(".card")
              cards.forEach(element => {
                element.classList.add('scrollAnimation2nd');
                return element;
              });
            }
          }
          handleResize();
          window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, [])
    
    
  return (
    <>
        <div className="hero w-full h-full bg-Gold p-10 relative">
            <h1 className='one8 text-[10vw] max-md:text-[20vw] max-lg:text-[15vw] font-bold'> 
                one<span className=' text-[15vw] max-md:text-[25vw] max-lg:text-[20vw] '>8</span>
            </h1>
            <div className="sidebar text-[5vw] max-md:text-[10vw] max-lg:text-[7vw] font-bold">
                Athleisure
            </div>
            <div className="page max-lg:flex-wrap max-lg:gap-20 max-lg:justify-center flex items-center justify-between p-10">
                <Parallax speed={window.innerWidth>1024 ? -15 : 5} 
                // translateX={[20, -20]} we can try this
                >
                <div className="card">
                    <img src={athleisure1} alt="img" />
                </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? 10 : -5}>
                    <div className=" h-72 w-64 bg-slate-500 hover:scale-105 transition-all ease-in duration-200">
                    <img src={athleisure2}
                        alt="" className='object-cover h-full w-full' />
                    </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? -15 : 5}>
                    <div className="card">
                        <img src={athleisure9} alt="img" />
                    </div>
                </Parallax>
            </div>

            <div className="page max-lg:flex-wrap max-lg:gap-20 max-lg:justify-center flex items-center justify-between p-10">
                <Parallax speed={window.innerWidth>1024 ? 10 : -5} >
                    <div className="card">
                        <img src={athleisure4} alt="img" />
                    </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? -15 : 5}>
                    <div className=" h-96 w-80 bg-slate-500 hover:scale-105 transition-all ease-in duration-200">
                        <img src={athleisure5}
                        alt="" className='object-cover h-full w-full' />
                    </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? 10 : -5}>
                    <div className="card">
                        <img src={athleisure6} alt="img" />
                    </div>
                </Parallax>
            </div>

            {/* <div className="page max-lg:flex-wrap max-lg:gap-20 max-lg:justify-center flex items-center justify-between p-10">
                <Parallax speed={window.innerWidth>1024 ? -15 : 5}
                // translateX={[20, -20]}
                >
                    <div className="card ">
                        <img src={athleisure7} alt="img" />
                    </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? 10 : -5} >
                    <div className=" h-72 w-64 bg-slate-500 hover:scale-105 transition-all ease-in duration-200">
                    <img src={athleisure8}
                        alt="" className='object-cover h-full w-full' />
                    </div>
                </Parallax>
                <Parallax speed={window.innerWidth>1024 ? -15 : 5} >
                    <div className="card">
                    <img src={athleisure3} alt="img" />
                    </div>
                </Parallax>
            </div> */}
        </div>
    </>
  )
}

export default Hero