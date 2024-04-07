import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { restBase } from '../globals/globals'; 

const Timeline = () => {
    const [restData, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restBase + 'pages/25?acf_format=standard&_fields=acf.experiences');
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
            // TODO: Error handling
        };
        fetchData();
    }, []);

    const experienceList = restData.acf?.experiences || [];

    return (
        <>
            <div className='timeline'>
                <VerticalTimeline>
                    {experienceList.map((experience, index) => (
                        <VerticalTimelineElement 
                            key={index}
                            className="vertical-timeline-element--work"
                            date={`${experience['from-time']} - ${experience['to-time']}`}
                            iconStyle={{ background: 'white', color: '#fff',overflow:'hidden' }}
                            icon={<img src={experience['experience-icon'].url} alt={experience['experience-icon'].alt} />}
                        >
                            <h3 className="vertical-timeline-element-title">{experience['experience-title']}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{experience.position}</h4>
                            <p>{experience['short-description']}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Timeline;
