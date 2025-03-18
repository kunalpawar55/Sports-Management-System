import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../CSS/Styl.css";
import { Navigation, Pagination } from "swiper/modules";

export default function Style() {
  const items = [
    { link: "https://www.youtube.com/embed/_CFS5uZCcTw?autoplay=1&mute=1", name: "Virat Kohli" },
    { link: "https://www.youtube.com/embed/90sDwdptBwE?", name: "Aslam Inamdar" },
    { link: "https://www.youtube.com/embed/1CB_xGYibQU?", name: "CR7" },
    { link: "https://www.youtube.com/embed/cuLprHh_BRg?", name: "Virat Kohli" },
    { link: "https://www.youtube.com/embed/RkT2k4Kt7hc?", name: "Virat Kohli" },
    { link: "https://www.youtube.com/embed/RxhuO0WwRHg?", name: "Virat Kohli" },
    { link: "https://www.youtube.com/embed/b601XCUfZ_4?", name: "Virat Kohli" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} 
        loop
        autoplay={{
          delay: 2500,  
          disableOnInteraction: false, 
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slide-content">
              <iframe
                className="youtube"
                src={item.link}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
