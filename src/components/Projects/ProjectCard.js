import React from 'react'
import { Button, Card,  } from 'react-bootstrap'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Techstack from './Techstack';

const ProjectCard = (props) => {

  return (
    <Card  className="project-card-view">
        <Card.Img variant="top" src={props.image} alt="image"/>

        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
            </Card.Text>
         
 
            <Techstack techs ={props.techs}/>

            <Button  variant="primary" href={props.gLink} target="_blank">
            <BsGithub /> &nbsp;
               {"Code"}
            </Button>

            {"\n"}
            {"\n"}

            {props.but==="yes" ? <Button variant="primary" href={props.demo} target="_blank">
                <CgWebsite /> &nbsp;
                {"Demo"}
            </Button> : ""}

        </Card.Body>
    </Card>
  )
}

export default ProjectCard