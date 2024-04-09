import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard'
import { appTitle, resetBackgroundColor } from '../globals/globals';

const ProjectDetail = () => {
    const { id } = useParams();


    useEffect(() => {
        document.title = `${appTitle} - ProjectDetail`;
        resetBackgroundColor('#4B4947');    
    })

    
    return (
        <>
            <div>
                <ProjectCard id={id} title="Telus Copper to Fiber migration" 
                featureUrl='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/movieDbF.png'
                alt='testimg' />
            </div>
        </>            
    )
}

export default ProjectDetail;
