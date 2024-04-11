import React from 'react';
import { contactUs } from '../constent/content';
import ContactForm from '../component/contactUs/ContactForm';

function ContactUs() {
  return (
    <main className="main-content inner-pages">
  <section className="top-banner">
    <img
      className="img-fluid mx-auto d-block"
      src="https://dhartii.in/wp-content/themes/dhaarti/images/contact-banner.jpg"
      alt=""
    />
  </section>
  <section className="contact-section py-5">
    <div className="container-xl">
      <div className="fs17 mb-3">
        <p>
          Thank you for visiting our website, if you have any questions or
          comments, we would like to hear from you. Please contact us by filling
          out the form below or give us a call. For More Information{" "}
          <strong className="fw500">Email Us at  {contactUs.content[1].subTitle}</strong>
        </p>
      </div>
      <div className="row gx-0 border border-dark">
        <div className="col-md-6 h-100 p-4 p-md-5">
          <h4 className="fw500">{contactUs.title}</h4>
          <div className="mt-4 mb-4 fs16">
            {contactUs.content.map((item:any) =>(<div className="d-flex mb-3" key={item.id}>
              <div className="flex-shrink-0 pt-1">
                <i
                  className="fa fa-phone text-accent me-3 fs24"
                  style={{ width: 30 }}
                />
              </div>
              <div className="flex-grow-1">
                <h6 className="text-uppercase fw500">{item.title}</h6>
                <p className="text-dark-80">{item.subTitle}</p>
              </div>
            </div>))}           
          </div>
          <hr className="pb-4" />
          {/* <div className="footer-social">
            <h6 className="text-black fs17">Follow us on</h6>
            <ul className="list-unstyled list-inline pt-1">
              <li className="list-inline-item Facebook">
                <a
                  href="https://www.facebook.com/profile.php?id=100094476648211"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item Instagram">
                <a
                  href="https://www.instagram.com/dhartii.in?igsh=OWVhczUwN3ZncDc="
                  target="_blank"
                >
                  <i className="fab fa-instagram " />
                </a>
              </li>
              <li className="list-inline-item Twitter">
                <a href="#" target="_blank">
                  <i className="fab fa-twitter " />
                </a>
              </li>
              <li className="list-inline-item Linkedin">
                <a
                  href="https://www.linkedin.com/company/dhartii-in/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item Youtube">
                <a href="#" target="_blank">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="col-md-6 h-100 p-4 p-md-5">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default ContactUs