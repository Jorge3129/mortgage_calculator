import React, {MouseEvent} from 'react';
import st from "./HeaderNav.module.css";
import {useLogout} from "../../pages/auth/auth.hooks";

const Logout = () => {

    const logout = useLogout()

    const showProfile = (e: MouseEvent) => {

    }

    return (
        <div className={st.link_list}>

            <div className={st.profile_wrap}>
                <span className={st.profile} onClick={showProfile}>
                    <i className={"fa-solid fa-user " + st.profile_pic}/>
                </span>
            </div>

            <div className={st.link_item}>
                <span className={st.link_text + " " + st.logout} onClick={logout}>
                    Logout
                </span>
            </div>
        </div>

    );
};

export default Logout;

