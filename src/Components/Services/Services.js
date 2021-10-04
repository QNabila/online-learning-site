import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Courses from "../Courses/Courses";
import "./Services.css";
const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("FakeData/data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
      <div>
          <h1 className="courses-title">Our Courses</h1>
      <Row xs={2} md={3} className="g-3 w-100">
        {courses.map((course) => (
          <Courses key={course.id} service={course}></Courses>
        ))}
      </Row>
    </div>
  );
};

export default Services;
