  import React from 'react'
  import "./Swipper.css"
  import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "../../assets/images/1.png"
  
  function Swipper() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slider">
            <img src={Image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
      </Swiper>
        
    )
  }
  
  export default Swipper
  