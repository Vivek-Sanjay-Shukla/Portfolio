import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";
import pdf from '../Images/Vivek-Resume.pdf'
import { Document, Page ,pdfjs} from "react-pdf";
import './Resume.css'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);


  return (
    <Container fluid className="resume-section">
      
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          download>
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>

            <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
            </Row>

    </Container>
  )
}

export default Resume;