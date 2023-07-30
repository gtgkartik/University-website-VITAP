import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import image from '../../images/image.jpg'
const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Welcome to VIT-AP University
              </h2>
              <p className="mb-5">
              VIT-AP offers distinctive education through its undergraduate, postgraduate and PhD programmes. Design Your Own Degree is a unique opportunity that students have in shaping their Curriculum and final degree to be awarded.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={image} alt="" className="w-100 hero__img custom-shadow" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
