import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./Images.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Enjoy View",
      description: "Best & Remarkable",
      imgUrl: projImg1,
    },
    {
      title: "Motel Rooms",
      description: "Standard & Comfotable",
      imgUrl: projImg2,
    },
    {
      title: "Bar&Resporant Relax",
      description: "A Place to enjoy&",
      imgUrl: projImg3,
    },
    {
      title: "Parking&Carwash Place",
      description: "We have a large parking",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ marginBottom: "100px" }}>Our Services</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <div>
                      <Row>
                        <div className="project-cube">
                          <div className="project-cube-inner">
                            {projects.slice(0, 4).map((project, index) => (
                              <div className="project-face" key={index}>
                                <img src={project.imgUrl} alt={project.title} />
                                <div>
                                  <h4>{project.title}</h4>
                                  <p>{project.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
