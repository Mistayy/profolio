import React from 'react';
import { Link } from 'react-router-dom';




const ProjectCard = ({id, title, featureUrl, alt}) => {
    // linkToUrl = '/project_details/' + id;
    const linkToUrl = '/';
    return (
        <div className='project-card'>
            <Link to={linkToUrl} className='link-wrap'>
                <div className='project-filter'>
                    <div className='overlap-layer'></div>
                    <div className="project-image-wrapper">
                        <img src={featureUrl} alt={alt}></img>
                    </div>
                </div>
                <p>{title}</p>
            </Link>
       </div>
    );

};

export default ProjectCard;
