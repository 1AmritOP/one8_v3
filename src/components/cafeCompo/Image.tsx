// import React from 'react'
import image1 from "../../assets/CafeImage/IMG1.png"


const Image = () => {



  return (
    <>
        <div className="images   h-96 w-full overflow-hidden">
            <img src={image1} alt="img" className='hover:scale-110 transition-all duration-200 ease-in hotel-image w-full h-full object-cover'/>
        </div>
    </>
  )
}

export default Image