import { Container, Nav } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { EduCard } from './EduCard';
import { ExpCard } from './ExpCard';

export const  Experience = () => {

    const education = [
        {
          year: "2016",
          institution: "Computer Pride",
          course: 'Graphics Design',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            year: "2017",
            institution: "Egerton University",
            course: 'Graphics Design',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            year: "2020",
            institution: "Google Africa Developer Sponsorship",
            course: 'Graphics Design',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }]

        const experiences = [
            {
              year: "Business Startup",
              institution: "Computer Pride",
              course: 'Graphics Design',
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                year: "Business Startup",
                institution: "Computer Pride",
                course: 'Graphics Design',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                year: "Business Startup",
                institution: "Computer Pride",
                course: 'Graphics Design',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }]

  return (
    <Container className='exps' id="exp">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className="exp-bx wow zoomIn navbar-text">
                            <Tabs id="exp-tabs" className='ul-styled'>
                                <TabList variant="pills" className="nav-pills my-5 pb-5  justify-content-center align-items-center">
                                    <Tab className='exp-col nav-Item-left'>
                                        <div eventKey="first"><button className="vvd"><span>Education</span></button></div>
                                    </Tab>
                                    <Tab eventKey="second" className='exp-col nav-Item-right'>
                                        <div><button className="vvd"><span>Experience</span></button></div>
                                    </Tab>
                                </TabList>
                                <TabPanel className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                   
                                    {
                                        education.map((education, index) => {
                                            return (
                                            <EduCard
                                                key={index}
                                                {...education}
                                                />
                                            )
                                        })
                                    }
                                  
                                </TabPanel>
                                <TabPanel>
                                    {
                                        experiences.map((experiences, index) => {
                                            return (
                                            <EduCard
                                                key={index}
                                                {...experiences}
                                                />
                                            )
                                        })
                                    }
                                </TabPanel>
                            </Tabs>
                        </div>}
                    </TrackVisibility>
                </div>
            </div>
        </div>    
    </Container>
  )
}



