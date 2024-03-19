import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import coding from "../assets/img/coding.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Namaste,", "Hello,", "Konnichiwa,","Bonjour,", "Hola,"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Namaste,", "Hello,", "Konnichiwa,","Bonjour,", "Hola," ]'><span className="wrap">{text}</span> <span className="name">{`Deepali`}</span><span className="here">{` here`}</span></span></h1>
                  <p>I'm currently pursuing my B.Tech in Computer Science and Engineering at NIT Raipur. I do a bit of competitive programming and have a 1412 rating on Leetcode, 3⭐ on CodeChef, and am a Newbie on Codeforces. Apart from this, I'm also trying my hand at web development, particularly front-end development using frameworks and libraries like React.js, as well as CSS frameworks like Bootstrap etc....</p>
                  <button onClick={() => console.log('connect')}><span className="connect">Let’s Connect</span> <ArrowRightCircle size={25} color="#6C3428" /> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={coding} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
