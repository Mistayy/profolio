import React from 'react';



const SkillCard = ({skillName, skillLogoUrl}) => {
    return (
        <div className='skill'>
            <div className="image-wrapper">
                <img src={skillLogoUrl}></img>
            </div>
            <p>{skillName}</p>
       </div>
    );

};

export default SkillCard;
