import React from 'react';
import st from "./styles/Logo.module.css";

const Logo = () => {
    return (
        <div className={st.icon_title_container}>
            <div className={st.icon_container}>
                <i className={"fa-solid fa-building-columns " + st.icon}/>
            </div>
            <span className={st.title}>The Banker</span>
        </div>
    );
};

export default Logo;
