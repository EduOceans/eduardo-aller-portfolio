import About from '../about/About';
import { MyStack } from '../my-stack/MyStack';
import Projects from '../projects/Projects';
import { Testimonials } from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import './MainContent.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function MainContent() {
    return (
        <div className="main-content-container">
            <div className='hero-container'>
               <div className='intro-container'>
                    <div className='hello'>Hello, I'm</div>
                    <h2 className='name'>Eduardo Aller</h2>
                    <p className='letter'> A
                        <span className='web-developer'> Web Developer </span>
                        <span>from</span>
                        <span className='madrid'> Madrid</span>
                    </p>
                  <div className='uk'>I'm a Developer based in Brighton, UK, and I'm very passionate and dedicated to my work.</div>
                    <HashLink to="#about">
                        <button className='about-button' type="button">About Me</button>
                    </HashLink>
                    <Link to="https://www.linkedin.com/in/eduardo-aller-torralbo" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link to="https://github.com/EduOceans" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link to="https://www.facebook.com/eduardo.allertorralbo" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                 </Link>
                    <Link to="https://www.instagram.com/edu_oceans/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    </div>
                <div className='avatar-container'>
                    <img src='src/assets/profile.png'className='avatar' alt='profile'></img>
                    <img src='src/assets/react-icon.png'className='react-icon avatar-icon' alt='react-icon'></img>
                    <img src='src/assets/javascript-icon.png'className='javascript-icon avatar-icon' alt='react-icon'></img>
                    <img src='src/assets/css-icon.png'className='css-icon avatar-icon' alt='css-icon'></img>
                </div>
            </div>
            <div className='skills-container'>
                <div className='skill-card' id='about'>
                    <img src='src/assets/strategy-development.png' className='strategy skills-item' alt='strategy'></img>
                    <h2>Project Design</h2>
                </div>
                <div className='skill-card'>
                    <img src='src/assets/coding-skills-img.png' className='coding-skills-img skills-item' alt='coding-skills'></img>
                    <h2>Quality Code</h2>
                </div>
                <div className='skill-card'>
                    <img src='src/assets/excellence.png' className='excellence skills-item' alt='excellence'></img>
                    <h2>Excellent Results</h2>
                </div>
            </div>
            <About />
            <Projects />
            <MyStack />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default MainContent;