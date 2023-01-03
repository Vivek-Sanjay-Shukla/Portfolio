import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Images from '../Images/images1.png'
import Tilt from 'react-parallax-tilt'

const Introduction = () => {

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);


    const handleClick = (tabname) => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      
      if(tabname === 'Info'){
        setIsActive1(true);
      }
     else if(tabname === 'experience'){
        setIsActive2(true);
      }
      else if(tabname === 'education'){
        setIsActive3(true);
      }


    }
 
  return (

    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>

{/* links */}
                <div className="tab-titles">
                     <p className={isActive1 ? "tab-links active-link":"tab-links"} 
                      onClick={() => handleClick('Info')}>Info</p>

                     <p className={isActive2 ? "tab-links active-link":"tab-links"}
                     onClick={() => handleClick('experience')}
                      >Experience</p>

                     <p className={isActive3 ? "tab-links active-link":"tab-links"}
                     onClick={() => handleClick('education')}
                      >Education</p>
                </div>

{/* data */}
                <div className={isActive1 ? "tab-contents active-tab":"tab-contents"} 
                   onClick={() => handleClick('Info')}
                   id="skills">
                     <p className="home-about-body">I am a Competitive Programmer and Web Developer... ✌️<br />
                     <br />Programming Launguages which i am familiar with are
                    <i><b className="orange"> C++, Javascript and Python. </b></i><br /><br />
                     My field of Interest's are building new &nbsp;
                    <i>
                    <b className="orange">Web Devepment Projects </b> and
                    {" "}<b className="orange">Competitive Programming</b>
                    </i><br /><br />
               The Frameworks i am familiar are {" "}
                  <b className="orange">Node.js</b> and {" "}
                  <b className="orange">Express.js</b> and 
                  <i>
                    <b className="orange">
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="orange"> React.js and Next.js</b>
                  </i>
                </p>
                </div>

                <div className={isActive2 ? "tab-contents active-tab":"tab-contents"} 
                   onClick={() => handleClick('experience')}
                    id="experience">
                    
                    <p className="exp-data">
                      <h1 style={{ fontSize: "1.6rem",color:"#ef3636"}}> Teaching Assistant (DSA)</h1>
                        <p>• Assisting Coding Ninjas students in solving their doubts related to dsa.</p>
                        <p>• I helped many students during the tenure of being a teaching assistant.</p>
                    </p>
            
                </div>


                <div className={isActive3 ? "tab-contents active-tab":"tab-contents"} 
                   onClick={() => handleClick('education')}
                    id="education">
                        <p className="exp-data">
                      <h1 style={{ fontSize: "1.6rem",color:"#ef3636"}}> Bachelor of Engineering (B.E.)</h1>
                        <p>• I am third year I.T. student</p>
                    </p>
                </div>
           
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Images} className="img-fluid" alt="pngimage" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <p>
              You can <span className="orange">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vivek-Sanjay-Shukla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
  
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/vivek-shukla-303926206"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
        
            </ul>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Introduction;