import "./App.css";
import Header from "./components/Header/Header";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
import { Navigation } from "swiper";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
        <SwiperSlide>
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnl83X-xp0NQUPhzWuozuMsWYHYFUp8T8NqQ&usqp=CAU" />
          </div>
        </SwiperSlide>
      </Swiper>

      <Footer />
    </div>
  );
}

export default App;
