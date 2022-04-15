import React, {FC} from 'react';
import st from "./HeaderNav.module.css"
import {useSticky} from "../hooks/useSticky";
import HeaderNavLink from "./HeaderNavLink";
import {useSlidingBorder} from "../hooks/useSlidingBorder";
import Logout from "./Logout";

export type ILink = { path: string, title: string }

const links: ILink[] = [
    {path: '/', title: 'Home'},
    {path: '/banks', title: 'Banks'},
    {path: '/calculator', title: 'Calculator'},
    {path: '/about', title: 'About'},
]

const HeaderNav: FC = () => {

    const navRef = useSticky();
    const {borderRef, onLinkClick} = useSlidingBorder();

    const linkList = links.map(link =>
        <HeaderNavLink
            key={link.title}
            ref={borderRef}
            link={link}
            onLinkClick={onLinkClick}
        />)

    return (
        <div className={st.dummy}>
            <nav className={st.container} ref={navRef}>
                <ul className={st.link_list}>
                    {linkList}
                </ul>
                <Logout/>
            </nav>
        </div>
    );
};

export default HeaderNav;
