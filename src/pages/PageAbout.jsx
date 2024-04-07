import { useState, useEffect } from 'react'
import { resetBackgroundColor } from '../globals/globals';
import Loading from '../components/Loading'
import Collapsible from 'react-collapsible';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../components/Timeline';

const About = ( {restBase} ) => {
    const restPath = restBase;
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        resetBackgroundColor();
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        { isLoaded ?
            <div className="wrapper">
                <h2>About Me</h2>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <div className="arrow"></div>
                <p id='connect'>Let's Connect</p>
                <div className="skillSet">
                    <h2>Skill Set</h2>
                    <Collapsible trigger="Languages 🔽">
                        <div className="skill-wrapper">
                        <div className='skill'>
                        <div className="image-wrapper">
                       <img src='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/JavaScript-logo.png'></img>
                       </div>
                       <p>Skillone</p>
                       </div>
                       <div className='skill'>
                       <div className="image-wrapper">
                        <img src='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/Mysql_logo.png'></img>
                        </div>
                        <p>Skilltwo</p>
                        
                       </div>
                       </div>
                    </Collapsible>
                    <Collapsible trigger="Languages 🔽">
                        <div className="skill-wrapper">
                        <div className='skill'>
                        <div className="image-wrapper">
                       <img src='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/JavaScript-logo.png'></img>
                       </div>
                       <p>Skillone</p>
                       </div>
                       <div className='skill'>
                       <div className="image-wrapper">
                        <img src='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/Mysql_logo.png'></img>
                        </div>
                        <p>Skilltwo</p>
                        
                       </div>
                       </div>
                    </Collapsible>

                </div>

                <Timeline />

          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
