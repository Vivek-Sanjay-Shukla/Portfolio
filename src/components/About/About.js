import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import AboutCard from './AboutCard'
import Leetcode from './Leetcode'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import laptopImg from '../Images/images3.png'

const About = () => {
  return (
     <Container fluid className="about-section">
        <Container>

           <Row style={{ justifyContent: "center", padding: "10px" }}>
           <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <AboutCard />
           </Col>

           
         
            
        <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>

         </Row>

         <h1 className="project-heading">
          My <strong className="orange">Coding </strong> Profiles
        </h1>

         <Leetcode/>


         <h1 className="project-heading">
          Professional <strong className="orange">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Toolstack />
        
        </Container>
     </Container>
  )
}

export default About