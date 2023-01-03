import React from "react";
import { Col, Row } from "react-bootstrap";
import git from '../Images/git.png'
import VsCode from '../Images/vscode.png'
import Sublime from '../Images/sublime.png'


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <img src={git} alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={VsCode} alt=""/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={Sublime} alt=""/>
      </Col>
    </Row>
  );
}

export default Toolstack;