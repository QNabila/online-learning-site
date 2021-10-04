import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Courses.css"

const Courses = (props) => {
  console.log(props.service.name);
  const { name, image, Price } = props.service;
  return (
    <div>
      <div className="container">
        <Col>
          <Card>
            <Card.Img variant="top" src={image} className="course-img"/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {Price} tk
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Courses;
