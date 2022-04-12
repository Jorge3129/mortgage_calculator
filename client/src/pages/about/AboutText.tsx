import React from 'react';
import st from "./About.module.css";

const AboutText = () => {
    return (
        <div className={st.paragraph_container}>
            <p className={st.paragraph}>
                My name is Heorhii Sanchenko and I am an aspiring web developer;)
            </p>
            <p className={st.paragraph}>
                You can view the project source code&nbsp;
                <a className={st.link}
                   href="https://github.com/Jorge3129/mortgage_calculator"
                   rel="noreferrer"
                   target="_blank">here</a>.
            </p>
            <p className={st.paragraph}>
                Here are the technologies/platfroms I used in this project:
            </p>
        </div>
    );
};

export default AboutText;
