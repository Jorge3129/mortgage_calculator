import React, {FC} from 'react';
import st from "./Auth.module.css"
import Login from "./Login";
import Logo from "../../components/Logo";
import Footer from "../../components/header/Footer";

const AuthPage: FC = () => {

    return (
        <div className={st.container}>
            <Logo/>
            <Login/>
            <Footer className={st.footer}/>
        </div>
    );
};

export default AuthPage;
