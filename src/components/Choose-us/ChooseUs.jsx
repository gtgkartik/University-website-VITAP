import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import image from '../../images/image5.jpg'
import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              With a history of 37 years of innovation in educational and research domain, VIT  has been a forerunner in delivering quality education. Consistently ranked among the top educational institutes in the country, the VIT group of institutions have had a proud tradition of pursuing knowledge and excellence. In keeping with this tradition,  the leadership at VIT-AP resonates a dynamic blend of academic initiative and industry partnership with a vision of creating one of the finest academic destinations in the world.  The VIT-AP campus, which is poised to become one of the country’s best campuses, offers several avenues to explore your interests, identify core competencies, and engage in an evolving lifecycle of education and growth. It is a place where
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=a2B5l6C2Xr8"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={image} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
