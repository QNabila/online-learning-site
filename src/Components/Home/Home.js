import { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import Courses from "../Courses/Courses";
import "./Home.css";
const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("FakeData/data.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="hero-section">
        <h1>
          Learn With
          <br /><span className="text-danger">"Edu More"</span>
          <br /> in A New Way
        </h1>
        <img className="hero-img" src="education.jpg" alt="images" srcset="" />
      </div>
      <h2 className="fs-1 fw-bold services-title">Our Popular Services</h2>
      <Row xs={2} md={3} className="g-3 w-100">
        {courses.slice(0, 3).map((course) => (
          <Courses key={course.id} service={course}></Courses>
        ))}
      </Row>
      <div className="feedback">
          <h2 className="fs-1 fw-bold services-title">Find Out What Our Students Say</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="fs-3 fw-bold text-black">Samia Sultana</h3>
              <p className="fs-5">
                This was a very immersive and interesting course -- a lot of
                self-learning to be done on your own to really understand and
                put together into practice the technology into your own course
                and workflow.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="fs-3 fw-bold text-black">Rakib</h3>
              <p className="fs-5">Thank you for web development course. I get know experience and knowledge in using different kinds of online tools which are useful and effective. I'll use some of them during my lessons. And lots of thanks.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="fs-3 fw-bold text-black">Sadia Zakir</h3>
              <p className="fs-5">
              I found the digital marketting course to be highly relevant to anyone involved in online teaching and looking to enhance their online teaching skills,  improve student engagement and understand the value of different online tools and websites.  The instructors were experts who explained the concept with easy to understand videos and clear instructions.  It was a 3 weeks course but i was able to successfully finish it in under 10 days.  Highly recommended 
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
