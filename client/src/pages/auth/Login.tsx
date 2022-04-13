import React, {MouseEvent, useState} from 'react';
import st from "./Auth.module.css";
import FieldList from "../../components/modals/FieldList";
import {loginFields, loginState, LoginState} from "./auth.utils";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import AuthAPI from "./auth.api";
import {useAuthContext} from "./AuthContext";

const Login = () => {

    const [state, setState] = useState<LoginState>(loginState);
    const {setUser} = useAuthContext();
    const [loader, setLoader] = useState<boolean>(false);

    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoader(true);
        const res = await AuthAPI.login(state);
        setLoader(false);
        if (res?.data.success && setUser) {
            const user = res.data.user;
            setUser(user);
            localStorage.setItem('user', user.userId + '');
            return;
        }
        alert(res.data.message);
    };

    return (
        <div className={st.form_container}>
            <form className={st.form}>
                <h3 className={st.title}>Login</h3>
                <FieldList state={state} setState={setState} fields={loginFields}/>
                <Button
                    parentClass={st.button}
                    onClick={onClick}
                >
                    Submit
                </Button>
            </form>
            {loader && <Loader className={st.loader}/>}
        </div>
    );
};

export default Login;
