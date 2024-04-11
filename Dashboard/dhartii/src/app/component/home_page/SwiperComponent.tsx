'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import SwiperSlideComponent from './SwiperSlideComponent'

function SwiperComponent() {
    const Data = [1,1,1,1,1,1,1,1,1]
    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
       
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
      };
    return (
        <div className='col-9'>
        <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={breakpoints as any}

    >
        {Data.map((item:any, index:any)=>(<SwiperSlide key={index}>
        <SwiperSlideComponent />
        
                </SwiperSlide>))}
        </Swiper>
        </div>
    )
}

export default SwiperComponent