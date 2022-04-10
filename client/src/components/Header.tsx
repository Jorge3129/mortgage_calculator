import React, {FC} from 'react';
import st from "./styles/Header.module.css"
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";

const Header: FC = () => {
    return (
        <div className={st.container}>
            <HeaderTitle/>
            <HeaderNav/>
        </div>
    );
};

export default Header;
