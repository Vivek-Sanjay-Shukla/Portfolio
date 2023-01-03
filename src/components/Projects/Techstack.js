import React from "react";
import { Col, Row } from "react-bootstrap";



const Techstack = ({techs}) => {

  return (
     <Row style={{ justifyContent: "center", paddingBottom: "15px" }}>
      {
         techs?.map((value,index)=>{
            return(
            <Col key={index} xs={2} md={2} className="t-icons">
            <span>{value}</span>
            </Col>
            );
         })
         }
      </Row>
  )
}

export default Techstack