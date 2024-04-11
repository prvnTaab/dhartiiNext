import React from 'react'

function ProductPage() {
  const data = [1,1,1,1,1,1]
  return (
    <div className="row gx-3" id="ajax_product_filter">

  {data.map((item:any, index:any)=>(<div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
    <div className="product-block d-block position-relative">
      <div className="product-wishlist cust_product-wishlist position-absolute  fs16 text-black">
        <div
          className="yith-wcwl-add-to-wishlist add-to-wishlist-14050  wishlist-fragment on-first-load"
          data-fragment-ref={14050}
          data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":false,"show_exists":false,"product_id":"14050","parent_product_id":"14050","product_type":"simple","show_view":false,"browse_wishlist_text":"Wishlist","already_in_wishslist_text":"Product Already in Wishlist!","product_added_text":"Product Successfully Added.","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"shortcode","item":"add_to_wishlist"}'
        >
          {/* ADD TO WISHLIST */}
          <div className="yith-wcwl-add-button">
            <a
            //   onClick="clickOnAddToWishList()"
              href="?add_to_wishlist=14050&_wpnonce=fdb4b0baa7"
              className="add_to_wishlist single_add_to_wishlist button alt"
              data-product-id={14050}
              data-product-type="simple"
              data-original-product-id={14050}
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
        className="mb-2 d-block overflow-hidden position-relative rounded"
        href="https://dhartii.in/product/amaryllis-red-block-printed-cotton-saree/"
      >
        <img
          className="w-100 trasition position-relative rounded"
          src="https://dhartii.in/wp-content/uploads/2024/04/Amaryllis-Red-Block-Printed-Cotton-Saree-SRPGCT136-1.png"
          alt=""
        />
        <figcaption className="bestseller-tag position-absolute">
          New Arrival
        </figcaption>
      </a>
      <div className="product-block-content pt-1">
        <h5 className="product-title mb-0 fs16 fw500 cproductinfoh">
          Amaryllis Red Block Printed Cotton Saree
        </h5>
        <p className="short-desc text-black-80 mb-0 fs14 cproductinfod">
          Handblock Printed Mul Cotton Saree
        </p>
        <p className="pro-price">
          <span className="text-dark me-1">
            <ins className="cproductinfoamount">
              <span className="woocommerce-Price-amount amount">
                <bdi className="cproductinfoamount">
                  <span className="woocommerce-Price-currencySymbol">₹</span>
                  1,990
                </bdi>
              </span>
            </ins>{" "}
            <del className="cproductinfooffer" aria-hidden="true">
              <span className="woocommerce-Price-amount amount">
                <bdi className="cproductinfoamount">
                  <span className="woocommerce-Price-currencySymbol">₹</span>
                  2,490
                </bdi>
              </span>
            </del>
          </span>          
          <s style={{ color: "#676767" }}>₹2490</s>{" "}
          <span className="cproductinfooffer" style={{ paddingLeft: 2 }}>
            (20% Off)
          </span>{" "}
          {/* <small class="text-danger fs12 fw500"> */}
          {/* </small> */}
        </p>
      </div>
    </div>
  </div>))}
  

</div>

  )
}

export default ProductPage