// import React from 'react'
import p2 from "../../assets/Perfume/p2.png"


const Details = () => {
  return (
    <>
        <div className="details max-md:flex-col
         min-h-[50vh] p-10 bg-black w-full flex items-center justify-between">
            <div className="left bg-slate-600 w-[50%] max-md:w-full h-96  scrollAnimation">
              <img src={p2} alt="img" className=' w-full h-full object-cover' />
            </div>

            <div className="right bg-slate-500 w-[50%] max-md:w-full min-h-96 text-white pl-10 py-6 flex items-center scrollAnimation">
                <div className="text">
                    <h1 className=' text-3xl font-black mt-4'>Perfume</h1>
                    <h1 className=' text-3xl font-bold mt-4'>The New Fresh Sensation</h1>
                    <p className=' mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe reprehenderit harum voluptates facilis laboriosam asperiores architecto magni deserunt ullam. Molestias labore, quae accusamus praesentium doloremque officiis sequi atque exercitationem!</p>
                    <button className=' mt-4 p-2 bg-yellow-600 rounded-lg'>Shop Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details