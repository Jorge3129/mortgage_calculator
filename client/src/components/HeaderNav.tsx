import React, {FC} from 'react';
import st from "./styles/HeaderNav.module.css"
import {Link} from "react-router-dom";
import {useSticky} from "./hooks/useSticky";

const links = [
    {path: '/', title: 'Home'},
    {path: '/banks', title: 'Banks'},
    {path: '/mortgage', title: 'Mortgage'},
]

const HeaderNav: FC = () => {

    const navRef = useSticky();

    const linkList = links.map(link =>
        <li key={link.title} className={st.link_item}>
            <Link to={link.path} style={{textDecoration: 'none'}}>
                <span className={st.link_text}>{link.title}</span>
            </Link>
        </li>)

    return (
        <nav className={st.container} ref={navRef}>
            <ul className={st.link_list}>
                {linkList}
            </ul>
        </nav>
    );
};

export default HeaderNav;
