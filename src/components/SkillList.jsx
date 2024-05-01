import React, { useState, useEffect } from 'react';
import { restBase } from '../globals/globals'; 
import SkillCard from './SkillCard';
import { categorizeSkills } from '../utilities/utilities';
import Collapsible from 'react-collapsible';

const SkillList = () => {
    const [restData, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const url = restBase + 'fwd-skills?acf_format=standard&_fields=acf.skill-logo.url,acf.skill-name,acf.skill-class';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
            // TODO: Error handling
        };
        fetchData();
    }, []);

    const categorizedSkillsRes = categorizeSkills(restData);
    console.log(categorizedSkillsRes);
    return (
        <>
            <div className="skillSet">
                {Object.keys(categorizedSkillsRes).map(skillClass => (
                    <Collapsible key={skillClass} trigger={skillClass} open={true}>
                        <div className="skill-wrapper">
                            {categorizedSkillsRes[skillClass].map(skill => (
                                <div className='skill'>
                                    <SkillCard key={skill.name} skillName={skill.name} skillLogoUrl={skill.logoUrl} />
                                </div>
                            ))}
                        </div>
                    </Collapsible>
                ))}
            </div>
        </>
    );
};

export default SkillList;
