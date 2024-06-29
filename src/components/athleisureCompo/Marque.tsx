
import slide1 from "../../assets/SliderImage/slide1.jpeg"
import slide2 from "../../assets/SliderImage/slide2.jpeg"
import slide3 from "../../assets/SliderImage/slide3.jpeg"
import slide4 from "../../assets/SliderImage/slide4.jpeg"
import slide5 from "../../assets/SliderImage/slide5.jpeg"
import slide6 from "../../assets/SliderImage/slide6.jpeg"
import slide7 from "../../assets/SliderImage/slide7.jpeg"

const Marque = () => {
  return (
    <>
      <div className="logos bg-Gold ">
        <div className="logos-slide">
          <div className="card inline-block mx-10">
            <img src={slide1} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide2} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide3} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide4} alt="img" />
          </div>
        </div>

        <div className="logos-slide">
          <div className="card inline-block mx-10">
            <img src={slide5} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide6} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide7} alt="img" />
          </div>
          <div className="card inline-block mx-10">
            <img src={slide1} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marque;
