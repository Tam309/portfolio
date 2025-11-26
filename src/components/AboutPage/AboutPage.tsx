import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("techStack");
  return (
    <Container fluid className={`vh-100 bg-black text-white`}>
      <Container className={`p-4 ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.about}>About Me</p>
          <div className={styles.line}></div>
        </div>
        <Row className="gx-5 align-items-center">
          <Col
            xs={12}
            md={5}
            className={`d-flex justify-content-center align-items-center ${styles.imageCol}`}
          >
            <img
              src="https://res.cloudinary.com/dwnsglhao/image/upload/v1760348015/C6147A41-7C41-45C3-AD37-880A328F5F21_1_105_c_oswutg.jpg"
              alt="Profile"
              className={`${styles.image}`}
            />
          </Col>

          <Col
            xs={12}
            md={7}
            className={`d-flex flex-column justify-content-center align-items-start text-start ${styles.textCol}`}
          >
            <p>
              I’m Tam Doan, an Information Technology student at Oulu University
              of Applied Sciences with a strong passion for backend development,
              secure systems, and cloud technologies.
            </p>
            <p>
              I enjoy building scalable and user-focused software — from Java
              Spring Boot APIs to React. I always aiming
              to create efficient, maintainable, and secure solutions.
            </p>
            <p>
              I value continuous learning, teamwork, and solving real-world
              challenges through technology. My goal is to grow into a backend
              developer who can design systems that are both reliable and secure
              while delivering great user experiences.
            </p>
          </Col>
        </Row>
      </Container>
      <div className={`d-flex align-items-center mt-5`}>
        <div className={styles.lineSkill}></div>
        <div className={`ml-20 ${styles.about}`}>Skills</div>
      </div>

      <div className={`d-flex justify-content-start mt-4`}>
        <Button
          variant={activeTab === "techStack" ? "dark" : "outline-dark"}
          className={`${styles.tabButton}`}
          onClick={() => setActiveTab("techStack")}
        >
          Tech Stack
        </Button>
        <Button
          variant={activeTab === "tools" ? "dark" : "outline-dark"}
          className={`${styles.tabButtonTool}`}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </Button>
      </div>

      <Container className={`mt-4 ${styles.skillsContainer}`}>
        {activeTab === "techStack" && (
          <Row className="gx-4 gy-3">
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>HTML</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>CSS</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>TypeScript</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>JavaScript</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Java</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>SpringBoot</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>ReactJs</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>ExpressJs</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>NodeJs</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>SQL</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Non-SQL</div>
            </Col>
          </Row>
        )}
        {activeTab === "tools" && (
          <Row className="gx-4 gy-3">
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Git</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Azure</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>AWS</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Figma</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Postman</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>FireBase</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Cloudinary</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>PostgreSQL</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3} className={styles.skillCard}>
              <div>Cloudinary</div>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default AboutPage;
