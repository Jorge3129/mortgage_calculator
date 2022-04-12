import React, {FC} from 'react';
import st from "./About.module.css"
import PageTitle from "../../components/PageTitle";
import TechStackList from "./TechStackList";
import AboutText from "./AboutText";

const AboutPage: FC = () => {

    return (
        <div className={"main "}>
            <PageTitle title={"About"}/>
            <div className={st.main_content + " page_content"}>
                <AboutText/>
                <TechStackList/>
            </div>
        </div>
    );
};

export default AboutPage;
