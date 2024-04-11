

function ContactForm() {
  return (
    <>
    <h4 className="fw500">Contact Us</h4>
    <div className="wpcf7 no-js" id="wpcf7-f5-o1" lang="en-US" dir="ltr">
      <div className="screen-reader-response">
        <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
      </div>
      <form
        action="https://dhartii.in/contact-us/#wpcf7-f5-o1"
        method="post"
        className="wpcf7-form init"
        aria-label="Contact form"
        data-status="init"
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_wpcf7" defaultValue={5} />
          <input
            type="hidden"
            name="_wpcf7_version"
            defaultValue="5.8.7"
          />
          <input
            type="hidden"
            name="_wpcf7_locale"
            defaultValue="en_US"
          />
          <input
            type="hidden"
            name="_wpcf7_unit_tag"
            defaultValue="wpcf7-f5-o1"
          />
          <input
            type="hidden"
            name="_wpcf7_container_post"
            defaultValue={0}
          />
          <input
            type="hidden"
            name="_wpcf7_posted_data_hash"
            defaultValue=""
          />
        </div>
        <div className="form-group mb-3">
          <p>
            <label className="fw500" htmlFor="name">
              Name*
            </label>
            <br />
            <span className="wpcf7-form-control-wrap" data-name="fname">
              <input
                size={40}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter your name"
                defaultValue=""
                type="text"
                name="fname"
              />
            </span>
          </p>
        </div>
        <div className="form-group mb-3">
          <p>
            <label className="fw500" htmlFor="email">
              Email*
            </label>
            <br />
            <span className="wpcf7-form-control-wrap" data-name="email">
              <input
                size={40}
                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter email"
                defaultValue=""
                type="email"
                name="email"
              />
            </span>
          </p>
        </div>
        <div className="form-group mb-3">
          <p>
            <label className="fw500" htmlFor="email">
              Mobile No*
            </label>
            <br />
            <span className="wpcf7-form-control-wrap" data-name="mobile">
              <input
                size={40}
                className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter Mobile No"
                defaultValue=""
                type="tel"
                name="mobile"
              />
            </span>
          </p>
        </div>
        <div className="form-group mb-3">
          <p>
            <label className="fw500" htmlFor="email">
              Subject*
            </label>
            <br />
            <span className="wpcf7-form-control-wrap" data-name="subject">
              <select
                className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control"
                aria-required="true"
                aria-invalid="false"
                name="subject"
              >
                <option value="Select Subject">Select Subject</option>
                <option value="Order">Order</option>
                <option value="Payment">Payment</option>
                <option value="Product">Product</option>
                <option value="Other">Other</option>
              </select>
            </span>
          </p>
        </div>
        <div className="form-group mb-3">
          <p>
            <label className="fw500" htmlFor="message">
              Message
            </label>
            <br />
            <span className="wpcf7-form-control-wrap" data-name="message">
              <textarea
                cols={40}
                rows={10}
                className="wpcf7-form-control wpcf7-textarea form-control massage"
                aria-invalid="false"
                placeholder="Enter your message"
                name="message"
                defaultValue={""}
              />
            </span>
          </p>
        </div>
        <p>
          <input
            className="wpcf7-form-control wpcf7-submit has-spinner btn btn-dark py-2 px-5"
            type="submit"
            defaultValue="SUBMIT"
          />
        </p>
        <div className="wpcf7-response-output" aria-hidden="true" />
      </form>
    </div>
    </>
  )
}

export default ContactForm