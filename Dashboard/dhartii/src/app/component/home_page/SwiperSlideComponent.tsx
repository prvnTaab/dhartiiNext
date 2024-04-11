
import React from 'react'
import Link from 'next/link'

export default function SwiperSlideComponent() {
  return (
    <div className="swiper-slide">
          <Link className="mob_fc_a" href="product/flora-midi/index.html">
            <picture className="slider-wrapper">
              <img
                className="mx-auto img-fluid d-block"
                src="https://dhartii.in/wp-content/uploads/2024/04/Untitled-4.png"
                alt="Flora Midi"
              />
            </picture>
          </Link>
          <h4 className="cproductinfoh">Flora Midi</h4>
          <p className="cproductinfod">
            Pure cotton block printed backless midi dress with cross tie ribbons
            at the back which can be tied in 2 styles.
          </p>
          <p className="cproductinfoa">
            <b>
              <i className="fa fa-rupee" />{" "}
            </b>
            <b>1,750</b> <s style={{ color: "#676767" }}>3,499</s>{" "}
            <span className="cproductinfooffer"> (50% Off)</span>{" "}
          </p>
        </div>
  )
}
