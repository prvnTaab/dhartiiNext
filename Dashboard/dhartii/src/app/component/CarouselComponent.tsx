'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function CarouselComponent() {
    const Data = [1,1,1]

  return (
    <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    {Data.map((item:any, index:any)=>(<SwiperSlide key={index}>
    <a href="https://dhartii.in/product-category/women/ethnic-wear/?pwb-brand-filter=charkha-tales,diorama-designs,kalp,label-sadak,mushio,naksh-jaipur,papaya-whims,virago">
  <picture className="slider-wrapper">
    <img
      className="mx-auto img-fluid w-100 d-block d-none d-md-block"
      src="https://dhartii.in/wp-content/uploads/2024/04/Eid-_womens-wear-1.png"
      alt=""
    />
    <img
      className="mx-auto img-fluid w-100 d-block d-block d-md-none"
      src="https://dhartii.in/wp-content/uploads/2024/04/EID-womens_mobile.png"
      alt=""
    />
  </picture>
</a>

    </SwiperSlide>))}
      </Swiper>
  )
}

export default CarouselComponent
