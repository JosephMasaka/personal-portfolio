import { Container, Tab, Nav } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'






export const  Experience = () => {
  return (
    <Container className='exps' id="exp">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className="exp-bx wow zoomIn navbar-text">
                            <Tab.Container id="exp-tabs" className='inline' defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                    <Nav.Item className='exp-col nav-Item-left'>
                                        <Nav.Link eventKey="first"  style={{marginTop: 100}}><button className="vvd"><span>Education</span></button></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item eventKey="second" className='exp-col nav-Item-right'>
                                        <Nav.Link style={{marginTop: 100}}><button className="vvd"><span>Experience</span></button></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">Page A</Tab.Pane>
                                
                                    <Tab.Pane eventKey="second">Page B</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </div>
            </div>
        </div>    
    </Container>
  )
}



