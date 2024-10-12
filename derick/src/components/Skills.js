import meter1 from "../assets/img/meter1.jpg";
import meter2 from "../assets/img/meter2.jpg";
import meter3 from "../assets/img/meter3.jpg";
import meter4 from "../assets/img/Meter4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>We offer</h2>
              <p>
                Here we will add more descriptive images as we can.
                <br />
                Pick all possible images you wish can describe the business.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={2000}
              >
                <div className="item">
                  <img src={meter1} alt="VIP Bar And Restaurant" />
                  <h5>VIP Bar And Restaurant</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Motel with large VIP rooms" />
                  <h5>Motel with large VIP rooms</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="A large and secure parking lot" />
                  <h5>A large and secure parking lot</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Professional car wash" />
                  <h5>Professional car wash</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
