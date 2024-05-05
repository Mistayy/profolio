import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { appTitle, resetBackgroundColor ,restBase} from '../globals/globals';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


const Project = () => {
    const [frontEndData, setFrontEndData] = useState([]);
    const [backEndData, setBackEndData] = useState([]);

    useEffect(() => {
        document.title = `${appTitle} - Project`;
        //#4B4947
        resetBackgroundColor('#4B4947');
    }, []);

    useEffect(() => {
        const fetchFrontEndData = async () => {
            const url = restBase + 'fwd-projects/' + '?acf_format=standard&_fields=acf.project-title, acf.type,id,acf.feature-image,&fwd-project-category=4';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setFrontEndData(data);
            }
            // TODO: Error handling
        };
        fetchFrontEndData();
    }, []);

    useEffect(() => {
        const fetchBackEndData = async () => {
            const url = restBase + 'fwd-projects/' + '?acf_format=standard&_fields=acf.project-title, acf.type,id,acf.feature-image,&fwd-project-category=5';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setBackEndData(data);
            }
            // TODO: Error handling
        };
        fetchBackEndData();
    }, []);

    const renderCards = (data) => {
        return (
            <div className="card-container" data-aos="fade-left" data-aos-duration="6000">
                {data.map((project) => (
                    <div key={project.id} className="card">
                        <ProjectCard
                            id={project.id}
                            title={project.acf['project-title']}
                            featureUrl={project.acf['feature-image']}
                            alt="Project Image"
                        />
                    </div>
                ))}
            </div>
        );
    };
    return (

        <div className="project-wrapper">
            <div className="front-end-section">
                <div className="category-intro" data-aos="fade-right" data-aos-duration="5000">
                    <h1>01</h1>
                    <h2>Front-end web development</h2>
                    <hr />
                    <p>From responsive layouts to seamless animations, each project reflects my dedication to blending aesthetics with functionality. Let's bring ideas to life, one click at a time.</p> 
                </div>
                    {renderCards(frontEndData)}
            </div>
            <div className="back-end-section">
                <div className="category-intro" data-aos="fade-left">
                <h1>02</h1>
                <h2>Back-end web development</h2>
                <hr />
                <p>Explore projects showcasing my expertise in scalable solutions and elegant database designs. Join me as we engineer the backbone of tomorrow's digital experiences.</p>
                </div>
                {renderCards(backEndData)}
            </div>
            
        </div>
    );
};

export default Project;
