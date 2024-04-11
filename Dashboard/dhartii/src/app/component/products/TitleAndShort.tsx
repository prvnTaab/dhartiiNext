import React from 'react'

function TitleAndShort() {
  return (
    <div className="col-12 py-1 position-relative">
  <h3 className="cust_plp_h3 text-center">Tops &amp; T-shirts</h3>
  <form className="position-absolute shortform" method="get" >
    <select name="orderby" className="orderby" aria-label="Shop order">
      <option value="menu_order">
        Default sorting
      </option>
      <option value="popularity">Sort by popularity</option>
      <option value="date">Sort by latest</option>
      <option value="price">Sort by price: low to high</option>
      <option value="price-desc">Sort by price: high to low</option>
    </select>
  </form>
</div>

  )
}

export default TitleAndShort