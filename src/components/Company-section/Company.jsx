import React from "react";
import './company-section.css'
import { Container, Row, Col } from "reactstrap";
import { BsMicrosoft, BsMeta } from "react-icons/bs"; 
import { SiTesla, SiAirbnb } from "react-icons/si";

const Company = () => {
  return (
    <section>
      <Container>
        <h1 className="companies">Companies That Visit Us</h1>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-2">
              <BsMicrosoft size={20}/> Microsoft
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-2">
              <BsMeta size={30}/> Meta
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <SiTesla/> Tesla
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-apple-fill"></i> Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <SiAirbnb/> Airbnb
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
