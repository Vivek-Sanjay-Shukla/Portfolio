import React from 'react'
import './Project.css'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import Todo from '../Images/todo.png'
import Crypto from '../Images/crypto.png'
import Dictionary from '../Images/dictionary.png'
import Editor from '../Images/editor.png'
import Chat from '../Images/chat-gpt-ai.png';


const Project = () => {
  return (
    <Container fluid className='project'>
        <Container>
        <h1 className="p-heading">
           My <strong className="orange">Projects </strong>
        </h1>

        <p style={{color:"white"}}>
            Here are some of my Projects
        </p>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
              <ProjectCard
                image={Editor}
                title="Code-Editor"
                description="A code-editor where you can run your html, css and javascript code in which you can make your website 
                instantly
                 and make your own markdown in markdown editor with live preview"
                gLink="https://github.com/Vivek-Sanjay-Shukla/Online-Editor"
                demo="https://vivek-sanjay-shukla.github.io/Online-Editor"
                but = "yes"
                techs = {['Reactjs','Html/Css','Javascript','bootstrap']}
              />
          </Col>

          <Col md={4} className="project-card">
              <ProjectCard
                image={Crypto}
                title="Crypto-Tracker"
                description="It is the cryptocurrency tracker website for tracking the price, marketcap and profit/loss of your favourite crypto currency.It has the saperate page for all the crypto currencies"
                gLink="https://github.com/Vivek-Sanjay-Shukla/Crypto-tracker"
                demo="https://vivek-sanjay-shukla.github.io/Crypto-tracker/"
                but = "yes"
                techs = {['Reactjs','Html/Css','Javascript']}
              />
            </Col>

          <Col md={4} className="project-card">
              <ProjectCard
                image={Todo}
                title="To-do-list"
                description="Todo List Website for making a list of all the task you need to accomplish today. It has add, delete, edit the tasks funtionalities and it also has the local storage funtionaly"
                gLink="https://github.com/Vivek-Sanjay-Shukla/To-do-list"
                demo="https://vivek-sanjay-shukla.github.io/To-do-list/"
                but = "yes"
                techs = {['Reactjs','Html/Css','Javascript']}
              />
            </Col>

            
          <Col md={4} className="project-card">
              <ProjectCard
                image={Chat}
                title="Chat-gpt-ai"
                description="It is a chat-git-ai website for answering any type of doubts you have"
                gLink="https://github.com/Vivek-Sanjay-Shukla/ChatGpt-AI-Website"
                demo=""
                but = "no"
                techs = {['Vitejs','Html/Css','Javascript','openai']}
              />
            </Col>

         
            <Col md={4} className="project-card">
              <ProjectCard
                image={Dictionary}
                title="Dictionary"
                description="It is dictionary website for searching the meanings of any word. It is made using the html/css , javascript and dictionary api."
                gLink="https://github.com/Vivek-Sanjay-Shukla/Dictionary-Website"
                demo="https://vivek-sanjay-shukla.github.io/Dictionary-Website/"
                but = "yes"
                techs = {['Html/Css','Javascript','api']}
              />
            </Col>


            <Pagination 
           style={{
            padding:20,
            width:"100%",
            display:"flex",
            justifyContent:"center",
           }}
           count={3}
           />
        </Row>

      </Container>
    </Container>
  )
}

export default Project