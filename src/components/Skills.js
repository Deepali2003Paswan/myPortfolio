import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import bannerbkg from "../assets/img/bannerbkg.jpg";
import html5 from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import nodejs from "../assets/img/nodejs.png";
import mongodb from "../assets/img/mongo-db.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <p>Learn so far</p>
                        <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img className="techimage" src={html5} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image" src={bannerbkg} alt="Image" />
    </section>
  )
}
