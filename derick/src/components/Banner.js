import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pizza.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css"; // Make sure your CSS file with the animation styles is imported

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>Presentation will be here</h1>
                  <p>
                    Pumzika, pumzika, na uchague tena kwenye chez Bugingo
                    Moteli- mahali pako pa starehe parabarani
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn spin-wheel"
                      : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
