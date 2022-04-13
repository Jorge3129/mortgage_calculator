import React, {FC} from 'react';
import st from './Footer.module.css'

interface Props {
    className?: string;
}

const Footer:FC<Props> = ({className}) => {
    return (
        <footer className={st.footer + " " + (className || "")}>
            &copy; 2022 Heorhii Sanchenko
        </footer>
    );
};

export default Footer;
