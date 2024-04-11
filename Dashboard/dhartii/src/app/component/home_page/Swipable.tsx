'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import "swiper/css";


function Swipable() {
    const Data = [1,1,1,1,1,1,1,1,1]
    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: '2.2',
        },
       
        // when window width is >= 768px
        768: {
          slidesPerView: 4.5,
        },
      };
    
    return (
        <div className='container py-sm-4 custom_img_size'>
        <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={breakpoints as any}

        >
            {Data.map((item:any, index:any)=>(<SwiperSlide key={index}><>
                <Link
                    className="category-block d-block position-relative "
                    href="vendors/mushio/index.html"
                >
                    <figure className="figure mb-0 overflow-hidden rounded">
                        <img
                            className="w-100 transition"
                            src={"https://dhartii.in/wp-content/uploads/2024/04/mushio-plp-402-x-593-1-1.png"}
                            alt={"Virmansha Designs"} 
                        />
                    </figure>
                </Link>
            </></SwiperSlide>))}    
        </Swiper>
        </div>
    )
}

export default Swipable