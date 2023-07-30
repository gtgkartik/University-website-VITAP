import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";


const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img className="image custom-shadow" src="https://vitap.ac.in/wp-content/uploads/2019/04/win1.jpg" alt=""  />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      The percentage of students placed is 85%. The highest package is INR 63 LPA. The lowest package is INR 3.5 LPA. The average package is INR 7.3 LPA. The top recruiting companies are Amazon, Adobe, Walmart, Deloitte, and Infosys.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Kartik Kumar</h6>
                        <p>Vizag, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Best Placements
                      </h6>
                      <p>
                      The entire campus is Wi-Fi enabled, so students can access Wi-Fi from anywhere on campus. The university has a well-equipped laboratory for each of the courses offered. The laboratories are equipped with the latest equipment and software, so students can get hands-on experience.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Bhavesh Saluru</h6>
                        <p>Vizag, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Best Faculty
                      </h6>
                      <p>
                      The professors are very helpful and knowledgeable. They are always willing to go the extra mile to help students succeed. The teaching quality is excellent; the professors are always up to date on the latest research and are able to teach the material in a clear way.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">CP Aakash</h6>
                        <p>Vizag, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
