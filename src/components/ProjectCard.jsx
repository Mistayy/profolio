import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';




const ProjectCard = ({id, title, featureUrl, alt}) => {
    const linkToUrl = '/projectDetail/' + id;

    return (
        
            <div className='project-card'>
                <Tilt>
                    <Link to={linkToUrl} className='link-wrap'>
                        <div className='project-filter'>
                            <div className='overlap-layer'></div>
                            <div className="project-image-wrapper">
                                <img src={featureUrl} alt={alt}></img>
                            </div>
                        </div>
                        <p>{title}</p>
                    </Link>
                </Tilt>
        </div>
    );

};

export default ProjectCard;
