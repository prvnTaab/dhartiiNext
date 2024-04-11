import Link from 'next/link'

function FacilityComponet() {
  return (
    <section className="section">
  <div className="container store_quality_cont full-width ">
    <div className="row custom4icon">
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center">
        <figure className="figure mb-0 overflow-hidden">
          <img
            className="store_quality_icon"
            src="https://dhartii.in/wp-content/uploads/2024/02/Frame-303.png"
            alt="Pan India Shipping"
          />
        </figure>
        <p className="store_quality_icon_title">Pan India Shipping</p>
      </div>
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center">
        <figure className="figure mb-0 overflow-hidden">
          <img
            className="store_quality_icon"
            src="https://dhartii.in/wp-content/uploads/2024/02/Frame-305.png"
            alt="Secure Payment"
          />
        </figure>
        <p className="store_quality_icon_title">Secure Payment</p>
      </div>
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center">
        <figure className="figure mb-0 overflow-hidden">
          <img
            className="store_quality_icon"
            src="https://dhartii.in/wp-content/uploads/2024/02/2ew32e23.png"
            alt="Easy Checkout"
          />
        </figure>
        <p className="store_quality_icon_title">Easy Checkout</p>
      </div>
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center">
        <figure className="figure mb-0 overflow-hidden">
          <img
            className="store_quality_icon"
            src="https://dhartii.in/wp-content/uploads/2024/02/Frame-304.png"
            alt="Authentic Products"
          />
        </figure>
        <p className="store_quality_icon_title">Authentic Products</p>
      </div>
      <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center">
        <figure className="figure mb-0 overflow-hidden">
          <img
            className="store_quality_icon"
            src="https://dhartii.in/wp-content/uploads/2024/03/easy-return.png"
            alt="Easy Return"
          />
        </figure>
        <p className="store_quality_icon_title">Easy Return</p>
      </div>
    </div>
  </div>
  <div>
    <p className="store_quality_description bg-white">
      We at dhartii don't just talk about sustainability, we live it. We
      carefully source premium sustainable outfits, and focus on people and
      progress at every step. Read on to know more about how dhartii is making a
      difference.
      <Link style={{ color: "#4973b1" }} href="/about-us">
        Read More
      </Link>
    </p>
  </div>
</section>

  )
}

export default FacilityComponet