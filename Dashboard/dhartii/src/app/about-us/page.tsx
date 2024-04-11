import "./aboutus.css"
import { aboutUs } from '../constent/content'

function index() {
  return (
    <main className="main-content inner-pages">
      <section className="container-fluid" style={{ padding: 0 }}>
        <div className="container-fluid" style={{ padding: 0 }}>
          <video autoPlay={true} loop={true} muted={true} controlsList="nodownload">
            <source
              src="https://dhartii.in/wp-content/uploads/2023/09/dhartii-video-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="story-section bg-light py-5">
        <div className="container-xl">
          <div className="row gx-5 justify-content-between">
            <div className="col-lg-6 col-md-8">
              {aboutUs.sections.map((item: any) => (
                <div key={item.id}>
                  <h4>{item.title}</h4>
                  <p style={{ textAlign: "left" }}>{item.subTitle}</p>
                </div>
              ))} 

            </div>
            <div className="col-lg-5 col-md-4">
              <figure className="about-image figure mb-0 figure__block">
                <img
                  className="img-fluid mx-auto d-block"
                  src="https://dhartii.in//wp-content/uploads/2023/05/about-img.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
          {/* /.row */}
        </div>
      </section>
      <section className="ceo-sec">
        <div className="container container-custom">
          <div className="row gx-0">
            <div className="col-lg-5">
              <div
                className="ceo-image-sec h-100 position-relative"
                style={{
                  background:
                    "url(https://dhartii.in//wp-content/uploads/2023/08/founder-image-e1694156648445.jpg) no-repeat top center"
                }}
              ></div>
            </div>
            <div className="col-lg-7">
              <div className="ceo-text-sec h-100 bg-white border border-start-0 position-relative">
                <figure>
                  <img src="https://dhartii.in//wp-content/themes/dhaarti/images/double-quotes-about.png" />
                </figure>
                <div className="ceo-desk">


                  <h2 className="fs18 fw600 text-uppercase" style={{whiteSpace:'pre-wrap'}}>{aboutUs.founderProfile.title}</h2>
                {aboutUs.founderProfile.details.map((item:any)=>(
                  <p key={item.id}>
                    {item.discription}
                  </p>
                  
                ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section py-5 bg-light-subtle">
        <div className="container-xl">
          <div className="section-heading text-center mb-sm-5">
            {" "}
            <h3>{aboutUs.our_values.titile}</h3>{" "}
          </div>
          <div className="row gx-5">
            {aboutUs.our_values.subContent.map((item: any) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="value-block d-flex align-items-between flex-column h-100">
                  <div className="value-block-content text-center mb-4 h-50">
                    <h4 className="fw500">{item?.titile}</h4>
                    <p>
                      {item?.subTitle}
                    </p>
                  </div>
                  <figure className="value-block-image d-block mb-0">
                    <img
                      className="img-fluid mx-auto d-block"
                      src={item?.image}
                      alt={item?.titile}
                    />
                  </figure>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
    </main>

  )
}

export default index