import { useState, useEffect } from 'react'
import { appTitle,resetBackgroundColor } from '../globals/globals';
import Loading from '../components/Loading'
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../components/Timeline';
import SkillList from '../components/SkillList';
import facebookImage from '../images/portrait.png';

const About = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
        resetBackgroundColor('#5E6C5B');
    }, []);

    const [isLoaded, setLoadStatus] = useState(true);


    
    return (
        <>
        { isLoaded ?
            <div className="wrapper">
                <div className="brief">
                    <div className="left">
                        <h1>01</h1>
                        <h2>About Me</h2><hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </div>
                    <div className="right">
                       <div className='portrait' style={{backgroundImage: `url(${facebookImage})`,}}></div>  
                    </div>
                </div>
                <div className="skillset">
                    <div className="left">
                        <h1>02</h1>
                        <h2>Skill Set</h2><hr></hr>
                    </div>
                    <div className="right">
                        <SkillList />
                    </div>
                </div>
                <div className="experience">
                    <div className="left">
                        <h1>03</h1>
                        <h2>My experience</h2><hr></hr>
                    </div>
                    <div className="right">
                        <Timeline />
                    </div> 
                </div>
                <div className="Contact">
                    <h2>Contact Me</h2>
                    <p>Let's keep in touch!</p>
                    
                </div>
                


          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
