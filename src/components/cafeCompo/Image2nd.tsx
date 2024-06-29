import image2 from "../../assets/CafeImage/IMG2.png"

const Image2nd = () => {
  return (
    <>
        <div className="images   h-96 w-full overflow-hidden">
            <img src={image2} alt="img" className='hover:scale-110 transition-all duration-200 ease-in hotel-image w-full h-full object-cover'/>
        </div>
    </>
  )
}

export default Image2nd