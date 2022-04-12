import React, {FC} from 'react';
import st from "./About.module.css";

interface TechItem {
    mainTitle: string;
    items: {
        title: string
        logo: string
        link: string
    }[]
}

interface ITechList {
    tech: TechItem
}

const TechStack: FC<ITechList> = ({tech}) => {

    const {mainTitle, items} = tech;

    const itemList = items.map(item =>
        <li key={item.title + mainTitle} className={st.tech_item}>
            <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={st.tech_link}
            >
                <img className={st.tech_icon} src={item.logo} alt={item.title + " logo"}/>
                <div className={st.tech_title}>{item.title}</div>
            </a>
        </li>)


    return (
        <div className={st.tech_stack}>
            <div className={st.tech_main_title}>{mainTitle}</div>
            <ul className={st.tech_item_list}>
                {itemList}
            </ul>
        </div>
    );
};

export default TechStack;
