import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import sldr1 from "../../../assets/home/slide1.jpg";
import sldr2 from "../../../assets/home/slide2.jpg";
import sldr3 from "../../../assets/home/slide3.jpg";
import sldr4 from "../../../assets/home/slide4.jpg";
import sldr5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={sldr1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sldr2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sldr3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sldr4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sldr5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
