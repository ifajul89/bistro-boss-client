import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mx-40">
      <SectionHeading
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((items) => (
          <SwiperSlide key={items._id}>
            <div className="flex flex-col justify-start items-center text-center mx-40 gap-6">
              <FaQuoteLeft className="text-4xl"/>
              <div className="rating">
                <input
                  type="radio"
                  name={`rating-${items._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={items.rating >= 1}
                />
                <input
                  type="radio"
                  name={`rating-${items._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={items.rating >= 2}
                />
                <input
                  type="radio"
                  name={`rating-${items._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={items.rating >= 3}
                />
                <input
                  type="radio"
                  name={`rating-${items._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={items.rating >= 4}
                />
                <input
                  type="radio"
                  name={`rating-${items._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={items.rating >= 5}
                />
              </div>
              <p>{items.details}</p>
              <h3 className="text-yellow-500 font-semibold text-2xl">
                {items.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
