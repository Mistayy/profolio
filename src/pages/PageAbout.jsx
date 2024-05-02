import { useState, useEffect } from 'react'
import { appTitle,resetBackgroundColor } from '../globals/globals';
import Loading from '../components/Loading'
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../components/Timeline';
import SkillList from '../components/SkillList';
import portraitImage from '../images/portrait.png';
import codePenImage from '../images/codePen.png';
import gitHubImage from '../images/github.png';


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
                        <p>I am a results-driven Full-Stack website and software developer. With 3 years of experience specializing in Back-End development followed by one year focusing on Front-End work, I possess a comprehensive understanding of the full software development lifecycle.</p>
                    </div>
                    <div className="right">
                       <div className='portrait' style={{backgroundImage: `url(${portraitImage})`,}}></div>  
                    </div>
                </div>
                <div className="skillset">
                    <div className="left">
                        <h1>02</h1>
                        <h2>Skill Set</h2><hr></hr>
                        <p>Check out all of my web development skills.</p>
                    </div>
                    <div className="right">
                        <SkillList />
                    </div>
                </div>
                <div className="experience">
                    <div className="left">
                        <h1>03</h1>
                        <h2>Experience</h2><hr></hr>
                        <p>Here is a overview of my career experience.</p>
                    </div>
                    <div className="right">
                        <Timeline />
                    </div> 
                </div>
                <div className="contact">
                    <h1>04</h1>
                    <h2>Contact Me</h2><hr></hr>
                    <p>Let's keep in touch!</p>
                    <div className="social-media">
                        <a href="#"><img src={codePenImage} alt='codePenIcon'/></a>
                        <a href="#"><img src={gitHubImage} alt='gitHubIcon'/></a>
                        <a href="mailto:zhuangyedda@gmail.com" id="emailbox">Email Me</a>
                    </div>
                    
                </div>
                


          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
