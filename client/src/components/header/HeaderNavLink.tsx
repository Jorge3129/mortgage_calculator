import React, {forwardRef, MouseEvent} from 'react';
import st from "./HeaderNav.module.css";
import {Link} from "react-router-dom";
import {ILink} from "./HeaderNav";

interface ILinkProps {
    link: ILink;
    onLinkClick: (e: MouseEvent<HTMLSpanElement>) => void;
}

const HeaderNavLink = forwardRef<HTMLSpanElement, ILinkProps>(
    ({link, onLinkClick}, borderRef) => {

        const bottomBorder = link.title === "Home" &&
            <span
                className="link_bottom_border"
                ref={borderRef}
                style={{width: '0'}}
            />

        return <>
            {bottomBorder}
            <li key={link.title} className={st.link_item + " link_item"}>
                <Link to={link.path} style={{textDecoration: 'none', display: "flex"}}>
                    <span
                        className={st.link_text + " link_span"}
                        onClick={onLinkClick}
                    >
                        {link.title}
                    </span>
                </Link>
            </li>
        </>
    }
)

export default HeaderNavLink;
