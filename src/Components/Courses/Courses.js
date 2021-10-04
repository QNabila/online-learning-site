import React from "react";
import { Card, Col} from "react-bootstrap";
import "./Courses.css"

const Courses = (props) => {
  const { name, image, Price } = props.service;
  return (
    <div>
      <div className="container">
        <Col>
          <Card>
            <Card.Img variant="top" src={image} className="course-img"/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="fs-5">Price:
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
