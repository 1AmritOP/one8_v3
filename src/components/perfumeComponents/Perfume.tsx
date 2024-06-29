// import React from 'react'
import p5 from "../../assets/Perfume/p5.png"

const Perfume = () => {
  return (
    <>
        <div className=' w-full min-h-[60vh] bg-black p-10 text-white'>
            <header className=' h-fit w-full flex items-center justify-center mb-4'>
                <h1 className=' font-bold text-6xl'>Perfume</h1>
            </header>
            <section className=' w-full flex items-center max-md:flex-col max-md:justify-center'>
                {/* <div className="part1"></div> */}
                <div className='scrollAnimation w-1/3 max-md:w-full h-[23rem] bg-slate-500 rounded-tl-[5rem] overflow-hidden' >
                    <img src={p5} alt="img" className=' h-full w-full object-cover' />
                </div>

                {/* <div className="part2"></div> */}
                <div className='scrollAnimation w-1/3 max-md:w-full min-h-[23rem] bg-slate-600 p-8 flex items-center justify-center'>
                    <div className="text">
                        <h1 className=' font-bold text-4xl mb-2'>Our</h1>
                        <h1 className=' font-bold text-4xl mb-2'>Product</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab eaque suscipit non soluta dolorum ipsam vel repudiandae recusandae alias.</p>
                        <button className=' mt-4 p-2 bg-yellow-600 rounded-lg'>Shop Now</button>
                    </div>
                </div>

                <div className='scrollAnimation w-1/3 max-md:w-full min-h-[23rem] bg-slate-700 rounded-br-[5rem] p-8 flex items-center justify-center'>
                    <div className="text">
                        <h1 className=' font-bold text-4xl mb-2'>Our</h1>
                        <h1 className=' font-bold text-4xl mb-2'>Product</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab eaque suscipit non soluta dolorum ipsam vel repudiandae recusandae alias.</p>
                        <button className=' mt-4 p-2 bg-yellow-600 rounded-lg'>Shop Now</button>
                    </div>
                </div>
            </section>
        </div>  
    </>
  )
}

export default Perfume