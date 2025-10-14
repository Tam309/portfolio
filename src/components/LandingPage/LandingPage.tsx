import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-black text-white">
      <Container fluid className="px-0">
        <Row className="gx-3 w-100 align-items-center"> 
          <Col
            xs={12}
            md={6}
            className={`d-flex flex-column justify-content-center align-items-start text-center ${styles.textCol}`}
          >
            <h1 className="display-4">Hello, I'm Tam Doan</h1>
            <h2 className="h5 text-warning">Full-Stack Engineer</h2>
            <p className="lead">Welcome to my personal website</p>
          </Col>
          
          <Col
            xs={12}
            md={6}
            className={`d-flex justify-content-center align-items-center ${styles.imageCol}`}
          >
            <img
              src="https://res.cloudinary.com/dwnsglhao/image/upload/v1760348015/C6147A41-7C41-45C3-AD37-880A328F5F21_1_105_c_oswutg.jpg"
              alt="Profile"
              className={`${styles.image}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;