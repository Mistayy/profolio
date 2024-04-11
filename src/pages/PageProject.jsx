import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { appTitle, resetBackgroundColor } from '../globals/globals';

const Project = ( ) => {


    useEffect(() => {
        document.title = `${appTitle} - Project`;
        resetBackgroundColor('#4B4947');    
    })

    
    return (
        <>
            <div>
                <ProjectCard id={41} title="Telus Copper to Fiber migration" 
                featureUrl='http://localhost:8888/liwen-profolio/wp-content/uploads/2024/04/movieDbF.png'
                alt='testimg' />
            </div>
        </>            
    )
}

export default Project
