import React from 'react';
import st from "./Header.module.css";

const HeaderTitle = () => {
    return (
        <div className={st.header}>
            <div className={st.icon_title_container}>
                <div className={st.icon_container}>
                    <i className={"fa-solid fa-building-columns " + st.icon}/>
                </div>
                <span className={st.title}>The Banker</span>
            </div>
        </div>
    );
};

export default HeaderTitle;
