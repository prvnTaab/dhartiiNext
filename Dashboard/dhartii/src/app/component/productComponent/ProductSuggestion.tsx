'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import "swiper/css";

function ProductSuggestion() {
    const Data = [1,1,1,1,1,1]
    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
       
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
      };
    
  return (
    <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={breakpoints as any}

        >
            {Data.map((item:any, index:any)=>(<SwiperSlide key={index}>
                <div className="product-block d-block position-relative">
  <div className="product-wishlist position-absolute fs16 text-black">
    <div
      className="yith-wcwl-add-to-wishlist add-to-wishlist-9800  wishlist-fragment on-first-load"
      data-fragment-ref={9800}
      data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":false,"show_exists":false,"product_id":"9800","parent_product_id":"9800","product_type":"variable","show_view":false,"browse_wishlist_text":"Wishlist","already_in_wishslist_text":"Product Already in Wishlist!","product_added_text":"Product Successfully Added.","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"shortcode","item":"add_to_wishlist"}'
    >
      {/* ADD TO WISHLIST */}
      <div className="yith-wcwl-add-button">
        <a
          href="?add_to_wishlist=9800&_wpnonce=12cb36a4da"
          className="add_to_wishlist single_add_to_wishlist button alt"
          data-product-id={9800}
          data-product-type="variable"
          data-original-product-id={9800}
          data-title=""
          rel="nofollow"
        >
          <img
            src="https://dhartii.in/wp-content/uploads/2024/02/dhartii-wish-lf.png"
            className="cust_dhartii-wish-lf"
          />{" "}
          <span />
        </a>
      </div>
    </div>
  </div>
  <a
    className="mb-2 d-block overflow-hidden bg-black position-relative"
    href="https://dhartii.in/product/downtown-dreams-linen-shirt/"
  >
    <img
      className="w-100 trasition position-relative"
      src="https://dhartii.in/wp-content/uploads/2024/03/1-148.png"
      alt=""
    />
  </a>
  <div className="product-block-content pt-1">
    <h5 className="product-title mb-0 fs16 fw500 cproductinfoh">
      Downtown Dreams Linen Shirt
    </h5>
    <p className="short-desc text-black-80 mb-0 fs14 cproductinfod">
      Elevate your style with this hand-embroidered masterpiece featuring
      downtown.
    </p>
    <p className="pro-price">
      <span className="text-dark fw600 fs14 me-1">
        <span className="woocommerce-Price-amount amount">
          <bdi className="cproductinfoamount">
            <span className="woocommerce-Price-currencySymbol">₹</span>3,753
          </bdi>
        </span>
      </span>
    </p>
  </div>
</div>


            </SwiperSlide>))}    
        </Swiper>
  )
}

export default ProductSuggestion