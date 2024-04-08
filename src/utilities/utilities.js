function getYear(){
    const d = new Date();
    return d.getFullYear();
}

function categorizeSkills(data) {
    if (Array.isArray(data)){
        const categorizedSkills = {};

        data.forEach(skill => {
            const { 'skill-class': skillClasses, 'skill-name': skillName, 'skill-logo': skillLogo } = skill.acf;
            
            skillClasses.forEach(skillClass => {
                if (categorizedSkills.hasOwnProperty(skillClass)) {
                    categorizedSkills[skillClass].push({ name: skillName, logoUrl: skillLogo.url });
                } else {
                    categorizedSkills[skillClass] = [{ name: skillName, logoUrl: skillLogo.url }];
                }
            });
        });
        return categorizedSkills;
    }else{
        return {};
    }
}
export {getYear,categorizeSkills}