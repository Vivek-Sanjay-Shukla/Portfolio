import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Leetcode1 from '../Images/Leetcode.png'
import gfg from '../Images/GFG.png'


const Leetcode = () => {
  return (
    <Container fluid className='leetcode-con'>
      <Row className='container-data'>

        <Col className='leetcode-img-con'>
          <a href="https://leetcode.com/coder_679"> <img src={Leetcode1} className='leetcode-img' alt=""/></a>
         
        </Col>

        <Col>
        <span className='leetcode-text'> Problems Solved : 470+</span><br/>
        <span className='leetcode-text'>Rating : 1600+</span><br/>
        </Col>
      </Row>

      <Row className='container-data'>

        <Col className='leetcode-img-con'>
        <a href="https://www.geeksforgeeks.org/"> <img src={gfg} className='leetcode-img' alt=""/></a>
        </Col>

        <Col>
        <span className='leetcode-text'> Problems Solved : 150+</span><br/>
        </Col>
        </Row>
    </Container>
  )
}

export default Leetcode