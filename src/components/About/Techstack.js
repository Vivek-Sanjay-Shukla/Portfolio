import React from "react";
import { Col, Row } from "react-bootstrap";
import CPP from '../Images/c-.png'
import CSS from '../Images/css-3.png'
import HTML from '../Images/html-5.png'
import nodejs from '../Images/nodejs.png'
import react from '../Images/react.png'
import C from '../Images/c.png'
import bootstrap from '../Images/bootstrap.png'
import javascript from '../Images/javascript.png'


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <img src={CPP} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={CSS} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={HTML} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={nodejs} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={react} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={javascript} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={bootstrap} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={C} alt=""/>
    </Col>
    {/* <Col xs={4} md={2} className="tech-icons">
    <img src={CPP} alt=""/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <img src={CPP} alt=""/> */}
    {/* </Col> */}
  </Row>
  )
}

export default Techstack