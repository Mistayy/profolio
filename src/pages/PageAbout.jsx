import { useState, useEffect } from 'react'
import { appTitle,resetBackgroundColor } from '../globals/globals';
import Loading from '../components/Loading'
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../components/Timeline';
import SkillList from '../components/SkillList';

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
                <h2>About Me</h2><hr></hr>
                <div className='portrait'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <h2>Skill Set</h2><hr></hr>
                <SkillList />
                <h2>My experience</h2><hr></hr>
                <Timeline />

          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
