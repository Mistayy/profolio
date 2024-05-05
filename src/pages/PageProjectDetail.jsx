import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { resetBackgroundColor, restBase,appTitle } from '../globals/globals';
import SkillCard from '../components/SkillCard';
import Gallery from '../components/Gallery';

const ProjectDetail = () => {
    const { id } = useParams();
    const [restData, setData] = useState({});
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        document.title = `${appTitle} - ProjectDetail`;
        resetBackgroundColor('#4B4947');    
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const url = restBase + 'fwd-projects/' + id + '?acf_format=standard';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
            // TODO: Error handling
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchSkillsData = async () => {
            const skills = restData.acf?.skills || [];
            const skillsPromises = skills.map(async (skill) => {
                const url = restBase + 'fwd-skills/' + skill.ID + '?acf_format=standard&_fields=id,acf.skill-logo.url,acf.skill-name,acf.skill-class';
                const response = await fetch(url);
                if (response.ok) {
                    return await response.json();
                } else {
                    // Handle error
                    console.error('Error fetching data for skill with ID:', skill.ID);
                    return null;
                }
            });

            const skillsData = await Promise.all(skillsPromises);
            setSkillsData(skillsData.filter(skill => skill !== null));
        };

        if (restData.acf?.skills) {
            fetchSkillsData();
        }
    }, [restData]);

    const metaList = [
        {
            'name': 'HighLight',
            'content': restData.acf ? restData.acf["project-highlight"] : ''
        },
        {
            'name': 'Reflection',
            'content': restData.acf ? restData.acf["project-reflection"] : ''
        }
    ];

    return (
        <div className='detail-wrapper'>
            <div className='img-showing'>
                
                {restData.acf && restData.acf['img-gallery']?(
                    <div className='detail-feature'>
                        <img src={restData.acf['feature-image']} alt="Feature Image" />
                    </div>
                ):null}
            </div>

            {restData.acf?
                (
                    <div className="overall-view">
                        <div className="right">
                            <h2>{restData.acf['project-title']}</h2>
                            <h3 className='type'>{restData.acf.type}, {restData.acf.time}</h3>
                            <h3 className='company'>{restData.acf.company}</h3>
                            <div className="skill-section-wrapper">
                            <div className='skill-section'>
                                    <div className='skill-gallery'>
                                        {skillsData.map(skill => (
                                            <SkillCard
                                                key={skill.id}
                                                skillName={skill.acf['skill-name']}
                                                skillLogoUrl={skill.acf['skill-logo'].url} />
                                        ))}
                                    </div>
                            </div>
                                            </div>
                        </div>
                        <div className="left">
                            {restData.acf.livesite ? (
                                <a href={restData.acf.livesite}><span>Live Site</span></a>
                            ) : null}
                            <p>{restData.acf['project-introduction']}</p>
                        </div>
                    </div>
                )
                    : null
            }

            <div className='detail-meta-wrapper'>
                {metaList.map((section, index) => (
                    <article key={index} className='detail-article'>
                        <h3 className='section-name'>{section.name}</h3>
                        <p className='section-content' dangerouslySetInnerHTML={{ __html: section.content }}></p>
                    </article>
                ))}
            </div>
            <div className='gallery-showing'>
            <h3>Project Gallery</h3>
                {restData.acf && restData.acf['img-gallery'] && restData.acf['img-gallery'].length > 0 ? (
                    <div className="detail-gallery">
                        <Gallery
                            content={restData.acf['img-gallery']}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default ProjectDetail;
