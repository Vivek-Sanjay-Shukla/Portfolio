import React from 'react'
import { Card } from 'react-bootstrap';
import { ImArrowRight, } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="orange">Vivek Shukla </span>
            from <span className="orange"> Maharashtra, India.</span>
            <br />I am pursuing B.E. in Information Technology at Don Bosco Institute of Technology.
            <br />
            <br />
            I am Intrested in 
          </p>

          <ul>
            <li className="about-activity">
              <ImArrowRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImArrowRight /> Web Development
            </li>
            <li className="about-activity">
              <ImArrowRight /> Playing Chess
            </li>
          </ul>


         </blockquote>
        </Card.Body>
    </Card>
  )
}

export default AboutCard