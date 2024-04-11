"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";

function SustainableFashionComponent(props:any) {
  const Data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: "2.2",
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="container py-sm-4 custom_img_size">
      <Swiper  style={{ height: '260px' }} 
        spaceBetween={20}
        slidesPerView={"auto"}
        breakpoints={breakpoints as any}
      >
        {Data.map((item: any, index: any) => (
          <SwiperSlide key={index} >
              <Link
                className="category-block d-block position-relative"
                href="slow-fashion-redefining-beauty-beyond-quantity/index.html"
              >
                <figure className="figure mb-0 overflow-hidden">
                  <img
                    src={item?.url || "https://dhartii.in/wp-content/uploads/2024/01/Blog-4-1.png"}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                  />
                </figure>
                <span className="shop-link position-absolute text-center absleft">
                  <p>
                    Ditch the Drama, Embrace the Vibe: Slow Fashion for the Desi
                    Gen Z Queen
                  </p>
                </span>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SustainableFashionComponent;
