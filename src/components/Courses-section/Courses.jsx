import React from "react";
import { Container, Row, Col } from "reactstrap";
import image1 from '../../images/image3.jpg'
import image2 from '../../images/image4.jpg'

import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "BTECH CSE, CSBS, ECE",
    lesson: 70,
    students: 12.5,
    rating: 5.9,
    imgUrl: image1,
  },

  {
    id: "02",
    title: "BBA, B.Com",
    lesson: 30,
    students: 12.5,
    rating: 5.9,
    imgUrl: image2,
  },

  {
    id: "03",
    title: "MA, MA, B.S.c",
    lesson: 35,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://vitap.ac.in/wp-content/uploads/2020/07/B.Tech-Mechanical-1.jpg",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                VIT-AP offers distinctive education through its Undergraduate, Postgraduate and Ph.D Programmes. The teaching-learning process at the institute prepares  students for the future.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
