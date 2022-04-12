import React, {FC, useState} from 'react';
import st from "./Auth.module.css"
import Login from "./Login";
import Logo from "../../components/Logo";

const AuthPage: FC = () => {

    return (
        <div className={st.container}>
            <Logo/>
            <Login/>
        </div>
    );
};

export default AuthPage;
