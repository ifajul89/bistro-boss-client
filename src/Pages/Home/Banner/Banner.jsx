import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import sliderImg1 from "../../../assets/home/01.jpg";
import sliderImg2 from "../../../assets/home/02.jpg";
import sliderImg3 from "../../../assets/home/03.png";
import sliderImg4 from "../../../assets/home/04.jpg";
import sliderImg5 from "../../../assets/home/05.png";
import sliderImg6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={sliderImg1} alt="" />
      </div>
      <div>
        <img src={sliderImg2} alt="" /> 
      </div>
      <div>
        <img src={sliderImg3} alt="" />
      </div>
      <div>
        <img src={sliderImg4} alt="" />
      </div>
      <div>
        <img src={sliderImg5} alt="" />
      </div>
      <div>
        <img src={sliderImg6} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
