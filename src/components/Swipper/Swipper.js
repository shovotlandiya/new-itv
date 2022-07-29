import Swipper1 from "../../assets/images/swipper1.jpeg";
import Swipper2 from "../../assets/images/swipper2.jpeg";
import Swipper3 from "../../assets/images/swipper3.jpeg";
import Swipper4 from "../../assets/images/swipper4.jpeg";
import Swipper5 from "../../assets/images/swipper5.jpeg";
import Swipper6 from "../../assets/images/swipper6.jpeg";
import Swipper7 from "../../assets/images/swipper7.jpeg";
import Swipper8 from "../../assets/images/swipper8.jpeg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper1} alt="Swipper img"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper2} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper3} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper4} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper5} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper6} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper7} alt="Swipper img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src={Swipper8} alt="Swipper img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// export default Swipper;
