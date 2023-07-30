import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";
import image from '../../images/image2.jpg'

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={image} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              With a history of 37 years of innovation in educational and research domain, VIT  has been a forerunner in delivering quality education. Consistently ranked among the top educational institutes in the country, the VIT group of institutions have had a proud tradition of pursuing knowledge and excellence.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={800} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Publications</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={120} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Patents</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10000} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Students</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Events</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
