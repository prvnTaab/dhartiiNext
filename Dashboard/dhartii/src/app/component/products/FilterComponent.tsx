import React from 'react'

function FilterComponent() {
  return (
    // <aside className="col-sm-4 col-md-4 col-lg-3 filter-sidebar mb-4">
  <div className="filter-sidebar-wrap">
    <div className="sidebar-block">
      {/* <div className="clear-btn">
        <a
          href="https://dhartii.in/product-category/kids/girls/dresses-girls/"
          className="btn btn-outline-prime btn-sm body-font fw500 clear-all fs11 btn btn-outline-dark btn-sm body-font fw500 fs11"
        >
          Clear All Filter
        </a>{" "}
      </div> */}
      <section
        id="woocommerce_price_filter-2"
        className="widget woocommerce widget_price_filter"
      >
        <h2 className="widget-title">PRICE RANGE</h2>
        <form
          method="get"
          action="https://dhartii.in/product-category/kids/girls/dresses-girls/"
        >
          <div className="price_slider_wrapper">
            <div
              className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              style={{}}
            >
              <div
                className="ui-slider-range ui-corner-all ui-widget-header"
                style={{ left: "0%", width: "100%" }}
              />
              <span
                tabIndex={0}
                className="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: "0%" }}
              />
              <span
                tabIndex={0}
                className="ui-slider-handle ui-corner-all ui-state-default"
                style={{ left: "100%" }}
              />
            </div>
            <div className="price_slider_amount" data-step={10}>
              <label className="screen-reader-text" htmlFor="min_price">
                Min price
              </label>
              <input
                type="text"
                id="min_price"
                name="min_price"
                defaultValue={1430}
                data-min={1200}
                placeholder="Min price"
                style={{ display: "none" }}
              />
              <label className="screen-reader-text" htmlFor="max_price">
                Max price
              </label>
              <input
                type="text"
                id="max_price"
                name="max_price"
                defaultValue={2610}
                data-max={2900}
                placeholder="Max price"
                style={{ display: "none" }}
              />
              <button type="submit" className="button">
                Filter
              </button>
              <div className="price_label" style={{}}>
                Price: <span className="from">₹1,200</span> —{" "}
                <span className="to">₹2,900</span>
              </div>
              <div className="clear" />
            </div>
          </div>
        </form>
      </section>{" "}
    </div>
    <section id="filter_by_brand-3" className="widget widget_filter_by_brand">
      <h2 className="widget-title">Brands</h2>
      <div
        className="pwb-filter-products
"
        data-cat-url="https://dhartii.in/product-category/kids/girls/dresses-girls/"
      >
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                data-brand={316}
                defaultValue="earthy-tweens"
              />
              <span>Earthy Tweens</span>
            </label>
          </li>
        </ul>
        <button className="pwb-apply-filter">Apply filter</button>
      </div>
    </section>
    <section
      id="woocommerce_layered_nav-3"
      className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
    >
      <h2 className="widget-title">Filter by Color</h2>
      <div
        className="pwb-filter-products">
      <ul>
        <li>
        <label>
              <input
                type="checkbox"
                data-brand={316}
                defaultValue="earthy-tweens"
              />
           <span>Beige</span> 
           </label>
          <span className="count">(1)</span>
        </li>
      </ul>
      </div>
    </section>
  </div>
// </aside>

  )
}

export default FilterComponent