import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.hero}>
        <Row className={`align-items-center ${styles.stackGap}`}>
          {/* TEXT FIRST ON MOBILE, STILL FIRST ON DESKTOP */}
          <Col xs={12} md={6}>
            <h1 className={styles.title}>Hello, I'm Tam Doan</h1>
            <h2 className={styles.role}>Full-Stack Engineer</h2>
            <p className={styles.lead}>Welcome to my personal website</p>

            <a
              href="/Tam Doan CV.pdf"
              download="Tam Doan CV.pdf"
              className={styles.downloadBtn}
            >
              <i className="bi bi-download" /> Download CV
            </a>
          </Col>

          {/* IMAGE */}
          <Col xs={12} md={6} className={styles.imageWrap}>
            <img
              src="https://res.cloudinary.com/dwnsglhao/image/upload/v1760348015/C6147A41-7C41-45C3-AD37-880A328F5F21_1_105_c_oswutg.jpg"
              alt="Profile"
              className={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
