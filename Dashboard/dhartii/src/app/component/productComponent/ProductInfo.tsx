import Link from "next/link"

function ProductInfo() {
  return (
    <>
    <div className="shipping-info-wrap mb-4">
      <p className="mb-0 text-black-80 fs15">
        <Link href="../../vendors/mushio/index.html">{'Brand: Mushio'}</Link>{" "}
      </p>
      <small className="sku_wrapper">
        SKU: <span className="sku">{'JSN006'}</span>
      </small>
    </div>
    <div className="fw500 d-flex justify-content-between">
      <div className="flex-grow-1 h4 mb-0">{'Aasmani kurta'}</div>
      {/* <div className="flex-shrink-0">
        <div className="fs20">
          <div
            className="yith-wcwl-add-to-wishlist add-to-wishlist-4357  wishlist-fragment on-first-load"
            data-fragment-ref={4357}
            data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":true,"show_exists":false,"product_id":4357,"parent_product_id":4357,"product_type":"variable","show_view":true,"browse_wishlist_text":"Wishlist","already_in_wishslist_text":"Product Already in Wishlist!","product_added_text":"Product Successfully Added.","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"shortcode","item":"add_to_wishlist"}'
          ></div>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default ProductInfo