import React from 'react';
import st from "./About.module.css"
import TechStack from "./TechStack";
import {techs} from "./about.utils";


const TechStackList = () => {
    return (
        <ul className={st.tech_stack_list}>
            {techs.map(tech => <TechStack key={tech.mainTitle} tech={tech}/>)}
        </ul>
    );
};

export default TechStackList;
