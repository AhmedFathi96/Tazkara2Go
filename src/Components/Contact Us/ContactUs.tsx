import React, { useEffect } from 'react';
const ContactUs: React.FC = (props:any) => {
    return(
        <React.Fragment>
          
  {/* ==========Contact-Section========== */}
  <section className="contact-section padding-top" style={{paddingTop:"100px"}}>
    <div className="contact-container">
      <div
        className="bg-thumb bg_img"
        data-background="./assets/images/contact/contact.jpg"
      />
      <div className="container" >
        <div className="row justify-content-between">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <div className="section-header-3 left-style">
              <span className="cate">contact us</span>
              <h2 className="title">get in touch</h2>
              <p>
                We’d love to talk about how we can work together. Send us a
                message below and we’ll respond as soon as possible.
              </p>
            </div>
            <form className="contact-form" id="contact_form_submit">
              <div className="form-group">
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input type="submit" defaultValue="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="padding-top padding-bottom contact-info">
              <div className="info-area">
                <div className="info-item">
                  <div className="info-thumb">
                    <img
                      src="./assets/images/contact/contact01.png"
                      alt="contact"
                    />
                  </div>
                  <div className="info-content">
                    <h6 className="title">phone number</h6>
                    <a href="Tel:82828282034">+1234 56789</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-thumb">
                    <img
                      src="./assets/images/contact/contact02.png"
                      alt="contact"
                    />
                  </div>
                  <div className="info-content">
                    <h6 className="title">Email</h6>
                    <a href="Mailto:info@gmail.com">info@Boleto .com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Contact-Section========== */}
  {/* ==========Contact-Counter-Section========== */}
  <section className="contact-counter padding-top padding-bottom">
    <div className="container">
      <div className="row justify-content-center mb-30-none">
        <div className="col-sm-6 col-md-3">
          <div className="contact-counter-item">
            <div className="contact-counter-thumb">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="contact-counter-content">
              <div className="counter-item">
                <h5 className="title odometer" data-odometer-final={130}>
                  0
                </h5>
                <h5 className="title">k</h5>
              </div>
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-counter-item active">
            <div className="contact-counter-thumb">
              <i className="fas fa-users" />
            </div>
            <div className="contact-counter-content">
              <div className="counter-item">
                <h5 className="title odometer" data-odometer-final={35}>
                  0
                </h5>
                <h5 className="title">k</h5>
              </div>
              <p>Members</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-counter-item">
            <div className="contact-counter-thumb">
              <i className="fab fa-twitter" />
            </div>
            <div className="contact-counter-content">
              <div className="counter-item">
                <h5 className="title odometer" data-odometer-final={47}>
                  0
                </h5>
                <h5 className="title">k</h5>
              </div>
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-counter-item">
            <div className="contact-counter-thumb">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-counter-content">
              <div className="counter-item">
                <h5 className="title odometer" data-odometer-final={291}>
                  0
                </h5>
                <h5 className="title">k</h5>
              </div>
              <p>Subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Contact-Counter-Section========== */}



        </React.Fragment>
    )

}
export default ContactUs;
