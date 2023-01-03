import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Images/photo1.png";
import Introduction from "./Introduction";
import Typewriter from "typewriter-effect";
import './Home.css'

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="home-name-section">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VIVEK SHUKLA </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "Competitive Programmer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid1"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Introduction />
    </section>
  );
}

export default Home;