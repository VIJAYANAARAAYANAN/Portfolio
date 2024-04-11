import React, { useEffect } from 'react';
import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../components/About/about.css';
import shape from '../../assets/shape.png';
import mypic from '../../assets/mypic.png';
import '../About/typewriter'; // Import the typewriter script

function ContainerExample() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['A Mern Stack Developer', 'A Full Stack Developer'];
  
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000); 
  
        return () => clearInterval(interval);
    }, []);

    return (
        <Container className='detail'>
            <Row className="container">
                <Col className='col'>
                    <h1>Hello I'm</h1>
                    <h2 className="name">Vijay Naaraayanan</h2>
                    <h3 className='domain'>
                        <a href="" className="typewrite" data-period="2000" data-type='[ "A MERN Stack Developer", "A FullStack Developer"]'>
                            <span className="wrap"></span>
                        </a>
                    </h3>
                    <p>As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Next.js, TypeScript, MongoDB, Express.js, and Node.js to create scalable and robust web applications.</p>
                    <div className='rowbuttons'>
                        <a href="#" className="resume">
                            <span>Resume</span>
                            <IonIcon icon={downloadOutline} className="download-icon" />
                        </a>
                        <a href="#">About Me</a>
                    </div>     
                </Col>
                <Col>
                    <div className='images'>
                        <img src={shape} alt='imageshape' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContainerExample;
