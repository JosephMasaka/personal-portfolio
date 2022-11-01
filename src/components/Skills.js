import Html5  from "../assets/img/html5.svg"
import Css from "../assets/img/css3.svg"
import Js from "../assets/img/javascript.svg"
import Reacts from "../assets/img/react.svg"
import Node from "../assets/img/node.svg"
import MySql from "../assets/img/mysql.svg"
import WordpressIcon from "../assets/img/wordpress.svg";
import Angular from "../assets/img/angular.svg"
import Php from "../assets/img/php.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const php = {
    marginBottom:40,
    marginTop: 30
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Html5} alt="html5"/>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="CSS3" />
                                <h5>Css3</h5>
                            </div>
                            <div className="item">
                                <img src={Js} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Reacts} style={{marginBottom: 30}} alt="React JS" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={Angular} alt="Angular JS" />
                                <h5>Angular JS</h5>
                            </div>
                            <div className="item">
                                <img src={Node} alt="Node JSe" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={MySql} style={{marginBottom: 50}}  alt="MySql" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={Php} style={php}  alt="PHP" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={WordpressIcon} alt="Wordpress" />
                                <h5>Wordpress</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
